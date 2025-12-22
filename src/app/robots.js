export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/api/', // Block API routes from indexing
        },
        sitemap: 'https://imagecolorpickerai.com/sitemap.xml',
    }
}
