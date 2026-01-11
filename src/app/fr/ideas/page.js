import IdeasHub from '../../../components/IdeasHub';

export const metadata = {
    title: 'Inspiration Couleur & Idées Palettes - Design Traditionnel | ImageColorPickerAI',
    description: 'Inspiration de couleurs curatée pour votre prochain projet. Explorez les palettes traditionnelles pour les mariages, le branding et la décoration d\'intérieur.',
    alternates: {
        canonical: 'https://imagecolorpickerai.com/fr/ideas',
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
        "name": "Inspiration de Couleur et Idées de Palettes",
        "description": "Inspiration de couleurs curatée pour votre prochain projet. Explorez les palettes traditionnelles pour les mariages, le branding et la décoration d'intérieur.",
        "url": "https://imagecolorpickerai.com/fr/ideas"
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
            />
            <IdeasHub locale="fr" />
        </>
    );
}
