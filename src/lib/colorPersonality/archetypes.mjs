// Color Personality Test — 16 deterministic archetypes (pure data, ESM-safe).
//
// Each archetype carries `rules`: target centroids for the 6 scoring dimensions
// produced by scoring.mjs. The scoring engine picks the archetype whose centroids
// best match a user's palette. Nothing here is random and no percentile is shown
// to users — `rarityLabel` is a curated, non-statistical label only.
//
// Scoring dimensions:
//   hueX, hueY   [-1,1]   mean hue as a unit vector (separates red/green/blue/...)
//   brightness    [0,100] light vs dark
//   saturation    [0,100] vivid vs muted
//   contrast      [0,1]   high vs low spread of L/S across the palette
//   naturalness   [0,1]   earthy/muted vs neon/digital (heuristic on S/L)
//
// hueX/hueY are computed from each archetype's representative hue, e.g.
//   red ~0deg    -> ( 1.0,  0.0)
//   green ~140   -> (-0.8,  0.6)
//   blue ~210    -> (-0.87,-0.5)
//   violet ~255  -> (-0.26,-0.97)
//   grey/neutral -> ( 0.0,  0.0)

export const RARITY_LABELS = [
  'Rare Style',
  'Uncommon Palette',
  'Bold Profile',
  'Classic Profile',
  'Soft Profile',
  'Expressive Profile',
];

