import { getAllColors, getCollection } from './colorData';

/**
 * Helper: Parse Hex to RGB
 * @param {string} hex - Hex code (e.g. #ff461f)
 * @returns {object} {r, g, b} or null
 */
export const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

/**
 * Main Function: Find closest match using Euclidean Distance
 * @param {string} userHex - User provided hex
 * @returns {object} The matched color object or null
 */
export const findClosestColor = (userHex) => {
    const userRgb = hexToRgb(userHex);
    if (!userRgb) return null;

    const allColors = getAllColors();
    let closestColor = null;
    let minDistance = Infinity;

    allColors.forEach((color) => {
        const dbRgb = hexToRgb(color.hex);
        if (!dbRgb) return;

        // Standard Euclidean Distance
        const distance = Math.sqrt(
            Math.pow(userRgb.r - dbRgb.r, 2) +
            Math.pow(userRgb.g - dbRgb.g, 2) +
            Math.pow(userRgb.b - dbRgb.b, 2)
        );

        if (distance < minDistance) {
            minDistance = distance;
            closestColor = color;
        }
    });

    return closestColor;
};

// Alias kept for existing callers (HomeView non-English path)
export const findClosestChineseColor = findClosestColor;

// Clearer name for the homepage tool: matches across all collections
// (chinese + japanese + pantone + nature) and lets the UI show the origin.
export const findClosestTraditionalColor = findClosestColor;

/**
 * Helper: Get Colors by Tag (For Category Pages)
 * @param {string} tag - The tag to filter by (e.g. "red")
 * @returns {array} Array of matching color objects
 */
export const getColorsByTag = (tag) => {
    if (!tag) return [];
    const searchTag = tag.toLowerCase();
    return getAllColors().filter(c =>
        (c.tags && c.tags.some(t => t.toLowerCase() === searchTag)) ||
        (c.collectionId === searchTag)
    );
};

// F3-3: single source of truth for the tag/collection-page generation threshold.
// A group page is only generated (and only renders) when it has >= 3 colours.
// Shared by colors/[group] generateStaticParams (EN) and the tag-chip filter in
// ColorDetailView so the two can never drift. 'nature' is special-cased the same
// way the page resolves it (getCollection, not the tag) to stay consistent.
export const getColorCountForGroup = (group) => {
    const g = (group || '').toLowerCase();
    if (g === 'nature') return getCollection('nature').length;
    return getColorsByTag(g).length;
};

export const isGeneratedGroup = (group) => {
    return getColorCountForGroup(group) >= 3;
};
