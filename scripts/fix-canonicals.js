#!/usr/bin/env node
/**
 * Fix canonical tags to use absolute URLs instead of relative paths
 * This fixes Google Search Console indexing issues
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

const BASE_URL = 'https://imagecolorpickerai.com';

// Files to process
const files = glob.sync('src/app/**/page.js', { cwd: process.cwd() });

let fixedCount = 0;
let skippedCount = 0;

files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const originalContent = content;

    // Fix canonical tags
    let newContent = content.replace(
        /canonical:\s*['"]\/([^'"]+)['"]/g,
        (match, path) => `canonical: '${BASE_URL}${path}'`
    );

    // Fix language tags
    newContent = newContent.replace(
        /'x-default':\s*['"]\/['"]/g,
        `'x-default': '${BASE_URL}/'`
    );

    newContent = newContent.replace(
        /'x-default':\s*['"]\/([^'"]+)['"]/g,
        (match, path) => `'x-default': '${BASE_URL}/${path}'`
    );

    // Fix all language URLs that are relative
    const langKeys = ['en', 'zh-Hans', 'ja', 'es', 'fr', 'de', 'pt'];
    langKeys.forEach(lang => {
        newContent = newContent.replace(
            new RegExp(`'${lang}':\\s*'((?!https://)[^']*)'`, 'g'),
            (match, url) => {
                if (!url.startsWith('http')) {
                    return `'${lang}': '${BASE_URL}${url.startsWith('/') ? '' : '/'}${url}'`;
                }
                return match;
            }
        );
    });

    if (newContent !== originalContent) {
        fs.writeFileSync(file, newContent, 'utf8');
        fixedCount++;
        console.log(`✓ Fixed: ${file}`);
    } else {
        skippedCount++;
    }
});

console.log(`\n✅ Complete! Fixed ${fixedCount} files, skipped ${skippedCount} files.`);
