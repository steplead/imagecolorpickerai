import IdeasHub from '../../../components/IdeasHub';

export const metadata = {
    title: 'Inspiración Color & Ideas Paletas - Diseño Tradicional | ImageColorPickerAI',
    description: 'Inspiración de color curada para su próximo proyecto. Explore paletas tradicionales para bodas, branding y diseño de interiores. Guía de diseño profesional.',
    alternates: {
        canonical: 'https://imagecolorpickerai.com/es/ideas',
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
