// Color Personality Test — deterministic, rule-based scoring engine.
//
// Pure functions only. Depends solely on pickerUtils.mjs so this module (and its
// tests) run under `node --test` without Next.js transpilation. No randomness:
// the same input palette always yields the same archetype.
//
// Scoring dimensions (all derived from HSL of the user's colors):
//   hueAngle    [0,360] | null   dominant hue of the palette (circular, saturation-weighted).
//                                null when the palette has no chromatic color (all grey).
//   brightness   [0,100]  light vs dark
//   saturation   [0,100]  vivid vs muted
//   contrast     [0,1]    high vs low spread of L/S across the palette
//   naturalness  [0,1]    earthy/muted vs neon/digital (heuristic on S/L)
//
// Hue is scored as ANGULAR distance to the archetype's hueAngle (so a green+sand
// palette is still recognised as "green-leaning" even though it is not a pure
// saturated green). Neutral archetypes (graphite / chrome black) use hueAngle:
// null and match low-saturation palettes instead of a direction.

import { hexToRgb, hexToHsl, rgbToHex } from '../../utils/pickerUtils.mjs';
import { ARCHETYPES } from './archetypes.mjs';

// Gaussian sigmas per scalar dimension (tuning for discrimination).
const SIGMAS = {
  hue: 55, // degrees of angular hue tolerance
  neutral: 18, // saturation threshold for neutral archetypes
  brightness: 25,
  saturation: 25,
  contrast: 0.25,
  naturalness: 0.3,
};

function clamp(v, min, max) {
  return Math.min(max, Math.max(min, v));
}

// Normalize a hex to canonical #rrggbb (or null if invalid).
export function canonicalHex(hex) {
  const rgb = hexToRgb(hex);
  if (!rgb) return null;
  return rgbToHex(rgb.r, rgb.g, rgb.b);
}

// Canonicalize + sort a list of hex strings. Invalid entries dropped.
// Sorting makes the result order-independent (same palette set -> same output).
export function canonicalize(hexArray) {
  if (!Array.isArray(hexArray)) return [];
  const out = [];
  for (const h of hexArray) {
    const c = canonicalHex(h);
    if (c) out.push(c);
  }
  return [...new Set(out)].sort();
}

function stddev(values) {
  if (values.length < 2) return 0;
  const mean = values.reduce((a, b) => a + b, 0) / values.length;
  const variance = values.reduce((a, b) => a + (b - mean) ** 2, 0) / values.length;
  return Math.sqrt(variance);
}

function circularDistance(a, b) {
  let d = Math.abs(a - b) % 360;
  if (d > 180) d = 360 - d;
  return d;
}

export function aggregateFeatures(hexArray) {
  const hsls = hexArray.map((h) => hexToHsl(h)).filter(Boolean);
  if (hsls.length === 0) {
    return { hueAngle: null, brightness: 0, saturation: 0, contrast: 0, naturalness: 0 };
  }

  // Saturation-weighted circular mean hue. Near-grey colors (s < 8) are ignored
  // so they do not blur the direction toward their arbitrary hue.
  let sumX = 0;
  let sumY = 0;
  let wSum = 0;
  for (const { h, s } of hsls) {
    if (s < 8) continue;
    const w = s / 100;
    sumX += w * Math.cos((h * Math.PI) / 180);
    sumY += w * Math.sin((h * Math.PI) / 180);
    wSum += w;
  }
  const hueAngle = wSum > 0 ? (((Math.atan2(sumY, sumX) * 180) / Math.PI + 360) % 360) : null;

  const brightness = hsls.reduce((a, c) => a + c.l, 0) / hsls.length;
  const saturation = hsls.reduce((a, c) => a + c.s, 0) / hsls.length;

  const ls = hsls.map((c) => c.l);
  const ss = hsls.map((c) => c.s);
  const contrast = clamp(0.7 * clamp(stddev(ls) / 45, 0, 1) + 0.3 * clamp(stddev(ss) / 45, 0, 1), 0, 1);

  const naturalness = clamp(
    hsls.filter((c) => c.s < 35 && c.l >= 18 && c.l <= 88).length / hsls.length,
    0,
    1,
  );

  return { hueAngle, brightness, saturation, contrast, naturalness };
}

// Hue similarity in [0,1]. Neutral archetypes (hueAngle === null) match low
// overall saturation; chromatic archetypes match by angular hue distance.
function hueScore(features, archetype) {
  const target = archetype.rules.hueAngle;
  if (target === null) {
    return Math.exp(-(features.saturation * features.saturation) / (2 * SIGMAS.neutral * SIGMAS.neutral));
  }
  if (features.hueAngle === null) {
    return 0.05; // a fully grey palette barely matches a chromatic archetype
  }
  const dist = circularDistance(features.hueAngle, target);
  return Math.exp(-(dist * dist) / (2 * SIGMAS.hue * SIGMAS.hue));
}

