import HomeView from '../../components/HomeView';

export const metadata = {
    title: 'Seletor Cores Imagem - HEX & Enciclopédia Tradicional | ImageColorPickerAI',
    description: 'Seletor cores imagem gratuito. Extraia códigos HEX, RGB, CMYK e descubra cores tradicionais chinesas e japonesas. IA, sem registro.',
    alternates: {
        canonical: 'https://imagecolorpickerai.com/pt',
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
                "name": "Como extrair cores de uma imagem?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Basta enviar sua imagem JPG ou PNG para nossa ferramenta. Use o mouse para passar o mouse sobre qualquer área da imagem e o código hex será exibido instantaneamente."
                }
            },
            {
                "@type": "Question",
                "name": "Este seletor de cores é gratuito?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sim, ImageColorPickerAI é uma ferramenta online 100% gratuita com uploads e gerações de paletas ilimitadas."
                }
            },
            {
                "@type": "Question",
                "name": "Posso extrair cores para arte japonesa e chinesa?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutamente. Nos especializamos em mapear cores digitais para paletas tradicionais, incluindo sistemas de cores japoneses da era Heian e chineses da era Ming."
                }
            }
        ]
    };

    const webSiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "ImageColorPickerAI",
        "alternateName": "Seletor de Cores de Imagem IA",
        "url": "https://imagecolorpickerai.com/pt",
        "description": "Seletor de cores de imagem online gratuito com enciclopédia de cores tradicionais chinesas e japonesas alimentada por IA",
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://imagecolorpickerai.com/pt/search?q={search_term_string}"
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
            <HomeView locale="pt" />
        </>
    );
}
