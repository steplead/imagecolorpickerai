'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import ColorThief from 'colorthief';
import { Upload, Copy, Check, Palette, ArrowRight, Keyboard } from 'lucide-react';
import {
  validateDecodedDimensions,
  sourceCoordsFromPointer,
  clampSampleRect,
  hexToRgb,
  hexToHsl,
  rgbToHex,
  formatHsl,
  ALLOWED_MIME,
  MAX_FILE_BYTES,
} from '../utils/pickerUtils.mjs';
import { findClosestTraditionalColor } from '../utils/colorUtils';

const MAG_SAMPLE = 11; // odd -> has a centre pixel
const MAG_SCALE = 14; // px per source pixel in the magnifier
const MAG_SIZE = MAG_SAMPLE * MAG_SCALE; // 154
const HISTORY_KEY = 'picker_selected_history';
const HISTORY_MAX = 8;

const ORIGIN_LABEL = {
  chinese: 'Chinese traditional color',
  japanese: 'Japanese traditional color',
  pantone: 'Pantone',
  nature: 'Natural color',
};

function track(name, params) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    try {
      window.gtag('event', name, params);
    } catch {
      /* analytics is best-effort, never blocks the tool */
    }
  }
}

async function copyText(text) {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    /* fall through to legacy path */
  }
  try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}

