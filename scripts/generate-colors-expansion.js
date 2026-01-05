#!/usr/bin/env node

/**
 * Color Database Expansion Script (Protocol 1: Keyword Engineering)
 *
 * Generates 500+ colors using AI (DeepSeek/Replicate)
 * following the "Ge Fei Standard" for SEO-friendly keywords
 *
 * Usage: node scripts/generate-colors-expansion.js
 */

const fs = require('fs');
const path = require('path');

// Template for AI prompt (adjust based on your AI provider)
const AI_PROMPT = `Generate 50 traditional colors for a specific culture/theme. For each color, provide:
1. English name (SEO-friendly, includes descriptive words like "Vibrant", "Deep", "Soft")
2. Native name (original language)
3. Phonetic pronunciation
4. Hex color code (unique, aesthetic)
5. Cultural meaning (2-3 sentences, rich in history)
6. Collection ID (e.g., "chinese", "japanese", "nature", "pantone")
7. Tags (array: red, blue, green, warm, cool, neutral, vibrant, muted)

Format as JSON array. Focus on long-tail keywords with low KD (< 30).`;

// Expansion targets
const TARGETS = {
    chinese: 100,      // 100 Chinese colors
    japanese: 100,     // 100 Japanese colors
    nature: 100,       // 100 nature-inspired colors
    pantone: 50,       // 50 Pantone 2025 colors
    seasonal: 50,      // 50 seasonal colors
    emotions: 50,      // 50 emotion-based colors
    historical: 50,    // 50 historical pigments
};

/**
 * Generate color data using AI (replace with actual API call)
 */
async function generateColorsWithAI(theme, count) {
    // In production: Call OpenRouter/Replicate API
    // For now: Return template structure

    const colors = [];
    for (let i = 0; i < count; i++) {
        colors.push({
            id: `${theme}-color-${i + 1}`,
            name: `Generated ${theme.charAt(0).toUpperCase() + theme.slice(1)} Color ${i + 1}`,
            nativeName: `原生名称 ${i + 1}`,
            phoneticName: `native-name-${i + 1}`,
            hex: `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`,
            meaning: `A beautiful ${theme} color with deep cultural significance, historically used in traditional ceremonies and art.`,
            collectionId: theme,
            tags: ['neutral', 'generated'],
            createdAt: new Date().toISOString()
        });
    }

    return colors;
}

/**
 * Validate color data
 */
function validateColor(color) {
    const required = ['id', 'name', 'nativeName', 'hex', 'meaning', 'collectionId'];
    const missing = required.filter(field => !color[field]);

    if (missing.length > 0) {
        console.warn(`⚠️  Color ${color.id || 'unknown'} missing fields: ${missing.join(', ')}`);
        return false;
    }

    // Validate hex format
    if (!/^#[0-9A-F]{6}$/i.test(color.hex)) {
        console.warn(`⚠️  Invalid hex format for ${color.id}: ${color.hex}`);
        return false;
    }

    return true;
}

/**
 * Save colors to data files
 */
function saveColors(theme, colors) {
    const outputDir = path.join(__dirname, '../src/data/generated');
    fs.mkdirSync(outputDir, { recursive: true });

    const outputFile = path.join(outputDir, `${theme}Colors.json`);
    fs.writeFileSync(outputFile, JSON.stringify(colors, null, 2));

    console.log(`✅ Saved ${colors.length} ${theme} colors to ${outputFile}`);
}

/**
 * Generate SEO metadata for each color
 */
function generateSEOMetadata(colors) {
    return colors.map(color => ({
        ...color,
        seo: {
            title: `${color.name} (${color.nativeName}) - ${color.collectionId.charAt(0).toUpperCase() + color.collectionId.slice(1)} Color | Image Color Picker AI`,
            description: `${color.name} (${color.hex}): ${color.meaning.substring(0, 150)}...`,
            keywords: [
                color.name,
                color.nativeName,
                `${color.collectionId} colors`,
                `traditional ${color.collectionId} color`,
                `${color.name} hex code`,
                ...color.tags
            ].join(', ')
        }
    }));
}

/**
 * Main execution
 */
async function main() {
    console.log('🎨 Color Database Expansion (Protocol 1: Keyword Engineering)\n');

    const totalTarget = Object.values(TARGETS).reduce((a, b) => a + b, 0);
    console.log(`🎯 Target: Generate ${totalTarget} colors across ${Object.keys(TARGETS).length} themes\n`);

    const allColors = [];
    let completedThemes = 0;

    for (const [theme, count] of Object.entries(TARGETS)) {
        console.log(`\n📝 Generating ${count} ${theme} colors...`);

        try {
            const colors = await generateColorsWithAI(theme, count);
            const validColors = colors.filter(validateColor);

            if (validColors.length !== colors.length) {
                console.warn(`⚠️  Filtered out ${colors.length - validColors.length} invalid colors`);
            }

            // Generate SEO metadata
            const colorsWithSEO = generateSEOMetadata(validColors);
            allColors.push(...colorsWithSEO);

            // Save to theme-specific file
            saveColors(theme, colorsWithSEO);

            completedThemes++;
            console.log(`✅ ${theme}: ${validColors.length}/${count} colors generated`);
        } catch (error) {
            console.error(`❌ Failed to generate ${theme} colors:`, error.message);
        }
    }

    // Save master database
    const masterFile = path.join(__dirname, '../src/data/generated/masterDatabase.json');
    fs.writeFileSync(masterFile, JSON.stringify(allColors, null, 2));
    console.log(`\n✅ Master database saved: ${allColors.length} total colors`);

    // Generate report
    const report = {
        totalGenerated: allColors.length,
        targetTotal: totalTarget,
        completionRate: `${((allColors.length / totalTarget) * 100).toFixed(1)}%`,
        themesCompleted: completedThemes,
        themesTotal: Object.keys(TARGETS).length,
        generatedAt: new Date().toISOString(),
        breakdown: Object.fromEntries(
            Object.entries(TARGETS).map(([theme, count]) => [
                theme,
                {
                    target: count,
                    generated: allColors.filter(c => c.collectionId === theme).length
                }
            ])
        )
    };

    const reportFile = path.join(__dirname, '../logs/expansion-report.json');
    fs.mkdirSync(path.dirname(reportFile), { recursive: true });
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));

    console.log(`\n📊 Expansion Report:`);
    console.log(`   Total Generated: ${report.totalGenerated}/${report.targetTotal}`);
    console.log(`   Completion Rate: ${report.completionRate}`);
    console.log(`   Themes: ${report.themesCompleted}/${report.themesTotal}`);
    console.log(`\n✅ Report saved to: ${reportFile}`);

    console.log(`\n🎯 Next Steps:`);
    console.log(`1. Review generated colors in src/data/generated/`);
    console.log(`2. Manually curate and verify AI-generated content`);
    console.log(`3. Run: npm run build to regenerate static pages`);
    console.log(`4. Submit updated sitemap to Google Search Console`);
}

// Run if executed directly
if (require.main === module) {
    main().catch(console.error);
}

module.exports = { generateColorsWithAI, validateColor };
