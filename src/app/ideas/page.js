import IdeasHub from '../../components/IdeasHub';

export const metadata = {
    title: 'Color Inspiration & Palette Ideas - Traditional Chinese Design Guide | ImageColorPickerAI',
    description: 'Curated color inspiration for your next project. Explore traditional Chinese palettes for Weddings, Branding, and Interior Design. Professional design guide.',
    alternates: {
        canonical: '/ideas',
        languages: {
            'en': '/ideas',
            'zh-Hans': '/zh/ideas',
            'ja': '/ja/ideas',
            'es': '/es/ideas',
            'fr': '/fr/ideas',
            'de': '/de/ideas',
            'pt': '/pt/ideas',
            'x-default': '/ideas',
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