export default function PixelPicker() {
  const [status, setStatus] = useState('empty'); // empty | loading | ready | error
  const [errorMsg, setErrorMsg] = useState('');
  const [pasteHint, setPasteHint] = useState('');
  const [imageSrc, setImageSrc] = useState(null);
  const [nat, setNat] = useState({ w: 0, h: 0 });

  const [selected, setSelected] = useState(null); // { x, y, hex, rgb, hsl }
  const [palette, setPalette] = useState([]); // array of hex strings
  const [match, setMatch] = useState(null); // closest traditional color
  const [copied, setCopied] = useState(''); // 'hex' | 'rgb' | 'hsl' | ''
  const [copyError, setCopyError] = useState(''); // 'hex' | 'rgb' | 'hsl' | ''
  const [history, setHistory] = useState([]); // actual selected-color records

  const imgRef = useRef(null);
  const wrapRef = useRef(null);
  const canvasRef = useRef(null); // offscreen, natural-resolution, for pixel reads
  const magRef = useRef(null); // visible magnifier
  const downRef = useRef(null); // pointerdown anchor for tap detection
  const rafRef = useRef(null); // magnifier rAF handle
  const pendingMagRef = useRef(null);

  // --- Selected-color history (genuine picked pixels, not traditional matches) ---
  useEffect(() => {
    try {
      const saved = localStorage.getItem(HISTORY_KEY);
      if (saved) setHistory(JSON.parse(saved));
    } catch {
      /* ignore corrupt storage */
    }
  }, []);

  const pushHistory = useCallback((record) => {
    setHistory((prev) => {
      const next = [record, ...prev.filter((c) => c.hex !== record.hex)].slice(0, HISTORY_MAX);
      try {
        localStorage.setItem(HISTORY_KEY, JSON.stringify(next));
      } catch {
        /* storage may be full or blocked; non-fatal */
      }
      return next;
    });
  }, []);

  // Read a single pixel from the offscreen canvas at natural coords.
  const readPixel = useCallback((x, y) => {
    const canvas = canvasRef.current;
    if (!canvas || canvas.width === 0) return null;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return null;
    const cx = Math.max(0, Math.min(x, canvas.width - 1));
    const cy = Math.max(0, Math.min(y, canvas.height - 1));
    let data;
    try {
      data = ctx.getImageData(cx, cy, 1, 1).data;
    } catch {
      return null;
    }
    const hex = rgbToHex(data[0], data[1], data[2]);
    return { x: cx, y: cy, hex, rgb: { r: data[0], g: data[1], b: data[2] }, hsl: hexToHsl(hex) };
  }, []);

  // Draw the 11x11 edge-safe magnifier centred on (srcX, srcY).
  // Draws directly from the source canvas (no temp canvas allocation) so
  // frequent pointer moves don't churn memory. clampSampleRect guarantees the
  // source rect is fully inside the canvas, so getImageData never throws.
  const drawMagnifier = useCallback((srcX, srcY) => {
    const canvas = canvasRef.current;
    const mag = magRef.current;
    if (!canvas || !mag || canvas.width === 0) return;
    const mctx = mag.getContext('2d');
    mctx.clearRect(0, 0, MAG_SIZE, MAG_SIZE);
    mctx.fillStyle = '#eee';
    mctx.fillRect(0, 0, MAG_SIZE, MAG_SIZE);

    const { sx, sy, sw, sh, destX, destY } = clampSampleRect(srcX, srcY, MAG_SAMPLE, canvas.width, canvas.height);
    mctx.imageSmoothingEnabled = false;
    try {
      mctx.drawImage(canvas, sx, sy, sw, sh, destX * MAG_SCALE, destY * MAG_SCALE, sw * MAG_SCALE, sh * MAG_SCALE);
    } catch {
      return; // never happens thanks to clampSampleRect, but stay safe
    }

    // crosshair on the selected pixel
    const relX = srcX - sx;
    const relY = srcY - sy;
    const px = (destX + relX) * MAG_SCALE + MAG_SCALE / 2;
    const py = (destY + relY) * MAG_SCALE + MAG_SCALE / 2;
    mctx.strokeStyle = 'rgba(0,0,0,0.7)';
    mctx.lineWidth = 1;
    mctx.beginPath();
    mctx.moveTo(px - 6, py);
    mctx.lineTo(px + 6, py);
    mctx.moveTo(px, py - 6);
    mctx.lineTo(px, py + 6);
    mctx.stroke();
    mctx.strokeStyle = 'rgba(255,255,255,0.7)';
    mctx.strokeRect(destX * MAG_SCALE - 0.5, destY * MAG_SCALE - 0.5, MAG_SAMPLE * MAG_SCALE, MAG_SAMPLE * MAG_SCALE);
  }, []);

  const scheduleMagnifier = useCallback(
    (x, y) => {
      pendingMagRef.current = { x, y };
      if (rafRef.current == null) {
        rafRef.current = requestAnimationFrame(() => {
          rafRef.current = null;
          const p = pendingMagRef.current;
          if (p) drawMagnifier(p.x, p.y);
        });
      }
    },
    [drawMagnifier]
  );

  // Committed selection: reads the pixel, shows it, matches a traditional color,
  // records history, and emits EXACTLY ONE analytics event. Never called from
  // pointermove, so dragging/hovering does not flood GA4.
  const pickPixel = useCallback(
    (x, y) => {
      const px = readPixel(x, y);
      if (!px) return;
      setSelected(px);
      const m = findClosestTraditionalColor(px.hex);
      setMatch(m || null);
      pushHistory({
        hex: px.hex.toUpperCase(),
        rgb: px.rgb,
        hsl: px.hsl,
        matchId: m ? m.id : null,
        matchName: m ? m.name : null,
        ts: Date.now(),
      });
      track('image_picker_pixel_select', { has_match: Boolean(m) });
    },
    [readPixel, pushHistory]
  );

  const onImageLoad = useCallback(() => {
    const img = imgRef.current;
    if (!img || !img.complete) return;
    const w = img.naturalWidth;
    const h = img.naturalHeight;
    const dimCheck = validateDecodedDimensions(w, h);
    if (!dimCheck.ok) {
      setStatus('error');
      setErrorMsg(dimCheck.error);
      track('image_picker_upload_error', { reason: 'decoded_dimensions' });
      return;
    }
    const canvas = canvasRef.current;
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    ctx.drawImage(img, 0, 0, w, h);

    try {
      const thief = new ColorThief();
      const pal = thief.getPalette(img, 8);
      setPalette(pal.map((rgb) => rgbToHex(rgb[0], rgb[1], rgb[2])));
    } catch {
      setPalette([]);
    }

    setNat({ w, h });
    setStatus('ready');
    const cx = Math.floor(w / 2);
    const cy = Math.floor(h / 2);
    pickPixel(cx, cy);
    drawMagnifier(cx, cy);
    // Only now, after decode + canvas init succeeded, record success.
    track('image_picker_upload_success', {});
  }, [pickPixel, drawMagnifier]);

  const onImageError = useCallback(() => {
    setStatus('error');
    setErrorMsg('This image could not be decoded. Please try a different JPG, PNG, or WebP file.');
    track('image_picker_upload_error', { reason: 'decode_failure' });
  }, []);

  const handleFile = useCallback(
    (file) => {
      if (!file) return;
      const type = file.type || '';
      if (!ALLOWED_MIME.includes(type)) {
        setStatus('error');
        setErrorMsg(`Unsupported format: ${type || 'unknown'}. Use JPG, PNG, or WebP.`);
        track('image_picker_upload_error', { reason: 'invalid_type' });
        return;
      }
      const size = typeof file.size === 'number' ? file.size : 0;
      if (size > MAX_FILE_BYTES) {
        setStatus('error');
        setErrorMsg(`Image is too large (${(size / 1048576).toFixed(1)} MB). Max ${MAX_FILE_BYTES / 1048576} MB.`);
        track('image_picker_upload_error', { reason: 'file_too_large' });
        return;
      }
      // Mount the image in a loading state; onLoad finishes initialization.
      setStatus('loading');
      setErrorMsg('');
      setPasteHint('');
      setSelected(null);
      setMatch(null);
      setPalette([]);
      const reader = new FileReader();
      reader.onload = (e) => setImageSrc(e.target.result);
      reader.onerror = () => {
        setStatus('error');
        setErrorMsg('Could not read this file. Please try another image.');
        track('image_picker_upload_error', { reason: 'file_read' });
      };
      reader.readAsDataURL(file);
    },
    []
  );

  const onInputChange = (e) => {
    const file = e.target.files && e.target.files[0];
    handleFile(file);
  };

  const onDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files && e.dataTransfer.files[0];
    handleFile(file);
  };

  // Scoped window paste listener — registered on mount, removed on cleanup.
  // Ignores pastes while the user is typing in a field, and ignores pastes
  // once an image is already loaded (so it only triggers on the empty picker).
  useEffect(() => {
    const onPaste = (e) => {
      const ae = document.activeElement;
      if (ae && (ae.tagName === 'INPUT' || ae.tagName === 'TEXTAREA' || ae.isContentEditable)) return;
      if (imageSrc) return;
      const items = e.clipboardData && e.clipboardData.items;
      if (!items) return;
      let found = false;
      for (const it of items) {
        if (it.kind === 'file' && it.type && it.type.startsWith('image/')) {
          const f = it.getAsFile();
          if (f) {
            handleFile(f);
            found = true;
            break;
          }
        }
      }
      if (!found) {
        setPasteHint('Clipboard does not contain a supported image (JPG, PNG, or WebP).');
      }
    };
    window.addEventListener('paste', onPaste);
    return () => window.removeEventListener('paste', onPaste);
  }, [handleFile, imageSrc]);

  const pointerToPixel = (clientX, clientY) => {
    const img = imgRef.current;
    if (!img) return null;
    const rect = img.getBoundingClientRect();
    const { x, y } = sourceCoordsFromPointer(clientX, clientY, rect, nat.w, nat.h);
    return { x, y };
  };

  const onPointerDown = (e) => {
    downRef.current = { x: e.clientX, y: e.clientY, t: Date.now() };
    const p = pointerToPixel(e.clientX, e.clientY);
    if (p) scheduleMagnifier(p.x, p.y); // hover preview only
  };

  const onPointerMove = (e) => {
    // Magnifier preview only — NO selection, NO analytics (prevents flooding).
    const p = pointerToPixel(e.clientX, e.clientY);
    if (p) scheduleMagnifier(p.x, p.y);
  };

  const onPointerUp = (e) => {
    const d = downRef.current;
    downRef.current = null;
    if (!d || status !== 'ready') return;
    const dist = Math.hypot(e.clientX - d.x, e.clientY - d.y);
    const dt = Date.now() - d.t;
    // Treat as a tap only if the pointer barely moved and the gesture was quick.
    // Larger moves are page scrolls / drags and must NOT select a pixel.
    if (dist <= 10 && dt <= 600) {
      const p = pointerToPixel(e.clientX, e.clientY);
      if (p) pickPixel(p.x, p.y);
    }
  };

  const onPointerCancel = () => {
    downRef.current = null;
  };

  const onKeyDown = (e) => {
    if (status !== 'ready') return;
    const step = e.shiftKey ? 10 : 1;
    const cur = selected || { x: Math.floor(nat.w / 2), y: Math.floor(nat.h / 2) };
    let nx = cur.x;
    let ny = cur.y;
    if (e.key === 'ArrowLeft') nx -= step;
    else if (e.key === 'ArrowRight') nx += step;
    else if (e.key === 'ArrowUp') ny -= step;
    else if (e.key === 'ArrowDown') ny += step;
    else return;
    e.preventDefault();
    nx = Math.max(0, Math.min(nx, nat.w - 1));
    ny = Math.max(0, Math.min(ny, nat.h - 1));
    pickPixel(nx, ny);
    drawMagnifier(nx, ny);
  };

  const pickFromPalette = (hex) => {
    setSelected({ x: null, y: null, hex, rgb: hexToRgb(hex), hsl: hexToHsl(hex) });
    const m = findClosestTraditionalColor(hex);
    setMatch(m || null);
  };

  const doCopy = async (field, text) => {
    const ok = await copyText(text);
    if (ok) {
      setCopied(field);
      setCopyError('');
      track('image_picker_color_copy', { format: field });
      setTimeout(() => setCopied((c) => (c === field ? '' : c)), 1600);
    } else {
      setCopyError(field);
      setCopied('');
      setTimeout(() => setCopyError((c) => (c === field ? '' : c)), 3200);
    }
  };

  const reset = () => {
    setImageSrc(null);
    setSelected(null);
    setMatch(null);
    setPalette([]);
    setNat({ w: 0, h: 0 });
    setStatus('empty');
    setErrorMsg('');
    setPasteHint('');
    if (rafRef.current != null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  };

  const matchOrigin = match && match.collectionId ? ORIGIN_LABEL[match.collectionId] || match.collectionId : null;

  return (
    <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden border border-neutral-100">
      {/* Upload / drop / paste area */}
      {status === 'empty' && (
        <label
          onDragOver={(e) => e.preventDefault()}
          onDrop={onDrop}
          className="flex flex-col items-center justify-center cursor-pointer p-12 min-h-[320px] bg-neutral-50 hover:bg-neutral-100 transition text-center"
        >
          <Upload className="w-12 h-12 text-neutral-400 mb-4" />
          <span className="text-lg font-medium text-neutral-700">Upload an image to pick colors</span>
          <span className="text-sm text-neutral-400 mt-2">JPG, PNG, or WebP · drag &amp; drop or paste · up to 10 MB</span>
          <span className="text-xs text-neutral-400 mt-3 max-w-md">
            Your image is processed in your browser and is not sent to our server. Selected colors may be saved in your
            browser on this device.
          </span>
          {pasteHint && <span className="text-xs text-red-500 mt-3">{pasteHint}</span>}
          <input type="file" className="hidden" accept="image/jpeg,image/png,image/webp" onChange={onInputChange} />
        </label>
      )}

      {status === 'loading' && (
        <div className="flex flex-col items-center justify-center min-h-[320px] bg-neutral-50">
          <span className="text-neutral-500">Loading image…</span>
        </div>
      )}

      {status === 'error' && (
        <div className="flex flex-col items-center justify-center min-h-[320px] bg-neutral-50 px-6 text-center">
          <span className="text-red-600 font-medium mb-2">Something went wrong</span>
          <span className="text-sm text-neutral-500 mb-4">{errorMsg}</span>
          <button
            onClick={reset}
            className="px-4 py-2 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition"
          >
            Try another image
          </button>
        </div>
      )}

      {/* Image + picking surface — mounted while loading AND ready so onLoad fires */}
      {imageSrc && status !== 'error' && (
        <div className="relative w-full bg-neutral-100">
          <div
            ref={wrapRef}
            className="relative w-full flex items-center justify-center select-none"
            style={{ minHeight: 320 }}
          >
            <img
              ref={imgRef}
              src={imageSrc}
              alt="Uploaded image — click or tap to pick a color, or use arrow keys"
              className="block max-w-full max-h-[460px] w-auto h-auto object-contain"
              style={{ touchAction: 'pan-y' }}
              draggable={false}
              onLoad={onImageLoad}
              onError={onImageError}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerCancel}
              tabIndex={0}
              role="application"
              aria-label="Image color picking area. Click or tap to select a pixel, or use the arrow keys to move the cursor."
              onKeyDown={onKeyDown}
            />
            {/* Magnifier */}
            <div
              className="absolute bottom-3 right-3 rounded-lg overflow-hidden shadow-lg ring-1 ring-black/10 pointer-events-none"
              aria-hidden="true"
            >
              <canvas ref={magRef} width={MAG_SIZE} height={MAG_SIZE} />
            </div>
          </div>

          <div className="absolute top-3 right-3 flex gap-2">
            <label className="bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-sm text-sm font-medium cursor-pointer hover:bg-white transition">
              Change
              <input type="file" className="hidden" accept="image/jpeg,image/png,image/webp" onChange={onInputChange} />
            </label>
            <button
              onClick={reset}
              className="bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-sm text-sm font-medium text-red-500 hover:bg-neutral-50 transition"
            >
              Clear
            </button>
          </div>

          <div className="absolute top-3 left-3 flex items-center gap-1.5 text-xs text-neutral-500 bg-white/80 backdrop-blur px-2 py-1 rounded-full">
            <Keyboard className="w-3.5 h-3.5" /> Arrow keys to nudge
          </div>
        </div>
      )}

      {/* Offscreen canvas for exact pixel reads (never rendered visually) */}
      <canvas ref={canvasRef} width={0} height={0} className="hidden" aria-hidden="true" />

      {/* Result panel */}
      {status === 'ready' && selected && (
        <div className="p-6 bg-white border-t border-neutral-100">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <div
              className="w-20 h-20 rounded-xl shadow-inner border border-neutral-200 flex-shrink-0"
              style={{ backgroundColor: selected.hex }}
              aria-hidden="true"
            />
            <div className="flex-1 min-w-0">
              <CopyRow
                label="HEX"
                value={selected.hex.toUpperCase()}
                state={copied === 'hex' ? 'copied' : copyError === 'hex' ? 'error' : ''}
                onCopy={() => doCopy('hex', selected.hex.toUpperCase())}
              />
              <CopyRow
                label="RGB"
                value={`rgb(${selected.rgb.r}, ${selected.rgb.g}, ${selected.rgb.b})`}
                state={copied === 'rgb' ? 'copied' : copyError === 'rgb' ? 'error' : ''}
                onCopy={() => doCopy('rgb', `rgb(${selected.rgb.r}, ${selected.rgb.g}, ${selected.rgb.b})`)}
              />
              <CopyRow
                label="HSL"
                value={formatHsl(selected.hsl)}
                state={copied === 'hsl' ? 'copied' : copyError === 'hsl' ? 'error' : ''}
                onCopy={() => doCopy('hsl', formatHsl(selected.hsl))}
              />
              {selected.x !== null && (
                <p className="text-xs text-neutral-400 mt-1">
                  Pixel {selected.x}, {selected.y}
                  {nat.w ? ` of ${nat.w}×${nat.h}` : ''}
                </p>
              )}
            </div>
          </div>

          {/* Closest traditional color */}
          {match && (
            <div className="mt-5 p-4 rounded-xl bg-neutral-50 border border-neutral-100">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">Closest match</span>
                  <h3 className="text-xl font-bold text-neutral-900 mt-1 truncate">{match.name}</h3>
                  {matchOrigin && <p className="text-sm text-neutral-500 mt-0.5">{matchOrigin}</p>}
                  {match.meaning && (
                    <p className="text-sm text-neutral-600 mt-2 leading-relaxed line-clamp-3">{match.meaning}</p>
                  )}
                </div>
                <a
                  href={`/color/${match.id}`}
                  title={`Full details for ${match.name}`}
                  className="flex-shrink-0 flex items-center gap-2 bg-neutral-900 text-white px-4 py-2.5 rounded-xl font-medium hover:bg-neutral-800 transition"
                >
                  Details
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Auto palette */}
      {status === 'ready' && palette.length > 0 && (
        <div className="p-6 bg-white border-t border-neutral-100">
          <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-3 flex items-center gap-2">
            <Palette className="w-4 h-4" /> Palette from this image
          </h3>
          <div className="flex flex-wrap gap-3">
            {palette.map((hex, i) => (
              <button
                key={`${hex}-${i}`}
                onClick={() => pickFromPalette(hex)}
                title={`Pick ${hex.toUpperCase()}`}
                aria-label={`Pick color ${hex}`}
                className="w-10 h-10 rounded-full shadow-sm border-2 border-transparent hover:scale-110 hover:border-neutral-400 transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400"
                style={{ backgroundColor: hex }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Genuine selected-color history */}
      {history.length > 0 && (
        <div className="p-6 bg-white border-t border-neutral-100">
          <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-3">Your recent picks</h3>
          <div className="flex flex-wrap gap-3">
            {history.map((c, i) => (
              <div
                key={`${c.hex}-${i}`}
                className="flex flex-col items-center gap-1"
                title={c.hex}
              >
                <span
                  className="w-9 h-9 rounded-full shadow-sm border border-black/5"
                  style={{ backgroundColor: c.hex }}
                  aria-hidden="true"
                />
                <span className="text-[10px] text-neutral-500 font-mono">{c.hex}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Screen-reader live region for selection + copy failures */}
      {status === 'ready' && selected && (
        <p className="sr-only" aria-live="polite">
          Selected color {selected.hex.toUpperCase()}, RGB {selected.rgb.r} {selected.rgb.g} {selected.rgb.b},{' '}
          {formatHsl(selected.hsl)}
          {match ? `, closest match ${match.name}` : ''}
        </p>
      )}
      {copyError && (
        <p className="sr-only" role="alert" aria-live="assertive">
          Could not copy. Please select and copy the value manually.
        </p>
      )}
    </div>
  );
}

function CopyRow({ label, value, state, onCopy }) {
  return (
    <div className="flex items-center gap-2 mb-1.5">
      <span className="text-xs font-semibold text-neutral-400 w-8">{label}</span>
      <span className="font-mono text-sm text-neutral-800 truncate">{value}</span>
      {state === 'error' ? (
        <span className="ml-auto text-xs text-red-500">Copy failed</span>
      ) : (
        <button
          onClick={onCopy}
          title={`Copy ${label}`}
          aria-label={`Copy ${label} value`}
          className="ml-auto flex items-center gap-1 text-xs text-neutral-400 hover:text-neutral-900 transition"
        >
          {state === 'copied' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
          {state === 'copied' ? 'Copied' : 'Copy'}
        </button>
      )}
    </div>
  );
}
