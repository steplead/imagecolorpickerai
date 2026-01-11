import HomeView from '../../components/HomeView';

export const metadata = {
    title: 'Selector Color Imagen - HEX & Enciclopedia Tradicional | ImageColorPickerAI',
    description: 'Selector color imagen gratuito. Extrae códigos HEX, RGB, CMYK y descubre colores tradicionales chinos y japoneses. Potenciado por IA, sin registro.',
    alternates: {
        canonical: 'https://imagecolorpickerai.com/es',
        languages: {
            'en': 'https://imagecolorpickerai.com/',
            'zh-Hans': 'https://imagecolorpickerai.com/zh',
            'ja': 'https://imagecolorpickerai.com/ja',
            'es': 'https://imagecolorpickerai.com/es',
            'fr': 'https://imagecolorpickerai.com/fr',
            'de': 'https://imagecolorpickerai.com/de',
            'pt': 'https://imagecolorpickerai.com/pt',
            'x-default': 'https://imagecolorpickerai.com/',
        },
    },
};

export default function Page() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "¿Cómo extraer colores de una imagen?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Simplemente sube tu imagen JPG o PNG a nuestra herramienta. Usa el ratón para pasar sobre cualquier área de la imagen y el código hex se mostrará al instante."
                }
            },
            {
                "@type": "Question",
                "name": "¿Es gratis este selector de color?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sí, ImageColorPickerAI es una herramienta en línea 100% gratuita con subidas y generaciones de paletas ilimitadas."
                }
            },
            {
                "@type": "Question",
                "name": "¿Puedo extraer colores para el arte japonés y chino?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutamente. Nos especializamos en mapear colores digitales a paletas tradicionales, incluyendo sistemas de color japoneses de la era Heian y chinos de la era Ming."
                }
            }
        ]
    };

    const webSiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "ImageColorPickerAI",
        "alternateName": "Selector de Color de Imagen AI",
        "url": "https://imagecolorpickerai.com/es",
        "description": "Selector de color de imagen gratuito en línea con enciclopedia de colores tradicionales chinos y japoneses impulsada por IA",
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://imagecolorpickerai.com/es/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
            />
            <HomeView locale="es" />
        </>
    );
}
