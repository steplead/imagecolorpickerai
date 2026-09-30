// Page-level openGraph + twitter metadata builder.
//
// Next.js App Router merges metadata shallowly: any page that does not define
// its own openGraph/twitter inherits the root layout's homepage values, so
// every inner page's social card showed the homepage. Each content page
// spreads socialMeta() into its metadata (or generateMetadata return) so the
// card always shows the page's own title / description / URL.
const SITE = 'https://imagecolorpickerai.com';

export function socialMeta({ title, description, path, type = 'website' }) {
    const images = [{ url: '/og-image.png', width: 1200, height: 630, alt: title }];
    return {
        openGraph: {
            title,
            description,
            url: `${SITE}${path}`,
            siteName: 'ImageColorPickerAI',
            images,
            type,
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: images.map((img) => img.url),
        },
    };
}
