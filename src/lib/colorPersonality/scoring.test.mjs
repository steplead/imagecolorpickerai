// Unit tests for the Color Personality Test scoring + share utilities.
// Run with: node --test src/lib/colorPersonality/scoring.test.mjs
// Self-contained: only imports the modules under test (which depend solely on pickerUtils.mjs).

import { test } from 'node:test';
import assert from 'node:assert/strict';

import {
  computePersonality,
  aggregateFeatures,
  canonicalize,
  mainColorOf,
} from './scoring.mjs';
import { encodeColors, decodeColors, buildResultUrl, buildShareText } from './share.mjs';
import { ARCHETYPES, RARITY_LABELS } from './archetypes.mjs';

// ---------------------------------------------------------------------------
// Dimension sanity (reuse of pickerUtils hexToHsl)
// ---------------------------------------------------------------------------

test('aggregateFeatures: vivid red is red-hued + saturated + mid bright', () => {
  const f = aggregateFeatures(['#ff0000']);
  assert.equal(f.hueAngle, 0); // pure red -> 0deg
  assert.equal(f.saturation, 100);
  assert.equal(f.brightness, 50);
});

test('aggregateFeatures: warm vs cool hue-angle separation', () => {
  const warm = aggregateFeatures(['#ff0000', '#ff8800', '#ffcc00']);
  const cool = aggregateFeatures(['#0066ff', '#003366', '#00ccff']);
  assert.ok(warm.hueAngle < 60 || warm.hueAngle > 330, `warm.hueAngle=${warm.hueAngle}`);
  assert.ok(cool.hueAngle > 180 && cool.hueAngle < 260, `cool.hueAngle=${cool.hueAngle}`);
});

test('aggregateFeatures: bright vs dark separation', () => {
  const bright = aggregateFeatures(['#ffffff', '#ffffcc', '#f0f0f0']);
  const dark = aggregateFeatures(['#111111', '#000000', '#222222']);
  assert.ok(bright.brightness > 80, `bright=${bright.brightness}`);
  assert.ok(dark.brightness < 20, `dark=${dark.brightness}`);
});

test('aggregateFeatures: muted vs vivid saturation separation', () => {
  const muted = aggregateFeatures(['#888888', '#999999']);
  const vivid = aggregateFeatures(['#ff00ff', '#00ffff', '#ff0000']);
  assert.ok(muted.saturation < 20, `muted=${muted.saturation}`);
  assert.ok(vivid.saturation > 80, `vivid=${vivid.saturation}`);
});

// ---------------------------------------------------------------------------
// Archetype mapping (deterministic)
// ---------------------------------------------------------------------------

test('computePersonality: muted green/neutral -> quiet-luxury-green', () => {
  const r = computePersonality(['#2f6b4f', '#d8c7a1', '#111111']);
  assert.equal(r.archetypeId, 'quiet-luxury-green');
});

test('computePersonality: vivid warm red -> a bold warm archetype', () => {
  const r = computePersonality(['#e23b2e', '#ff5722', '#c0392b']);
  assert.ok(
    ['cinnabar-energy', 'imperial-red-leader'].includes(r.archetypeId),
    `got ${r.archetypeId}`,
  );
});

test('computePersonality: pale blue-grey -> a calm cool archetype', () => {
  const r = computePersonality(['#7d9bb5', '#aebfd0', '#dfe7ee']);
  assert.ok(
    ['misty-blue-thinker', 'porcelain-blue-classic'].includes(r.archetypeId),
    `got ${r.archetypeId}`,
  );
});

// ---------------------------------------------------------------------------
// Determinism + order independence (core anti-random guarantee)
// ---------------------------------------------------------------------------

test('computePersonality: same input -> identical result (no randomness)', () => {
  const a = computePersonality(['#ff0000', '#00ff00', '#0000ff']);
  const b = computePersonality(['#ff0000', '#00ff00', '#0000ff']);
  assert.equal(a.archetypeId, b.archetypeId);
  assert.deepEqual(a.colors, b.colors);
});

test('computePersonality: palette order does not change the result', () => {
  const a = computePersonality(['#ff0000', '#00ff00', '#0000ff']);
  const b = computePersonality(['#0000ff', '#ff0000', '#00ff00']);
  assert.equal(a.archetypeId, b.archetypeId);
  assert.deepEqual(a.colors, b.colors);
});

