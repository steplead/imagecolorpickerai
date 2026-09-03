'use client';

import { useState, useEffect, useRef } from 'react';
import ColorThief from 'colorthief';
import { Upload, Plus, Trash2, Shuffle, ArrowRight, Image as ImageIcon } from 'lucide-react';
import {
  hexToRgb,
  rgbToHex,
  ALLOWED_MIME,
  MAX_FILE_BYTES,
} from '../utils/pickerUtils.mjs';
import { computePersonality } from '../lib/colorPersonality/scoring.mjs';
import {
  decodeColors,
  buildResultUrl,
} from '../lib/colorPersonality/share.mjs';
import ColorPersonalityResultCard from './ColorPersonalityResultCard';

function track(name, params) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    try {
      window.gtag('event', name, params);
    } catch {
      /* analytics is best-effort, never blocks the tool */
    }
  }
}

const DEFAULT_COLORS = ['#e23b2e', '#2f6b4f', '#3b2a5a', '#e0a83c'];

export default function ColorPersonalityTest() {
  const [colors, setColors] = useState(DEFAULT_COLORS);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [imageName, setImageName] = useState('');
  const fileRef = useRef(null);

  // Read a shared result from the `c` query param on first load (client-only,
  // keeps the page static-host friendly — no server round trip).
  useEffect(() => {
    track('cpt_view');
    try {
      const params = new URLSearchParams(window.location.search);
      const c = params.get('c');
      if (c) {
        const decoded = decodeColors(c);
        if (decoded) {
          setColors(decoded);
          const res = computePersonality(decoded);
          if (!res.error) {
            setResult(res);
            track('cpt_result_view', { archetype: res.archetypeId, source: 'link' });
          }
        }
      }
    } catch {
      /* ignore malformed link, start fresh */
    }
  }, []);

  const setColorAt = (i, hex) => setColors((prev) => prev.map((c, idx) => (idx === i ? hex : c)));
  const addColor = () => setColors((prev) => (prev.length < 5 ? [...prev, '#d8c7a1'] : prev));
  const removeColor = (i) =>
    setColors((prev) => (prev.length > 3 ? prev.filter((_, idx) => idx !== i) : prev));

  const shuffle = () => {
    const pool = ['#e23b2e', '#2f6b4f', '#3b2a5a', '#e0a83c', '#f4c2d0', '#1f8a8a', '#c0288f', '#f3ece0', '#0e0e0e', '#7d9bb5'];
    const pick = [];
    while (pick.length < 4) {
      const h = pool[Math.floor(Math.random() * pool.length)];
      if (!pick.includes(h)) pick.push(h);
    }
    setColors(pick);
    setResult(null);
    setError('');
  };

  const generate = () => {
    const valid = colors.filter((c) => hexToRgb(c));
    if (valid.length < 3 || valid.length > 5) {
      setError('Pick 3 to 5 colors to continue.');
      return;
    }
    const res = computePersonality(valid);
    if (res.error) {
      setError('Pick 3 to 5 colors to continue.');
      return;
    }
    setResult(res);
    setError('');
    track('cpt_generate', { archetype: res.archetypeId });
    track('cpt_result_view', { archetype: res.archetypeId, source: 'button' });
    try {
      const url = buildResultUrl(window.location.origin, valid);
      window.history.replaceState(null, '', url);
    } catch {
      /* non-fatal */
    }
  };

  const onFile = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    if (!ALLOWED_MIME.includes(file.type)) {
      setError('Use a JPG, PNG, or WebP image.');
      return;
    }
    if (file.size > MAX_FILE_BYTES) {
      setError('Image is too large (max 5 MB).');
      return;
    }
    setImageName(file.name);
    const objectUrl = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      try {
        const thief = new ColorThief();
        const palette = thief.getPalette(img, 8) || [];
        const hexes = palette
          .map(([r, g, b]) => rgbToHex(r, g, b))
          .filter(Boolean)
          .slice(0, 5);
        if (hexes.length >= 3) {
          setColors(hexes);
          setResult(null);
          track('cpt_image_upload', { count: hexes.length });
        } else {
          setError('Could not find enough colors in that image.');
        }
      } catch {
        setError('Could not read colors from that image.');
      } finally {
        URL.revokeObjectURL(objectUrl);
      }
    };
    img.onerror = () => {
      setError('Could not load that image.');
      URL.revokeObjectURL(objectUrl);
    };
    img.src = objectUrl;
    e.target.value = '';
  };

  const reset = () => {
    setResult(null);
    setError('');
    try {
      window.history.replaceState(null, '', window.location.pathname);
    } catch {
      /* non-fatal */
    }
  };

  if (result) {
    return (
      <ColorPersonalityResultCard result={result} colors={colors} onReset={reset} />
    );
  }

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-7">
      <p className="mb-4 text-sm text-neutral-500">
        Choose 3 to 5 colors you love — by hand, or from an image. We match your
        palette to one of 16 Color Personalities. Everything runs in your browser.
      </p>

      <div className="space-y-3">
        {colors.map((hex, i) => (
          <div key={i} className="flex items-center gap-3">
            <input
              type="color"
              aria-label={`Color ${i + 1}`}
              value={hex}
              onChange={(e) => setColorAt(i, e.target.value)}
              className="h-12 w-12 shrink-0 cursor-pointer rounded-lg border border-neutral-200 bg-white p-1"
            />
            <input
              type="text"
              value={hex.toUpperCase()}
              onChange={(e) => setColorAt(i, e.target.value)}
              className="w-32 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 font-mono text-sm uppercase tracking-wide text-neutral-800 focus:border-neutral-400 focus:outline-none"
            />
            {colors.length > 3 && (
              <button
                type="button"
                onClick={() => removeColor(i)}
                aria-label={`Remove color ${i + 1}`}
                className="rounded-lg p-2 text-neutral-400 transition hover:bg-neutral-100 hover:text-red-500"
              >
                <Trash2 size={18} />
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={addColor}
          disabled={colors.length >= 5}
          className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-300 px-3 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Plus size={16} /> Add color
        </button>
        <button
          type="button"
          onClick={shuffle}
          className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-300 px-3 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100"
        >
          <Shuffle size={16} /> Try a sample
        </button>
        <button
          type="button"
          onClick={() => fileRef.current && fileRef.current.click()}
          className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-300 px-3 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100"
        >
          <Upload size={16} /> Use an image
        </button>
        <input
          ref={fileRef}
          type="file"
          accept="image/jpeg,image/png,image/webp"
          onChange={onFile}
          className="hidden"
        />
        {imageName && (
          <span className="inline-flex items-center gap-1 text-xs text-neutral-400">
            <ImageIcon size={14} /> {imageName}
          </span>
        )}
      </div>

      {error && <p className="mt-3 text-sm font-medium text-red-500">{error}</p>}

      <button
        type="button"
        onClick={generate}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-900 px-5 py-3 text-base font-semibold text-white transition hover:bg-neutral-700 sm:w-auto"
      >
        Reveal my Color Personality <ArrowRight size={18} />
      </button>
    </div>
  );
}
