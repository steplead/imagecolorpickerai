const brain = require('./GeFei_Brain/index.js');

console.log("--- RESULT 1: MAIN GUIDE ---");
const guides = brain.search("新词挖掘实操指南");
guides.forEach(p => {
    console.log(`TITLE: ${p.title}`);
    console.log(`CONTENT:\n${p.fullText}\n`);
    console.log("--------------------------------------------------");
});

console.log("--- RESULT 2: NEW SITE STRATEGIES ---");
const all = brain.getAll();
// Filter for high quality "new site" keyword posts
const strategies = all.filter(p => {
    const txt = (p.fullText || "").toLowerCase();
    const title = (p.title || "").toLowerCase();
    return (txt.includes('新站') && txt.includes('关键词') && (title.includes('挖掘') || title.includes('布局') || title.includes('策略')));
}).slice(0, 5);

strategies.forEach(p => {
    // Avoid re-printing the same guide if found
    if (guides.find(g => g.title === p.title)) return;

    console.log(`TITLE: ${p.title}`);
    console.log(`CONTENT SNIPPET:\n${p.fullText.substring(0, 800)}...\n`); // Longer snippet to catch the meat
    console.log("--------------------------------------------------");
});
