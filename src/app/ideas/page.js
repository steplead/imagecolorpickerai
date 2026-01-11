import IdeasHub from '../../components/IdeasHub';

export const metadata = {
    title: 'Color Inspiration & Palette Ideas - Traditional Design Guide | ImageColorPickerAI',
    description: 'Curated color inspiration for your next project. Explore traditional Chinese palettes for Weddings, Branding, and Interior Design. Professional design guide.',
    alternates: {
        canonical: 'https://imagecolorpickerai.com/ideas',
        languages: {
            'en': 'https://imagecolorpickerai.com/ideas',
            'zh-Hans': 'https://imagecolorpickerai.com/zh/ideas',
            'ja': 'https://imagecolorpickerai.com/ja/ideas',
            'es': 'https://imagecolorpickerai.com/es/ideas',
            'fr': 'https://imagecolorpickerai.com/fr/ideas',
            'de': 'https://imagecolorpickerai.com/de/ideas',
            'pt': 'https://imagecolorpickerai.com/pt/ideas',
            'x-default': 'https://imagecolorpickerai.com/ideas',
        },
    },
};

export default function IdeasHubPage() {
    const collectionPageSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Color Inspiration & Palette Ideas",
        "description": "Curated color inspiration for your next project. Explore traditional Chinese palettes for Weddings, Branding, and Interior Design.",
        "url": "https://imagecolorpickerai.com/ideas"
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
            />
            <IdeasHub locale="en" />
        </>
    );
}
