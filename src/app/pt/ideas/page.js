import IdeasHub from '../../../components/IdeasHub';

export const metadata = {
    title: 'Inspiração Cores & Ideias Paletas - Design Tradicional | ImageColorPickerAI',
    description: 'Inspiração cores curadas. Explore paletas tradicionais para casamentos, marcas e design de interiores. Guia profissional.',
    alternates: {
        canonical: 'https://imagecolorpickerai.com/pt/ideas',
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
        "name": "Inspiração de Cores e Ideias de Paletas",
        "description": "Inspiração de cores curada para o seu próximo projecto. Explore paletas tradicionais para casamentos, marcas e design de interiores.",
        "url": "https://imagecolorpickerai.com/pt/ideas"
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
            />
            <IdeasHub locale="pt" />
        </>
    );
}
