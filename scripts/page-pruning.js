#!/usr/bin/env node

/**
 * Page Pruning Script (Protocol 5: Ecosystem Metabolism)
 *
 * Identifies pages with 0 traffic and 0 impressions for 6+ months
 * and suggests actions: 301, 410, or noindex
 *
 * Usage: node scripts/page-pruning.js
 */

const fs = require('fs');
const path = require('path');

// Simulated page performance data (replace with GA4 API in production)
const pagePerformance = [
    { path: '/color/obscure-red-1', impressions: 0, clicks: 0, lastUpdated: '2024-06-01' },
    { path: '/color/forgotten-blue-2', impressions: 0, clicks: 0, lastUpdated: '2024-05-15' },
    { path: '/color/ancient-green-3', impressions: 5, clicks: 0, lastUpdated: '2024-11-01' },
    { path: '/colors/unused-category', impressions: 0, clicks: 0, lastUpdated: '2024-01-01' },
];

const SIX_MONTHS_AGO = new Date();
SIX_MONTHS_AGO.setMonth(SIX_MONTHS_AGO.getMonth() - 6);

/**
 * Analyze page performance and suggest pruning actions
 */
function analyzePagePerformance(pages) {
    const recommendations = [];

    for (const page of pages) {
        const lastUpdated = new Date(page.lastUpdated);
        const monthsSinceUpdate = (new Date() - lastUpdated) / (1000 * 60 * 60 * 24 * 30);

        if (page.impressions === 0 && page.clicks === 0 && monthsSinceUpdate >= 6) {
            // Dead page: 0 impressions + 0 clicks + 6 months
            recommendations.push({
                path: page.path,
                status: 'DEAD',
                action: '410_GONE',
                reason: `0 impressions and 0 clicks for ${Math.floor(monthsSinceUpdate)} months`,
                priority: 'HIGH'
            });
        } else if (page.impressions === 0 && monthsSinceUpdate >= 6) {
            // Low value: 0 impressions but may have backlinks
            recommendations.push({
                path: page.path,
                status: 'LOW_VALUE',
                action: 'NOINDEX',
                reason: `0 impressions for ${Math.floor(monthsSinceUpdate)} months (keep for users, hide from Google)`,
                priority: 'MEDIUM'
            });
        } else if (page.impressions < 10 && monthsSinceUpdate >= 6) {
            // Underperforming: Some impressions but very low
            recommendations.push({
                path: page.path,
                status: 'UNDERPERFORMING',
                action: 'OBSERVE',
                reason: `Only ${page.impressions} impressions in ${Math.floor(monthsSinceUpdate)} months`,
                priority: 'LOW'
            });
        }
    }

    return recommendations;
}

/**
 * Generate robots.txt rules for noindex pages
 */
function generateNoindexRules(recommendations) {
    const noindexPages = recommendations
        .filter(r => r.action === 'NOINDEX')
        .map(r => `Disallow: ${r.path}`);

    return `
# Auto-generated noindex rules for low-value pages
# Generated: ${new Date().toISOString()}
# Protocol 5: Prune dead pages to save crawl budget

${noindexPages.join('\n')}
`;
}

/**
 * Main execution
 */
function main() {
    console.log('🌱 Page Pruning Analysis (Protocol 5: Ecosystem Metabolism)\n');

    const recommendations = analyzePagePerformance(pagePerformance);

    console.log(`Found ${recommendations.length} pages needing attention:\n`);

    recommendations.forEach((rec, index) => {
        console.log(`${index + 1}. ${rec.path}`);
        console.log(`   Status: ${rec.status}`);
        console.log(`   Action: ${rec.action}`);
        console.log(`   Reason: ${rec.reason}`);
        console.log(`   Priority: ${rec.priority}\n`);
    });

    // Generate output files
    const reportPath = path.join(__dirname, '../logs/pruning-report.json');
    const robotsPath = path.join(__dirname, '../public/pruning-robots.txt');

    fs.mkdirSync(path.dirname(reportPath), { recursive: true });

    fs.writeFileSync(
        reportPath,
        JSON.stringify({ recommendations, generatedAt: new Date().toISOString() }, null, 2)
    );

    fs.writeFileSync(
        robotsPath,
        generateNoindexRules(recommendations)
    );

    console.log(`✅ Report saved to: ${reportPath}`);
    console.log(`�️  Noindex rules saved to: ${robotsPath}`);
    console.log('\n📋 Next Steps:');
    console.log('1. Review the recommendations in pruning-report.json');
    console.log('2. For DEAD pages: Add 410 redirects in next.config.js');
    console.log('3. For NOINDEX pages: Add <meta name="robots" content="noindex"> to page metadata');
    console.log('4. For OBSERVE pages: Monitor for another 3 months');
}

// Run if executed directly
if (require.main === module) {
    main();
}

module.exports = { analyzePagePerformance, generateNoindexRules };
