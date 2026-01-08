import IdeasHub from '../../../components/IdeasHub';

export const metadata = {
    title: 'Inspiración de Color e Ideas de Paletas - Guía de Diseño Tradicional | ImageColorPickerAI',
    description: 'Inspiración de color curada para su próximo proyecto. Explore paletas tradicionales para bodas, branding y diseño de interiores. Guía de diseño profesional.',
    alternates: {
        canonical: '/es/ideas',
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
        "name": "Inspiración de Color e Ideas de Paletas",
        "description": "Inspiración de color curada para su próximo proyecto. Explore paletas tradicionales para bodas, branding y diseño de interiores.",
        "url": "https://imagecolorpickerai.com/es/ideas"
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
            />
            <IdeasHub locale="es" />
        </>
    );
}
