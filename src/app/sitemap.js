import chineseColors from '../data/chineseColors.json';

export default function sitemap() {
    const baseUrl = 'https://imagecolorpickerai.com';

    // 1. Static Routes
    const routes = [
        '',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString().split('T')[0],
        changeFrequency: 'daily',
        priority: 1.0,
    }));

    // 2. Color Detail Pages (Programmatic)
    const colorRoutes = chineseColors.map((color) => ({
        url: `${baseUrl}/color/${color.id}`,
        lastModified: new Date().toISOString().split('T')[0],
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    // 3. Category Pages (Programmatic)
    const uniqueTags = new Set();
    chineseColors.forEach(c => {
        if (c.tags) c.tags.forEach(t => uniqueTags.add(t));
    });

    const categoryRoutes = Array.from(uniqueTags).map((tag) => ({
        url: `${baseUrl}/colors/${tag}`,
        lastModified: new Date().toISOString().split('T')[0],
        changeFrequency: 'weekly',
        priority: 0.9,
    }));

    return [...routes, ...colorRoutes, ...categoryRoutes];
}
