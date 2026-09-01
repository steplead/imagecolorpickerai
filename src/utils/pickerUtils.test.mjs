// Unit tests for pickerUtils.mjs — run with:
//   node --test src/utils/pickerUtils.test.mjs
// Self-contained: only imports the module under test.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  hexToRgb,
  hexToHsl,
  rgbToHex,
  formatHsl,
  validateImageFile,
  validateDecodedDimensions,
  sourceCoordsFromPointer,
  clampSampleRect,
  MAX_FILE_BYTES,
  MAX_DECODED_PIXELS,
} from './pickerUtils.mjs';

// ---------------------------------------------------------------------
// Color conversions
// ---------------------------------------------------------------------

test('hexToRgb parses primary colors', () => {
  assert.deepEqual(hexToRgb('#ff0000'), { r: 255, g: 0, b: 0 });
  assert.deepEqual(hexToRgb('#00ff00'), { r: 0, g: 255, b: 0 });
  assert.deepEqual(hexToRgb('#0000ff'), { r: 0, g: 0, b: 255 });
  assert.deepEqual(hexToRgb('#ffffff'), { r: 255, g: 255, b: 255 });
  assert.deepEqual(hexToRgb('#000000'), { r: 0, g: 0, b: 0 });
});

test('hexToRgb accepts hex without # and rejects garbage', () => {
  assert.deepEqual(hexToRgb('ff0000'), { r: 255, g: 0, b: 0 });
  assert.equal(hexToRgb('#zzzzzz'), null);
  assert.equal(hexToRgb('nope'), null);
});

test('hexToHsl matches expected hue/sat/lightness', () => {
  assert.deepEqual(hexToHsl('#ff0000'), { h: 0, s: 100, l: 50 });
  assert.deepEqual(hexToHsl('#00ff00'), { h: 120, s: 100, l: 50 });
  assert.deepEqual(hexToHsl('#0000ff'), { h: 240, s: 100, l: 50 });
  assert.deepEqual(hexToHsl('#ffffff'), { h: 0, s: 0, l: 100 });
  assert.deepEqual(hexToHsl('#000000'), { h: 0, s: 0, l: 0 });
});

test('rgbToHex round-trips and clamps', () => {
  assert.equal(rgbToHex(255, 0, 0), '#ff0000');
  assert.equal(rgbToHex(0, 255, 0), '#00ff00');
  assert.equal(rgbToHex(300, -5, 128), '#ff0080'); // clamped
});

test('formatHsl renders valid CSS color', () => {
  assert.equal(formatHsl({ h: 0, s: 100, l: 50 }), 'hsl(0, 100%, 50%)');
  assert.equal(formatHsl({ h: 120, s: 100, l: 50 }), 'hsl(120, 100%, 50%)');
  assert.equal(formatHsl({ h: 0, s: 0, l: 100 }), 'hsl(0, 0%, 100%)');
  assert.equal(formatHsl(null), '');
});

// ---------------------------------------------------------------------
// File + decoded-dimension validation
// ---------------------------------------------------------------------

test('validateImageFile accepts JPG/PNG/WebP under 10MB', () => {
  assert.deepEqual(validateImageFile({ type: 'image/jpeg', size: 1024 }), {
    ok: true,
    error: null,
  });
  assert.deepEqual(validateImageFile({ type: 'image/png', size: 5 * 1024 * 1024 }), {
    ok: true,
    error: null,
  });
  assert.deepEqual(validateImageFile({ type: 'image/webp', size: 9_999_999 }), {
    ok: true,
    error: null,
  });
});

test('validateImageFile rejects wrong type and oversize', () => {
  assert.equal(validateImageFile({ type: 'image/gif', size: 100 }).ok, false);
  assert.equal(validateImageFile({ type: 'text/plain', size: 100 }).ok, false);
  assert.equal(validateImageFile({ type: 'image/png', size: MAX_FILE_BYTES + 1 }).ok, false);
  assert.equal(validateImageFile(null).ok, false);
});

test('validateDecodedDimensions caps at ~25MP', () => {
  assert.deepEqual(validateDecodedDimensions(5000, 5000), { ok: true, error: null }); // 25M exactly
  assert.equal(validateDecodedDimensions(6000, 5000).ok, false); // 30M
  assert.equal(validateDecodedDimensions(0, 0).ok, false);
  assert.equal(validateDecodedDimensions(-1, 100).ok, false);
});

