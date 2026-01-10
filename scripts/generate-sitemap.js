const fs = require('fs');
const path = require('path');

// Base URL
const BASE_URL = 'https://imagecolorpickerai.com';

// Static pages (all languages)
const staticPages = [
    '', // homepage
    'scan',
    'about',
    'contact',
    'ideas',
    'privacy-policy',
    'terms-of-service',
    'widget'
];

// Language prefixes
const languages = ['en', 'zh', 'ja', 'es', 'fr', 'de', 'pt'];

// Color collections
const colorGroups = ['chinese', 'japanese', 'red', 'blue', 'green', 'nature'];

// Generate all URLs
const urls = [];

// Add static pages for all languages
languages.forEach(lang => {
    const prefix = lang === 'en' ? '' : `/${lang}`;

    staticPages.forEach(page => {
        const path = page === '' ? prefix : `${prefix}/${page}`;
        const url = path === '' ? BASE_URL : `${BASE_URL}${path}`;
        urls.push({
            url,
            changefreq: 'weekly',
            priority: path.includes('scan') ? '0.9' : '0.8'
        });
    });

    // Add color collection pages
    colorGroups.forEach(group => {
        urls.push({
            url: `${BASE_URL}${prefix}/colors/${group}`,
            changefreq: 'weekly',
            priority: '0.7'
        });
    });
});

// Add idea categories
const ideaCategories = ['fashion', 'interior', 'branding', 'wedding', 'art', 'nature'];
languages.forEach(lang => {
    const prefix = lang === 'en' ? '' : `/${lang}`;
    ideaCategories.forEach(cat => {
        urls.push({
            url: `${BASE_URL}${prefix}/ideas/${cat}`,
            changefreq: 'weekly',
            priority: '0.7'
        });
    });
});

// Add sample compare URLs
const compareExamples = [
    'imperial-red-vs-cinnabar',
    'misty-blue-vs-jade',
    'vermilion-vs-crimson'
];
languages.forEach(lang => {
    const prefix = lang === 'en' ? '' : `/${lang}`;
    compareExamples.forEach(comp => {
        urls.push({
            url: `${BASE_URL}${prefix}/compare/${comp}`,
            changefreq: 'monthly',
            priority: '0.6'
        });
    });
});

// Add sample combine URLs
const combineExamples = [
    'imperial-red-and-misty-blue',
    'cinnabar-and-jade'
];
languages.forEach(lang => {
    const prefix = lang === 'en' ? '' : `/${lang}`;
    combineExamples.forEach(comb => {
        urls.push({
            url: `${BASE_URL}${prefix}/combine/${comb}`,
            changefreq: 'monthly',
            priority: '0.6'
        });
    });
});

// Generate XML
const xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' +
    urls.map(u => '  <url>\n    <loc>' + u.url + '</loc>\n    <changefreq>' + u.changefreq + '</changefreq>\n    <priority>' + u.priority + '</priority>\n  </url>').join('\n') +
    '\n</urlset>';

// Write to public directory
fs.writeFileSync('public/sitemap.xml', xml);

console.log('✅ Generated sitemap.xml with ' + urls.length + ' URLs');
console.log('📍 Location: public/sitemap.xml');
console.log('🌐 View at: ' + BASE_URL + '/sitemap.xml');
