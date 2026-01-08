import IdeasHub from '../../../components/IdeasHub';

export const metadata = {
    title: 'Inspiration de Couleur et Idées de Palettes - Guide de Design Traditionnel | ImageColorPickerAI',
    description: 'Inspiration de couleurs curatée pour votre prochain projet. Explorez les palettes traditionnelles pour les mariages, le branding et la décoration d\'intérieur.',
    alternates: {
        canonical: '/fr/ideas',
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
