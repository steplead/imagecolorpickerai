/**
 * Simple color theory utility to generate palettes from a base hex.
 * No external dependencies needed for basic HSL manipulation.
 */

// Convert Hex to HSL
function hexToHsl(hex) {
    let r = 0, g = 0, b = 0;
    if (hex.length === 4) {
        r = "0x" + hex[1] + hex[1];
        g = "0x" + hex[2] + hex[2];
        b = "0x" + hex[3] + hex[3];
    } else if (hex.length === 7) {
        r = "0x" + hex[1] + hex[2];
        g = "0x" + hex[3] + hex[4];
        b = "0x" + hex[5] + hex[6];
    }
    r /= 255;
    g /= 255;
    b /= 255;
    let cmin = Math.min(r, g, b),
        cmax = Math.max(r, g, b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;

    if (delta === 0) h = 0;
    else if (cmax === r) h = ((g - b) / delta) % 6;
    else if (cmax === g) h = (b - r) / delta + 2;
    else h = (r - g) / delta + 4;

    h = Math.round(h * 60);
    if (h < 0) h += 360;

    l = (cmax + cmin) / 2;
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return { h, s, l };
}

// Convert HSL to Hex
function hslToHex(h, s, l) {
    s /= 100;
    l /= 100;
    let c = (1 - Math.abs(2 * l - 1)) * s,
        x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
        m = l - c / 2,
        r = 0,
        g = 0,
        b = 0;

    if (0 <= h && h < 60) { r = c; g = x; b = 0; }
    else if (60 <= h && h < 120) { r = x; g = c; b = 0; }
    else if (120 <= h && h < 180) { r = 0; g = c; b = x; }
    else if (180 <= h && h < 240) { r = 0; g = x; b = c; }
    else if (240 <= h && h < 300) { r = x; g = 0; b = c; }
    else if (300 <= h && h < 360) { r = c; g = 0; b = x; }

    r = Math.round((r + m) * 255).toString(16);
    g = Math.round((g + m) * 255).toString(16);
    b = Math.round((b + m) * 255).toString(16);

    if (r.length === 1) r = "0" + r;
    if (g.length === 1) g = "0" + g;
    if (b.length === 1) b = "0" + b;

    return "#" + r + g + b;
}

export function generatePalettes(baseHex) {
    const { h, s, l } = hexToHsl(baseHex);

    // 1. Complementary (Opposite)
    const complementary = hslToHex((h + 180) % 360, s, l);

    // 2. Analogous (Neighbors)
    const analogous1 = hslToHex((h + 30) % 360, s, l);
    const analogous2 = hslToHex((h - 30 + 360) % 360, s, l);

    // 3. Triadic (Triangle)
    const triadic1 = hslToHex((h + 120) % 360, s, l);
    const triadic2 = hslToHex((h + 240) % 360, s, l);

    // 4. Monochrome (Lighter/Darker)
    const lighter = hslToHex(h, s, Math.min(l + 20, 95));
    const darker = hslToHex(h, s, Math.max(l - 20, 5));

    return {
        complementary: [baseHex, complementary],
        analogous: [analogous2, baseHex, analogous1],
        triadic: [baseHex, triadic1, triadic2],
        monochromatic: [lighter, baseHex, darker]
    };
}

// --- Accessibility & WCAG Utilities ---

function getLuminance(r, g, b) {
    var a = [r, g, b].map(function (v) {
        v /= 255;
        return v <= 0.03928
            ? v / 12.92
            : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

function hexToRgbVals(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : { r: 0, g: 0, b: 0 };
}

export function getContrastRatio(hex1, hex2) {
    const rgb1 = hexToRgbVals(hex1);
    const rgb2 = hexToRgbVals(hex2);
    const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
    const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
    return (brightest + 0.05) / (darkest + 0.05);
}

export function getWCAGScore(ratio) {
    if (ratio >= 7) return 'AAA';
    if (ratio >= 4.5) return 'AA';
    if (ratio >= 3) return 'AA Large';
    return 'Fail';
}

// Color Blindness Simulation Matrix
// Source: https://www.inf.ufrgs.br/~oliveira/pubs_files/CVD_Simulation/CVD_Simulation.html
export function simulateColorBlindness(hex, type) {
    const { r, g, b } = hexToRgbVals(hex);

    const matrices = {
        protanopia: [ // Red-blind
            0.567, 0.433, 0,
            0.558, 0.442, 0,
            0, 0.242, 0.758
        ],
        deuteranopia: [ // Green-blind
            0.625, 0.375, 0,
            0.7, 0.3, 0,
            0, 0.3, 0.7
        ],
        tritanopia: [ // Blue-blind
            0.95, 0.05, 0,
            0, 0.433, 0.567,
            0, 0.475, 0.525
        ],
        achromatopsia: [ // Monochromacy
            0.299, 0.587, 0.114,
            0.299, 0.587, 0.114,
            0.299, 0.587, 0.114
        ]
    };

    const m = matrices[type] || matrices.achromatopsia;

    // Apply matrix
    let R = (r * m[0] + g * m[1] + b * m[2]);
    let G = (r * m[3] + g * m[4] + b * m[5]);
    let B = (r * m[6] + g * m[7] + b * m[8]);

    // Clamping
    R = Math.min(Math.max(0, R), 255);
    G = Math.min(Math.max(0, G), 255);
    B = Math.min(Math.max(0, B), 255);

    // Convert back to Hex
    const toHex = (c) => {
        const hex = Math.round(c).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    };

    return "#" + toHex(R) + toHex(G) + toHex(B);
}
