// Pure, side-effect-free helpers for the image color picker.
// Deliberately self-contained (no imports) so the coordinate / color /
// validation logic runs under `node --test` in plain ESM without pulling in
// the color dataset or any browser-only module. The hex<->rgb/hsl math is a
// tiny, intentionally duplicated copy of colorUtils / colorMetrics so this
// module stays testable in isolation; the matcher path keeps using colorUtils.

export const MAX_FILE_BYTES = 10 * 1024 * 1024; // 10 MB
export const MAX_DECODED_PIXELS = 25_000_000; // ~25 megapixels
export const ALLOWED_MIME = ['image/jpeg', 'image/png', 'image/webp'];

// --- Color conversions -------------------------------------------------

export function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex || '');
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export function hexToHsl(hex) {
  let r = 0,
    g = 0,
    b = 0;
  const h = hex || '';
  if (h.length === 4) {
    r = '0x' + h[1] + h[1];
    g = '0x' + h[2] + h[2];
    b = '0x' + h[3] + h[3];
  } else if (h.length === 7) {
    r = '0x' + h[1] + h[2];
    g = '0x' + h[3] + h[4];
    b = '0x' + h[5] + h[6];
  }
  r /= 255;
  g /= 255;
  b /= 255;
  const cmin = Math.min(r, g, b);
  const cmax = Math.max(r, g, b);
  const delta = cmax - cmin;
  let hue = 0;
  let sat = 0;
  let lig = 0;

  if (delta === 0) hue = 0;
  else if (cmax === r) hue = ((g - b) / delta) % 6;
  else if (cmax === g) hue = (b - r) / delta + 2;
  else hue = (r - g) / delta + 4;

  hue = Math.round(hue * 60);
  if (hue < 0) hue += 360;

  lig = (cmax + cmin) / 2;
  sat = delta === 0 ? 0 : delta / (1 - Math.abs(2 * lig - 1));
  sat = +(sat * 100).toFixed(1);
  lig = +(lig * 100).toFixed(1);

  return { h: hue, s: sat, l: lig };
}

export function rgbToHex(r, g, b) {
  const toHex = (v) => {
    const h = Math.max(0, Math.min(255, Math.round(v))).toString(16);
    return h.length === 1 ? '0' + h : h;
  };
  return '#' + toHex(r) + toHex(g) + toHex(b);
}

export function formatHsl(hsl) {
  if (!hsl || typeof hsl !== 'object') return '';
  const { h, s, l } = hsl;
  // Valid CSS color, identical to what is copied — e.g. hsl(0, 100%, 50%)
  return `hsl(${h}, ${s}%, ${l}%)`;
}

// --- Validation --------------------------------------------------------

export function validateImageFile(file, allowedMime = ALLOWED_MIME, maxBytes = MAX_FILE_BYTES) {
  if (!file || typeof file !== 'object') {
    return { ok: false, error: 'No file provided.' };
  }
  const type = file.type || '';
  if (!allowedMime.includes(type)) {
    return { ok: false, error: `Unsupported format: ${type || 'unknown'}. Use JPG, PNG, or WebP.` };
  }
  const size = typeof file.size === 'number' ? file.size : 0;
  if (size > maxBytes) {
    return {
      ok: false,
      error: `Image is too large (${(size / 1048576).toFixed(1)} MB). Max ${maxBytes / 1048576} MB.`,
    };
  }
  return { ok: true, error: null };
}

export function validateDecodedDimensions(width, height, maxPixels = MAX_DECODED_PIXELS) {
  const w = Number(width) || 0;
  const h = Number(height) || 0;
  if (w <= 0 || h <= 0) {
    return { ok: false, error: 'Image has no dimensions.' };
  }
  const pixels = w * h;
  if (pixels > maxPixels) {
    return {
      ok: false,
      error: `Image is too large (${w}×${h} = ${pixels.toLocaleString()} px). Max ${maxPixels.toLocaleString()} px (~25 MP).`,
    };
  }
  return { ok: true, error: null };
}

// --- Coordinate mapping (object-contain letterbox) ---------------------

// Map a pointer's client coordinates to source (natural) pixel coordinates.
// Uses Math.floor so a click always resolves to the integer pixel it landed
// inside, and clamps to the valid [0, natW-1] / [0, natH-1] range. This is
// what the 2x2 boundary test exercises: substituting Math.round would push
// near-boundary clicks into the neighbouring pixel and fail the test.
export function sourceCoordsFromPointer(clientX, clientY, rect, natW, natH) {
  const rectLeft = rect && rect.left ? rect.left : 0;
  const rectTop = rect && rect.top ? rect.top : 0;
  const rectW = (rect && rect.width) || natW;
  const rectH = (rect && rect.height) || natH;

  // object-contain: uniform scale, letterboxed within the element
  const scale = Math.min(rectW / natW, rectH / natH) || 1;
  const dispW = natW * scale;
  const dispH = natH * scale;
  const offsetX = (rectW - dispW) / 2;
  const offsetY = (rectH - dispH) / 2;

  let x = Math.floor((clientX - rectLeft - offsetX) / scale);
  let y = Math.floor((clientY - rectTop - offsetY) / scale);

  if (x < 0) x = 0;
  if (y < 0) y = 0;
  if (x > natW - 1) x = natW - 1;
  if (y > natH - 1) y = natH - 1;

  return { x, y };
}

// --- Edge-safe magnifier sample rectangle ------------------------------

// Given a centre pixel (cx, cy) and an odd sample size (e.g. 11), return a
// source rect that is guaranteed to lie fully inside the canvas so
// getImageData never throws IndexSizeError. `destX` / `destY` tell the caller
// where in the square `size`x`size` output grid the source rect should be
// drawn; columns/rows outside it are transparent padding (image edge).
export function clampSampleRect(cx, cy, size, canvasW, canvasH) {
  const half = Math.floor(size / 2);
  const reqSx = cx - half;
  const reqSy = cy - half;

  let sx = reqSx;
  let sy = reqSy;
  if (sx < 0) sx = 0;
  if (sy < 0) sy = 0;
  if (sx > canvasW - 1) sx = canvasW - 1;
  if (sy > canvasH - 1) sy = canvasH - 1;

  const sw = Math.max(1, Math.min(size, canvasW - sx));
  const sh = Math.max(1, Math.min(size, canvasH - sy));

  const destX = half - (cx - sx);
  const destY = half - (cy - sy);

  return { sx, sy, sw, sh, destX, destY };
}
