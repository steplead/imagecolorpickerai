const brain = require('../index.js');

// 1. Get User Question
const question = process.argv.slice(2).join(' ');

if (!question) {
    console.log("Usage: node ask.js \"Your question here\"");
    process.exit(1);
}

console.log(`\n🤖 Researching Library for: "${question}"...\n`);

// 2. Simple NLP: Extract likely keywords (very basic)
// Remove stop words
const stopWords = ['how', 'to', 'what', 'is', 'the', 'a', 'an', 'in', 'on', 'for'];
const keywords = question.split(' ')
    .map(w => w.replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g, '').toLowerCase()) // Keep Chinese & English
    .filter(w => w.length > 2 && !stopWords.includes(w));

console.log(`   (Scanning for concepts: ${keywords.join(', ')})`);

// 3. Search: Union of all keywords
let allHits = [];

// A. First pass: exact phrase (if user typed quotes, complex to parse, so just try full string)
const exactHits = brain.search(question);
exactHits.forEach(h => h._score = 10);
allHits = [...exactHits];

// B. Second pass: individual keywords
keywords.forEach(k => {
    const hits = brain.search(k);
    hits.forEach(h => {
        h._score = (h._score || 0) + 1; // Increment score for multi-keyword matches
        allHits.push(h);
    });
});

// 4. Deduplicate and Rank
const uniqueHits = {};
allHits.forEach(h => {
    if (!uniqueHits[h.id]) {
        uniqueHits[h.id] = h;
    } else {
        uniqueHits[h.id]._score = (uniqueHits[h.id]._score || 0) + h._score;
    }
});

const rankedHits = Object.values(uniqueHits).sort((a, b) => (b._score || 0) - (a._score || 0));

// 5. Present Results
console.log(`\nFound ${rankedHits.length} relevant posts.`);
console.log("---------------------------------------------------");

const topHits = rankedHits.slice(0, 5); // Show top 5

if (topHits.length === 0) {
    console.log("No answers found. Try simpler keywords.");
} else {
    topHits.forEach((post, i) => {
        console.log(`\n[${i + 1}] Title: ${post.title || "Untitled"}`);
        console.log(`    Date: ${post.scrapedAt}`);
        console.log(`    Relevance Score: ${post.id}`); // Debug ID
        // Snippet
        const snippet = post.fullText.replace(/\n/g, ' ').substring(0, 300);
        console.log(`    Snippet: ${snippet}...`);
    });

    console.log("\n---------------------------------------------------");
    console.log("💡 TIP: To get a full export, run: node scripts/export_view.js \"" + keywords[0] + "\"");
}
