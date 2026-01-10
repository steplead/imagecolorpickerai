import HomeView from '../../components/HomeView';

export const metadata = {
    title: 'Selector Color Imagen - HEX & Enciclopedia Tradicional | ImageColorPickerAI',
    description: 'Selector color imagen gratuito. Extrae códigos HEX, RGB, CMYK y descubre colores tradicionales chinos y japoneses. Potenciado por IA, sin registro.',
    alternates: {
        canonical: '/es',
        languages: {
            'en': '/',
            'zh-Hans': '/zh',
            'ja': '/ja',
            'es': '/es',
            'fr': '/fr',
            'de': '/de',
            'pt': '/pt',
            'x-default': '/',
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

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <HomeView locale="es" />
        </>
    );
}
