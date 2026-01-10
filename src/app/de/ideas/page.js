import IdeasHub from '../../../components/IdeasHub';

export const metadata = {
    title: 'Farbinspiration & Palettenideen - Design Traditioneller Guide | ImageColorPickerAI',
    description: 'Kuratierte Farbinspiration für Ihr nächstes Projekt. Entdecken Sie traditionelle Paletten für Hochzeiten, Branding und Inneneinrichtung. Profi-Design-Guide.',
    alternates: {
        canonical: '/de/ideas',
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

export default function Page() {
    const collectionPageSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Farbinspiration & Palettenideen",
        "description": "Kuratierte Farbinspiration für Ihr nächstes Projekt. Entdecken Sie traditionelle Paletten für Hochzeiten, Branding und Inneneinrichtung.",
        "url": "https://imagecolorpickerai.com/de/ideas"
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
            />
            <IdeasHub locale="de" />
        </>
    );
}