// ---------------------------------------------------------------------
// Coordinate mapping — the 2x2 boundary test
//
// A 200x200 image is shown in a 200x200 element (scale = 1, no letterbox).
// We feed CONTINUOUS client coordinates at the pixel boundaries. Correct
// behaviour is Math.floor: a point at x = 99.5 lies inside pixel column 99
// ([99,100)), so it must resolve to 99 — NOT 100. If the implementation were
// switched to Math.round, round(99.5) === 100 and every assertion below that
// lands on a .5 boundary would fail, catching the regression.
// ---------------------------------------------------------------------

const rect200 = { left: 0, top: 0, width: 200, height: 200 };

test('2x2 boundary: explicit corners resolve with Math.floor', () => {
  // (0,0) corner pixel
  assert.deepEqual(sourceCoordsFromPointer(0.5, 0.5, rect200, 200, 200), { x: 0, y: 0 });
  // boundary at column/row 99
  assert.deepEqual(sourceCoordsFromPointer(99.5, 99.5, rect200, 200, 200), { x: 99, y: 99 });
  // boundary at column/row 100
  assert.deepEqual(sourceCoordsFromPointer(100.5, 100.5, rect200, 200, 200), { x: 100, y: 100 });
  // (199,199) far corner pixel
  assert.deepEqual(sourceCoordsFromPointer(199.5, 199.5, rect200, 200, 200), { x: 199, y: 199 });
});

test('2x2 boundary: floor (not round) keeps near-edge pixels correct', () => {
  // Sub-pixel just inside column 99 must stay 99, not round up to 100.
  const nearEdge = sourceCoordsFromPointer(99.49, 99.49, rect200, 200, 200);
  assert.equal(nearEdge.x, 99);
  assert.equal(nearEdge.y, 99);
  // Equivalent check on the other side of the 100 boundary.
  const justBefore100 = sourceCoordsFromPointer(99.99, 99.99, rect200, 200, 200);
  assert.equal(justBefore100.x, 99);
});

test('sourceCoordsFromPointer handles letterbox + clamping', () => {
  // 400x200 image centred in a 400x400 box → scale 1, vertical offset 100.
  const rect = { left: 0, top: 0, width: 400, height: 400 };
  const c = sourceCoordsFromPointer(200.5, 100.5, rect, 400, 200);
  assert.deepEqual(c, { x: 200, y: 0 });

  // Out-of-bounds pointer clamps to the last valid pixel.
  const clamped = sourceCoordsFromPointer(9999, -50, rect200, 200, 200);
  assert.deepEqual(clamped, { x: 199, y: 0 });
});

// ---------------------------------------------------------------------
// Edge-safe magnifier sample rectangle
// ---------------------------------------------------------------------

function assertRectSafe(r, canvasW, canvasH) {
  assert.ok(r.sx >= 0, 'sx >= 0');
  assert.ok(r.sy >= 0, 'sy >= 0');
  assert.ok(r.sx + r.sw <= canvasW, 'sx + sw within canvas');
  assert.ok(r.sy + r.sh <= canvasH, 'sy + sh within canvas');
  assert.ok(r.sw >= 1 && r.sh >= 1, 'non-empty sample');
}

test('clampSampleRect stays inside the canvas (no IndexSizeError)', () => {
  const big = clampSampleRect(100, 100, 11, 200, 200);
  assert.deepEqual(big, { sx: 95, sy: 95, sw: 11, sh: 11, destX: 0, destY: 0 });
  assertRectSafe(big, 200, 200);

  // top-left corner: requests 5 px of padding on left/top
  const tl = clampSampleRect(0, 0, 11, 200, 200);
  assert.deepEqual(tl, { sx: 0, sy: 0, sw: 11, sh: 11, destX: 5, destY: 5 });
  assertRectSafe(tl, 200, 200);

  // bottom-right corner: only 6x6 available → right/bottom padding
  const br = clampSampleRect(199, 199, 11, 200, 200);
  assert.deepEqual(br, { sx: 194, sy: 194, sw: 6, sh: 6, destX: 0, destY: 0 });
  assertRectSafe(br, 200, 200);
});

test('clampSampleRect handles an image smaller than the sample size', () => {
  // 5x5 image, sample 11, centre pixel (2,2). The whole image is the sample
  // (sx=0, sw=5); it lands at dest (3,3) because dest centre is (5,5) and the
  // image centre pixel is 2 (3 px left/up of the requested -3 origin).
  const tiny = clampSampleRect(2, 2, 11, 5, 5);
  assert.deepEqual(tiny, { sx: 0, sy: 0, sw: 5, sh: 5, destX: 3, destY: 3 });
  assertRectSafe(tiny, 5, 5);
});
