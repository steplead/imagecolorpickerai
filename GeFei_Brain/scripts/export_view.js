const fs = require('fs');
const path = require('path');
const brain = require('../index.js');

// 1. Get Query from Command Line
const query = process.argv[2];

if (!query) {
    console.log("Using: node export_view.js <Search Term>");
    console.log("Example: node export_view.js '外链'");
    process.exit(1);
}

// 2. Search
console.log(`Searching for "${query}"...`);
const results = brain.search(query);

console.log(`Found ${results.length} posts.`);

// 3. Format Output
let output = `# Search Results for "${query}"\n`;
output += `> Found ${results.length} posts.\n\n`;

results.forEach((post, index) => {
    output += `### ${index + 1}. ${post.title || "No Title"}\n`;
    output += `- **Date:** ${post.scrapedAt}\n`;
    output += `- **Author:** ${post.author}\n`;
    output += `- **ID:** ${post.id}\n`;
    // Add a small snippet for context
    const snippet = post.fullText.replace(/\n/g, ' ').substring(0, 150);
    output += `- **Snippet:** ${snippet}...\n\n`;
});

// 4. Save to File
const exportDir = path.join(__dirname, '../exports');
if (!fs.existsSync(exportDir)) {
    fs.mkdirSync(exportDir);
}

const safeQuery = query.replace(/[^a-z0-9\u4e00-\u9fa5]/gi, '_'); // Safe name for Chinese/English
const filename = path.join(exportDir, `${safeQuery}_list.md`);

fs.writeFileSync(filename, output, 'utf8');

console.log(`✅ Exported to: ${filename}`);
console.log("You can now drag this file to the AI.");