export const ARCHETYPES = [
  {
    id: 'quiet-luxury-green',
    name: 'Quiet Luxury Green',
    shortName: 'Quiet Luxury',
    primaryHex: '#2f6b4f',
    palette: ['#2f6b4f', '#d8c7a1', '#111111', '#6b7a5e'],
    rarityLabel: 'Classic Profile',
    traits: ['Refined', 'Grounded', 'Understated'],
    aestheticTags: ['minimal', 'earthy', 'heritage'],
    description:
      'You lean toward muted, natural greens and warm neutrals. Your palette feels considered rather than loud — the kind of taste that does not need to announce itself.',
    styleAdvice:
      'Build layouts with generous whitespace, matte surfaces, and one quiet accent. Pair with bone, sand, and deep forest tones.',
    shareText: 'My colors read as Quiet Luxury Green — refined, grounded, and understated.',
    rules: { hueAngle: 93.6, brightness: 38.3, saturation: 23.4, contrast: 0.49, naturalness: 0.25 },
  },
  {
    id: 'cinnabar-energy',
    name: 'Cinnabar Energy',
    shortName: 'Cinnabar',
    primaryHex: '#e23b2e',
    palette: ['#e23b2e', '#ff5722', '#c0392b', '#ffb199'],
    rarityLabel: 'Bold Profile',
    traits: ['Bold', 'Energetic', 'Direct'],
    aestheticTags: ['vivid', 'warm', 'punchy'],
    description:
      'Hot reds and oranges dominate your choices. You are drawn to heat, momentum, and immediate impact — a palette that wants to be noticed.',
    styleAdvice:
      'Use cinnabar as a single hero accent against near-neutral surroundings. Let the warmth carry the call to action, not the whole page.',
    shareText: 'My colors read as Cinnabar Energy — bold, energetic, and direct.',
    rules: { hueAngle: 10.3, brightness: 59, saturation: 84.8, contrast: 0.3, naturalness: 0 },
  },
  {
    id: 'misty-blue-thinker',
    name: 'Misty Blue Thinker',
    shortName: 'Misty Blue',
    primaryHex: '#7d9bb5',
    palette: ['#7d9bb5', '#aebfd0', '#5b6b7a', '#dfe7ee'],
    rarityLabel: 'Soft Profile',
    traits: ['Calm', 'Thoughtful', 'Precise'],
    aestheticTags: ['cool', 'muted', 'clean'],
    description:
      'Soft, desaturated blues and greys define your palette. You favour clarity and quiet focus over spectacle — a considered, almost editorial calm.',
    styleAdvice:
      'Layer pale blue-greys with crisp type and thin rules. Keep contrast gentle; let hierarchy do the work instead of colour.',
    shareText: 'My colors read as Misty Blue Thinker — calm, thoughtful, and precise.',
    rules: { hueAngle: 208.7, brightness: 66.8, saturation: 24.8, contrast: 0.32, naturalness: 0.75 },
  },
  {
    id: 'graphite-minimalist',
    name: 'Graphite Minimalist',
    shortName: 'Graphite',
    primaryHex: '#3a3a3a',
    palette: ['#3a3a3a', '#9a9a9a', '#111111', '#d9d9d9'],
    rarityLabel: 'Classic Profile',
    traits: ['Minimal', 'Structured', 'Quiet'],
    aestheticTags: ['mono', 'structural', 'modern'],
    description:
      'You strip colour back to greys and near-blacks. Your taste is structural — form, grid, and restraint matter more than decoration.',
    styleAdvice:
      'Work in a tight greyscale with one functional accent. Rely on typography scale and spacing for rhythm.',
    shareText: 'My colors read as Graphite Minimalist — minimal, structured, and quiet.',
    rules: { hueAngle: null, brightness: 43.7, saturation: 0, contrast: 0.48, naturalness: 0.75 },
  },
  {
    id: 'soft-sage-healer',
    name: 'Soft Sage Healer',
    shortName: 'Soft Sage',
    primaryHex: '#a7c4a0',
    palette: ['#a7c4a0', '#e8f0e3', '#cfe0c3', '#8fb88a'],
    rarityLabel: 'Soft Profile',
    traits: ['Gentle', 'Nurturing', 'Open'],
    aestheticTags: ['pastel', 'natural', 'soft'],
    description:
      'Pale sage and airy greens fill your palette. You are drawn to gentleness and breathing room — a soothing, approachable register.',
    styleAdvice:
      'Combine soft greens with off-white and rounded shapes. Keep surfaces light and edges friendly.',
    shareText: 'My colors read as Soft Sage Healer — gentle, nurturing, and open.',
    rules: { hueAngle: 102.3, brightness: 76.7, saturation: 27.5, contrast: 0.2, naturalness: 0.75 },
  },
  {
    id: 'imperial-red-leader',
    name: 'Imperial Red Leader',
    shortName: 'Imperial Red',
    primaryHex: '#c8242c',
    palette: ['#c8242c', '#9e1b22', '#e0b0b0', '#2b2b2b'],
    rarityLabel: 'Bold Profile',
    traits: ['Confident', 'Commanding', 'Classic'],
    aestheticTags: ['regal', 'warm', 'strong'],
    description:
      'Deep, confident reds anchor your palette. You like presence and authority — a traditional, ceremonial warmth rather than a playful one.',
    styleAdvice:
      'Set imperial red against ink and cream. Use it sparingly but decisively; it reads as heritage, not noise.',
    shareText: 'My colors read as Imperial Red Leader — confident, commanding, and classic.',
    rules: { hueAngle: 357.7, brightness: 44.5, saturation: 46, contrast: 0.54, naturalness: 0 },
  },
  {
    id: 'sakura-dreamer',
    name: 'Sakura Dreamer',
    shortName: 'Sakura',
    primaryHex: '#f4c2d0',
    palette: ['#f4c2d0', '#fbe7ee', '#e7a6bb', '#fff5f8'],
    rarityLabel: 'Soft Profile',
    traits: ['Romantic', 'Dreamy', 'Tender'],
    aestheticTags: ['pastel', 'romantic', 'light'],
    description:
      'Blush pinks and near-white tones shape your palette. You are drawn to softness and sentiment — a gentle, almost weightless register.',
    styleAdvice:
      'Pair sakura pink with ivory and a whisper of deeper rose. Keep everything light, rounded, and unhurried.',
    shareText: 'My colors read as Sakura Dreamer — romantic, dreamy, and tender.',
    rules: { hueAngle: 341.3, brightness: 89.1, saturation: 74.6, contrast: 0.23, naturalness: 0 },
  },
  {
    id: 'midnight-violet',
    name: 'Midnight Violet',
    shortName: 'Midnight Violet',
    primaryHex: '#3b2a5a',
    palette: ['#3b2a5a', '#6a4fa3', '#1c1430', '#9b86d6'],
    rarityLabel: 'Rare Style',
    traits: ['Mysterious', 'Intense', 'Creative'],
    aestheticTags: ['deep', 'cool', 'nocturnal'],
    description:
      'Dark violets and indigos run through your palette. You like depth and mood — a nocturnal, slightly enigmatic energy.',
    styleAdvice:
      'Layer deep violet with a single luminous accent. Let darkness set the stage and one bright note carry the eye.',
    shareText: 'My colors read as Midnight Violet — mysterious, intense, and creative.',
    rules: { hueAngle: 258, brightness: 38.7, saturation: 40.4, contrast: 0.36, naturalness: 0.25 },
  },
  {
    id: 'honey-gold-optimist',
    name: 'Honey Gold Optimist',
    shortName: 'Honey Gold',
    primaryHex: '#e0a83c',
    palette: ['#e0a83c', '#f6d98a', '#c98a1f', '#fff2cf'],
    rarityLabel: 'Bold Profile',
    traits: ['Warm', 'Cheerful', 'Open'],
    aestheticTags: ['warm', 'bright', 'friendly'],
    description:
      'Amber, gold, and honey tones light up your choices. You are drawn to warmth and good mood — sunny without being loud.',
    styleAdvice:
      'Use honey gold as a highlight against cream and soft brown. Keep it generous and welcoming.',
    shareText: 'My colors read as Honey Gold Optimist — warm, cheerful, and open.',
    rules: { hueAngle: 41.8, brightness: 66.8, saturation: 82.9, contrast: 0.35, naturalness: 0 },
  },
  {
    id: 'forest-earth-soul',
    name: 'Forest Earth Soul',
    shortName: 'Forest Earth',
    primaryHex: '#3c4a2f',
    palette: ['#3c4a2f', '#6b5535', '#8a9a5b', '#241f17'],
    rarityLabel: 'Classic Profile',
    traits: ['Rooted', 'Earthy', 'Steady'],
    aestheticTags: ['natural', 'deep', 'organic'],
    description:
      'Moss, bark, and soil tones ground your palette. You are pulled toward the natural world — steady, organic, and unpretentious.',
    styleAdvice:
      'Combine deep greens and browns with a rough, tactile feel. Avoid neon; let texture carry the interest.',
    shareText: 'My colors read as Forest Earth Soul — rooted, earthy, and steady.',
    rules: { hueAngle: 57.5, brightness: 28.7, saturation: 26, contrast: 0.24, naturalness: 0.75 },
  },
  {
    id: 'chrome-black-strategist',
    name: 'Chrome Black Strategist',
    shortName: 'Chrome Black',
    primaryHex: '#0e0e0e',
    palette: ['#0e0e0e', '#1f1f1f', '#c9ccd1', '#7a7d82'],
    rarityLabel: 'Rare Style',
    traits: ['Sharp', 'Technical', 'Decisive'],
    aestheticTags: ['mono', 'metallic', 'modern'],
    description:
      'Black, silver, and cool steel define your palette. You like precision and edge — a technical, high-contrast register.',
    styleAdvice:
      'Push black-and-white contrast hard, then add one cold metallic glint. Keep lines crisp and details exact.',
    shareText: 'My colors read as Chrome Black Strategist — sharp, technical, and decisive.',
    rules: { hueAngle: null, brightness: 36.9, saturation: 2.8, contrast: 0.49, naturalness: 0.5 },
  },
  {
    id: 'porcelain-blue-classic',
    name: 'Porcelain Blue Classic',
    shortName: 'Porcelain Blue',
    primaryHex: '#cfe3f0',
    palette: ['#cfe3f0', '#eef6fb', '#a9cbe0', '#ffffff'],
    rarityLabel: 'Classic Profile',
    traits: ['Clean', 'Timeless', 'Calm'],
    aestheticTags: ['light', 'cool', 'classic'],
    description:
      'Pale porcelain blues and white make up your palette. You favour a fresh, enduring calm — clean rather than cold.',
    styleAdvice:
      'Build airy layouts with porcelain blue and white. A thin darker blue rule adds just enough definition.',
    shareText: 'My colors read as Porcelain Blue Classic — clean, timeless, and calm.',
    rules: { hueAngle: 203.3, brightness: 90.2, saturation: 40.3, contrast: 0.3, naturalness: 0 },
  },
  {
    id: 'berry-punk',
    name: 'Berry Punk',
    shortName: 'Berry Punk',
    primaryHex: '#c0288f',
    palette: ['#c0288f', '#7b2ff7', '#ff3ea5', '#3a1140'],
    rarityLabel: 'Bold Profile',
    traits: ['Rebellious', 'Vivid', 'Playful'],
    aestheticTags: ['neon', 'bold', 'eclectic'],
    description:
      'Electric magentas and violets charge your palette. You like to break the rules — saturated, playful, and impossible to ignore.',
    styleAdvice:
      'Clash two vivid berries on a dark base. Let the energy be intentional; balance it with one neutral anchor.',
    shareText: 'My colors read as Berry Punk — rebellious, vivid, and playful.',
    rules: { hueAngle: 300.9, brightness: 45.3, saturation: 79, contrast: 0.4, naturalness: 0 },
  },
  {
    id: 'jade-valley-aesthete',
    name: 'Jade Valley Aesthete',
    shortName: 'Jade Valley',
    primaryHex: '#2f9e8f',
    palette: ['#2f9e8f', '#7fd1c4', '#1f6b61', '#d6f0ea'],
    rarityLabel: 'Uncommon Palette',
    traits: ['Refined', 'Balanced', 'Cultured'],
    aestheticTags: ['jade', 'cool', 'elegant'],
    description:
      'Jade greens and clear teals shape your palette. You like balance and quiet refinement — polished, never showy.',
    styleAdvice:
      'Pair jade with pale aqua and a touch of deep green. Keep proportions even and surfaces smooth.',
    shareText: 'My colors read as Jade Valley Aesthete — refined, balanced, and cultured.',
    rules: { hueAngle: 170.2, brightness: 55.6, saturation: 50.7, contrast: 0.4, naturalness: 0 },
  },
  {
    id: 'ocean-teal-explorer',
    name: 'Ocean Teal Explorer',
    shortName: 'Ocean Teal',
    primaryHex: '#1f8a8a',
    palette: ['#1f8a8a', '#3fb8b0', '#0f5f63', '#bfe9e6'],
    rarityLabel: 'Uncommon Palette',
    traits: ['Curious', 'Fluid', 'Adventurous'],
    aestheticTags: ['teal', 'cool', 'wide'],
    description:
      'Deep teals and sea greens run through your palette. You are drawn to movement and horizon — fluid, open, and a little restless.',
    styleAdvice:
      'Layer teals from deep to bright with a wide feel. Let gradients suggest depth rather than hard blocks.',
    shareText: 'My colors read as Ocean Teal Explorer — curious, fluid, and adventurous.',
    rules: { hueAngle: 179.3, brightness: 46.8, saturation: 58.7, contrast: 0.43, naturalness: 0 },
  },
  {
    id: 'pearl-ivory-romantic',
    name: 'Pearl Ivory Romantic',
    shortName: 'Pearl Ivory',
    primaryHex: '#f3ece0',
    palette: ['#f3ece0', '#fffaf2', '#e6d8c3', '#cdbfa6'],
    rarityLabel: 'Soft Profile',
    traits: ['Tender', 'Elegant', 'Warm'],
    aestheticTags: ['cream', 'warm', 'soft'],
    description:
      'Ivory, cream, and warm beige make up your palette. You like softness with warmth — intimate, gentle, and inviting.',
    styleAdvice:
      'Combine ivory with a hint of taupe and a single warm accent. Keep everything low-contrast and tactile.',
    shareText: 'My colors read as Pearl Ivory Romantic — tender, elegant, and warm.',
    rules: { hueAngle: 37.1, brightness: 86.3, saturation: 53.4, contrast: 0.33, naturalness: 0.25 },
  },
];

export function getArchetypeById(id) {
  return ARCHETYPES.find((a) => a.id === id) || null;
}
