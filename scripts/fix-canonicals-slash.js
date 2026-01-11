#!/usr/bin/env node
/**
 * Fix missing slashes in canonical URLs
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

const BASE_URL = 'https://imagecolorpickerai.com';

// Files to process
const files = glob.sync('src/app/**/page.js', { cwd: process.cwd() });

let fixedCount = 0;

files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    let newContent = content;

    // Fix patterns like 'https://imagecolorpickerai.comcontact' -> 'https://imagecolorpickerai.com/contact'
    newContent = newContent.replace(
        new RegExp(`'(${BASE_URL})([a-z]|zh|ja|es|fr|de|pt)`, 'g'),
        (match, base, path) => {
            // Only fix if it's not already a valid URL with slash
            if (!content.includes(match.substring(0, base.length + 1) + '/')) {
                return `'${base}/${path}`;
            }
            return match;
        }
    );

    // Another pattern: fix canonical URLs that are missing slash
    newContent = newContent.replace(
        /canonical:\s*'https:\/\/imagecolorpickerai\.com([a-z]|zh|ja|es|fr|de|pt)/g,
        (match, path) => `canonical: 'https://imagecolorpickerai.com/${path}`
    );

    if (newContent !== content) {
        fs.writeFileSync(file, newContent, 'utf8');
        fixedCount++;
        console.log(`✓ Fixed: ${file}`);
    }
});

console.log(`\n✅ Complete! Fixed ${fixedCount} files.`);
