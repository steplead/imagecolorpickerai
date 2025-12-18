const fs = require('fs');
const path = require('path');

// Load Data Once (Synchronously) at startup
const DATA_PATH = path.join(__dirname, 'data', 'knowledge.json');
const META_PATH = path.join(__dirname, 'data', 'meta.json');

let knowledge = [];
let meta = {};

try {
    knowledge = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
    meta = JSON.parse(fs.readFileSync(META_PATH, 'utf8'));
} catch (e) {
    console.error('[GeFei_Brain] Error loading data:', e.message);
}

/**
 * Returns all knowledge posts.
 * @returns {Array} List of post objects.
 */
function getAll() {
    return knowledge;
}

/**
 * Returns statistics about the knowledge base.
 * @returns {Object} Metadata object.
 */
function stats() {
    return meta;
}

/**
 * Validates a "Rule" input against the knowledge base.
 * @param {string} query - The topic to search for.
 * @returns {Array} Matching posts.
 */
function search(query) {
    if (!query) return [];
    const q = query.toLowerCase();
    // Simple text match
    return knowledge.filter(p =>
        (p.title && p.title.toLowerCase().includes(q)) ||
        (p.fullText && p.fullText.toLowerCase().includes(q))
    );
}

/**
 * Returns a prompt-ready string for AI context.
 * @param {string} topic - Optional topic to filter by (to save tokens).
 * @returns {string} Formatted context string.
 */
function getContext(topic = null) {
    let posts = knowledge;
    if (topic) {
        posts = search(topic).slice(0, 10); // Limit to top 10 relevant
    }

    return `
=== GE FEI KNOWLEDGE BASE ===
Version: ${meta.version}
Topic: ${topic || 'ALL'}
Post Count: ${posts.length}

${posts.map((p, i) => `
--- POST #${i + 1} ---
Title: ${p.title}
Date: ${p.scrapedAt}
Content:
${(p.fullText || '').substring(0, 1000)}... [Truncated for Context]
`).join('\n')}
=============================
    `;
}

module.exports = {
    getAll,
    stats,
    search,
    getContext
};