export function scoreArchetype(features, archetype) {
  let score = hueScore(features, archetype);
  for (const dim of ['brightness', 'saturation', 'contrast', 'naturalness']) {
    const target = archetype.rules[dim];
    const sigma = SIGMAS[dim];
    const diff = features[dim] - target;
    score += Math.exp(-(diff * diff) / (2 * sigma * sigma));
  }
  return score;
}

// Conceptual phrases for the explainable "reason" shown on the result card.
const HUE_FAMILIES = [
  { max: 15, name: 'red-leaning' },
  { max: 45, name: 'warm orange' },
  { max: 70, name: 'golden' },
  { max: 160, name: 'green-leaning' },
  { max: 200, name: 'teal' },
  { max: 250, name: 'blue' },
  { max: 290, name: 'violet' },
  { max: 340, name: 'magenta' },
  { max: 360, name: 'pink-leaning' },
];

function hueFamilyName(angle) {
  if (angle === null) return 'neutral';
  const f = HUE_FAMILIES.find((x) => angle < x.max) || HUE_FAMILIES[HUE_FAMILIES.length - 1];
  return f.name;
}

// Pick the 2 concepts where the palette sits closest to the archetype target,
// and phrase them. This keeps the result explainable (no black box).
function explainFeatures(features, archetype) {
  const target = archetype.rules.hueAngle;
  const hueCloseness =
    target === null
      ? 1 - clamp(features.saturation / 40, 0, 1)
      : features.hueAngle === null
        ? 0
        : 1 - circularDistance(features.hueAngle, target) / 180;

  const concepts = [
    {
      key: 'hue',
      value: hueCloseness,
      target: 1,
      sigma: 1,
      phrase:
        target === null
          ? features.saturation < 20
            ? 'neutral and understated'
            : 'near-neutral'
          : hueFamilyName(features.hueAngle),
    },
    { key: 'brightness', value: features.brightness, target: archetype.rules.brightness, sigma: SIGMAS.brightness },
    { key: 'saturation', value: features.saturation, target: archetype.rules.saturation, sigma: SIGMAS.saturation },
    { key: 'contrast', value: features.contrast, target: archetype.rules.contrast, sigma: SIGMAS.contrast },
    { key: 'naturalness', value: features.naturalness, target: archetype.rules.naturalness, sigma: SIGMAS.naturalness },
  ];
  const ranked = concepts
    .map((c) => {
      const dist = Math.abs(c.value - c.target) / c.sigma;
      return { phrase: c.phrase, dist };
    })
    .sort((a, b) => a.dist - b.dist);
  return ranked.slice(0, 2).map((r) => r.phrase);
}

// "Main color" for display = the most saturated color (tie -> brightest).
export function mainColorOf(hexArray) {
  const ranked = [...hexArray]
    .map((h) => ({ h, hsl: hexToHsl(h) }))
    .filter((x) => x.hsl)
    .sort((a, b) => (b.hsl.s - a.hsl.s) || (b.hsl.l - a.hsl.l));
  return ranked.length ? ranked[0].h : hexArray[0];
}

// Core entry point. Deterministic and order-independent.
// Returns { archetypeId, archetype (display fields only), features, reason, mainColor, colors }
// or { error } if the palette is not 3-5 valid colors.
export function computePersonality(inputHexArray) {
  const colors = canonicalize(inputHexArray);
  if (colors.length < 3 || colors.length > 5) {
    return { error: 'invalid_palette', colors };
  }

  const features = aggregateFeatures(colors);

  let best = ARCHETYPES[0];
  let bestScore = -Infinity;
  for (const a of ARCHETYPES) {
    const s = scoreArchetype(features, a);
    if (s > bestScore) {
      bestScore = s;
      best = a;
    }
  }

  const reason = explainFeatures(features, best);
  const mainColor = mainColorOf(colors);

  const archetype = {
    id: best.id,
    name: best.name,
    shortName: best.shortName,
    primaryHex: best.primaryHex,
    palette: best.palette,
    rarityLabel: best.rarityLabel,
    traits: best.traits,
    aestheticTags: best.aestheticTags,
    description: best.description,
    styleAdvice: best.styleAdvice,
    shareText: best.shareText,
  };

  return { archetypeId: best.id, archetype, features, reason, mainColor, colors };
}