test('computePersonality: rejects palettes outside 3-5 colors', () => {
  assert.equal(computePersonality(['#ff0000', '#00ff00']).error, 'invalid_palette');
  assert.equal(
    computePersonality(['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff']).error,
    'invalid_palette',
  );
});

// ---------------------------------------------------------------------------
// URL encode / decode round-trip (share links)
// ---------------------------------------------------------------------------

test('encode/decode: round-trips and is order-independent', () => {
  const encoded = encodeColors(['#AABBCC', '#00FF00', '#123456']);
  const decoded = decodeColors(encoded);
  assert.deepEqual(decoded, ['#00ff00', '#123456', '#aabbcc']); // lexical sort

  const reordered = decodeColors('00ff00,aabbcc,123456');
  assert.deepEqual(reordered, decoded);
});

test('decodeColors: rejects malformed / wrong-count input', () => {
  assert.equal(decodeColors('ff0000'), null); // only 1 color
  assert.equal(decodeColors('zz,zz,zz'), null); // invalid hex
  assert.equal(decodeColors(''), null);
  assert.equal(decodeColors('ff0000,00ff00,0000ff,ffff00,00ffff,ff00ff'), null); // 6 colors
});

test('buildResultUrl: builds the static route with encoded colors', () => {
  const url = buildResultUrl('https://imagecolorpickerai.com', ['#ff0000', '#00ff00', '#0000ff']);
  assert.ok(url.startsWith('https://imagecolorpickerai.com/color-personality-test?c='));
  assert.ok(url.includes('ff0000'));
});

// ---------------------------------------------------------------------------
// Share text honesty (no claims)
// ---------------------------------------------------------------------------

test('buildShareText: contains name + traits, no forbidden claim words', () => {
  const r = computePersonality(['#2f6b4f', '#d8c7a1', '#111111']);
  const text = buildShareText(r, 'https://x.test/c=2f6b4f,d8c7a1,111111');
  assert.ok(text.includes(r.archetype.name));
  assert.ok(text.includes('Color Personality Test'));
  for (const bad of ['scientifically', 'diagnosis', 'AI analysis', 'Top ', '% of users']) {
    assert.ok(!text.includes(bad), `unexpected claim word: ${bad}`);
  }
});

// ---------------------------------------------------------------------------
// Archetype data integrity
// ---------------------------------------------------------------------------

test('ARCHETYPES: 16 entries, all required fields, valid rarity labels', () => {
  assert.equal(ARCHETYPES.length, 16);
  const ids = new Set();
  for (const a of ARCHETYPES) {
    assert.ok(!ids.has(a.id), `duplicate id ${a.id}`);
    ids.add(a.id);
    for (const field of ['id', 'name', 'shortName', 'primaryHex', 'palette', 'rarityLabel', 'traits', 'aestheticTags', 'description', 'styleAdvice', 'shareText', 'rules']) {
      assert.ok(a[field] !== undefined, `${a.id} missing ${field}`);
    }
    assert.ok(Array.isArray(a.traits) && a.traits.length >= 3 && a.traits.length <= 5, `${a.id} traits`);
    assert.ok(RARITY_LABELS.includes(a.rarityLabel), `${a.id} bad rarity: ${a.rarityLabel}`);
    assert.ok(a.palette.length >= 3, `${a.id} palette`);
    for (const dim of ['hueAngle', 'brightness', 'saturation', 'contrast', 'naturalness']) {
      assert.ok(
        dim === 'hueAngle' ? a.rules[dim] === null || typeof a.rules[dim] === 'number' : typeof a.rules[dim] === 'number',
        `${a.id} rules.${dim}`,
      );
    }
    // No fake percentile / statistical wording anywhere in the visible copy.
    for (const bad of ['Top ', '% of', '100%', 'only ', 'unlimited']) {
      assert.ok(!a.rarityLabel.includes(bad), `${a.id} rarity has stat word`);
    }
  }
});

test('canonicalize / mainColorOf helpers behave', () => {
  assert.deepEqual(canonicalize(['#FFFFFF', '#ffffff']), ['#ffffff']); // dedup, 6-char hex only
  assert.deepEqual(canonicalize(['#FFF', '#xyz']), []); // 3-char + invalid dropped
  assert.equal(mainColorOf(['#222222', '#ff0000', '#00ff00']), '#ff0000'); // most saturated
});
