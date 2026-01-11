import IdeasHub from '../../../components/IdeasHub';

export const metadata = {
    title: 'Farbinspiration & Palettenideen - Design Traditioneller Guide | ImageColorPickerAI',
    description: 'Kuratierte Farbinspiration für Ihr nächstes Projekt. Entdecken Sie traditionelle Paletten für Hochzeiten, Branding und Inneneinrichtung. Profi-Design-Guide.',
    alternates: {
        canonical: 'https://imagecolorpickerai.com/de/ideas',
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
