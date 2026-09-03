// Color Personality Test — share-link + share-text helpers (pure, ESM-safe).
//
// The share URL carries ONLY the selected HEX colors (no image bytes, no result
// id). On load the client recomputes the result from the colors, which keeps the
// link deterministic and static-host friendly (Cloudflare Pages).

import { hexToRgb, rgbToHex } from '../../utils/pickerUtils.mjs';
import { canonicalize } from './scoring.mjs';

const ROUTE = '/color-personality-test';

function stripHash(hex) {
  return hex.replace('#', '').toLowerCase();
}

// Encode a palette to the `c` query value: sorted, canonical, comma-joined.
export function encodeColors(hexArray) {
  return canonicalize(hexArray).map(stripHash).join(',');
}

// Decode a `c` query value back to a sorted, canonical hex array.
// Returns null if the value is malformed or not exactly 3-5 valid colors.
export function decodeColors(value) {
  if (typeof value !== 'string' || value.length === 0) return null;
  const parts = value.split(',').map((p) => p.trim()).filter(Boolean);
  if (parts.length < 3 || parts.length > 5) return null;
  const colors = [];
  for (const p of parts) {
    const rgb = hexToRgb(p.startsWith('#') ? p : `#${p}`);
    if (!rgb) return null;
    colors.push(rgbToHex(rgb.r, rgb.g, rgb.b));
  }
  const sorted = [...new Set(colors)].sort();
  if (sorted.length < 3 || sorted.length > 5) return null;
  return sorted;
}

export function buildResultUrl(origin, hexArray) {
  const base = (origin || '').replace(/\/+$/, '');
  return `${base}${ROUTE}?c=${encodeColors(hexArray)}`;
}

// Share text — playful but honest. No scientific/psychological/AI/popularity claims.
export function buildShareText(result, url) {
  if (!result || !result.archetype) return '';
  const traits = result.archetype.traits.slice(0, 3).join(', ');
  const base = `I got "${result.archetype.name}" on the Color Personality Test — ${traits}.`;
  return url ? `${base} ${url}` : base;
}
