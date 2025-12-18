const fs = require('fs');
const path = require('path');

const RAW_DATA = path.join(__dirname, '../data/knowledge.json');
const OUT_INDEX = path.join(__dirname, '../data/topics.json');
const OUT_SUMMARY = path.join(__dirname, '../SUMMARY.md');

// Define SEO Topics (Keywords to look for)
const TOPICS = {
    "Keywords & Niche": ["keyword", "niche", "long tail", "volume", "kd", "difficulty", "research", "finding", "intent", "关键词", "选词", "利基"],
    "Content Strategy": ["content", "writing", "blog", "article", "editor", "outline", "quality", "frequency", "ai writing", "内容", "文章", "各种"],
    "Backlinks & Off-Page": ["backlink", "link building", "guest post", "outreach", "dr", "da", "authority", "referral", "外链", "链接"],
    "Technical SEO": ["speed", "performance", "vital", "schema", "sitemap", "robot", "crawl", "index", "technical", "mobile", "速度", "技术"],
    "Traffic & Analytics": ["traffic", "analytics", "gsc", "search console", "click", "impression", "ctr", "ranking", "流量", "数据"],
    "Monetization": ["adsense", "money", "revenue", "earning", "affiliate", "monetiz", "income", "price", "变现", "收入", "赚钱"],
    "Tools & Tech": ["tool", "plugin", "wordpress", "server", "hosting", "domain", "dns", "cloudflare", "工具", "插件"]
};

try {
    const posts = JSON.parse(fs.readFileSync(RAW_DATA, 'utf8'));
    const index = {};
    const summaryLines = ["# 📚 GeFei Brain: Table of Contents\n"];

    // Initialize Categories
    Object.keys(TOPICS).forEach(k => index[k] = []);
    index["Uncategorized"] = [];

    // Categorize
    posts.forEach(post => {
        let assigned = false;
        const text = (post.title + " " + (post.feedText || "")).toLowerCase();

        for (const [category, keywords] of Object.entries(TOPICS)) {
            if (keywords.some(k => text.includes(k.toLowerCase()))) {
                index[category].push({
                    title: post.title,
                    date: post.scrapedAt,
                    id: post.url // Use URL as ID for now
                });
                assigned = true;
                // We allow multi-category (don't break) or single? Let's do multi.
            }
        }

        if (!assigned) {
            index["Uncategorized"].push({
                title: post.title,
                date: post.scrapedAt,
                id: post.url
            });
        }
    });

    // Write JSON Index
    fs.writeFileSync(OUT_INDEX, JSON.stringify(index, null, 2));
    console.log(`Wrote index to ${OUT_INDEX}`);

    // Write Markdown Summary (Book Style)
    Object.entries(index).forEach(([category, items]) => {
        if (items.length === 0) return;

        summaryLines.push(`## ${category} (${items.length} Posts)`);

        // Sort by date desc
        items.sort((a, b) => new Date(b.date) - new Date(a.date));

        items.slice(0, 20).forEach(item => {
            summaryLines.push(`- **${item.date.substring(0, 10)}**: ${item.title}`);
        });
        if (items.length > 20) summaryLines.push(`- *(...and ${items.length - 20} more)*`);
        summaryLines.push("");
    });

    fs.writeFileSync(OUT_SUMMARY, summaryLines.join('\n'));
    console.log(`Wrote summary to ${OUT_SUMMARY}`);

} catch (e) {
    console.error(e);
}
