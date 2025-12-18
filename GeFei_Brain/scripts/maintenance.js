const fs = require('fs');
const path = require('path');
const stats = require('../data/meta.json');
const brain = require('../index.js');

// 1. Snapshot Current State
console.log(`[Watchdog] Current Library Version: ${stats.version}`);
console.log(`[Watchdog] Total Posts: ${stats.totalPosts}`);

// 2. Define Triggers (Keywords that might change rules)
const TRIGGERS = {
    "KEYWORDS": ["algorithm update", "core update", "KD calculation", "search volume bug"],
    "ARCHITECTURE": ["structure", "silo", "internal link", "tagging strategy"],
    "CONFIG": ["canonical", "meta tag", "title length", "google index"]
};

// 3. Simulation: Check for "New" posts (In reality, this would compare old vs new JSON)
// For now, we scan the *latest* 50 posts to see if they flag anything.
const allPosts = brain.getAll();
// Sort by date desc
allPosts.sort((a, b) => new Date(b.scrapedAt) - new Date(a.scrapedAt));
const recentPosts = allPosts.slice(0, 50);

console.log(`\n[Watchdog] Scanning ${recentPosts.length} most recent posts for Protocol Alerts...`);

let alerts = [];

recentPosts.forEach(post => {
    const text = (post.title + " " + post.fullText).toLowerCase();

    Object.entries(TRIGGERS).forEach(([protocol, keywords]) => {
        keywords.forEach(k => {
            if (text.includes(k.toLowerCase())) {
                alerts.push({
                    protocol: protocol,
                    keyword: k,
                    postTitle: post.title,
                    date: post.scrapedAt
                });
            }
        });
    });
});

if (alerts.length === 0) {
    console.log("✅ No Protocol Alerts found. Your rules are up to date.");
} else {
    console.log(`⚠️  FOUND ${alerts.length} POTENTIAL ALERTS:`);
    console.log("---------------------------------------------------");
    alerts.forEach(a => {
        console.log(`[${a.protocol}] Update Risk! Keyword "${a.keyword}" found in post:`);
        console.log(`   "${a.postTitle}" (${a.date})`);
    });
    console.log("---------------------------------------------------");
    console.log("RECOMMENDATION: Review these posts to see if Protocols need editing.");
}
