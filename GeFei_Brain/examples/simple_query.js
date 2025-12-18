const gefei = require('../index.js');

console.log('--- GeFei Brain Test ---');

// 1. Check Stats
const stats = gefei.stats();
console.log('Stats:', JSON.stringify(stats, null, 2));

if (stats.totalPosts < 1000) {
    console.error('FAIL: Less than 1000 posts found.');
    process.exit(1);
}

// 2. Check Search
const topic = 'SEO';
const results = gefei.search(topic);
console.log(`\nSearch for "${topic}": Found ${results.length} posts.`);

if (results.length === 0) {
    console.error(`FAIL: No results for ${topic}.`);
    process.exit(1);
}

console.log('\nSample Post Title:', results[0].title);

// 3. Check Context Generation
const context = gefei.getContext('google');
console.log('\nContext Preview (First 200 chars):');
console.log(context.substring(0, 200));

console.log('\nSUCCESS: GeFei Brain is functioning correctly.');
