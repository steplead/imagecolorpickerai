import HomeView from '../../components/HomeView';

export const metadata = {
    title: 'Seletor de Cores de Imagem - Obter Código Hex e Enciclopédia de Cores Tradicionais | ImageColorPickerAI',
    description: 'Seletor de cores de imagem online gratuito. Extraia códigos HEX, RGB, CMYK e descubra significados de cores tradicionais chinesas e japonesas instantaneamente. Alimentado por IA e sem registro.',
    alternates: {
        canonical: '/pt',
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

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <HomeView locale="pt" />
        </>
    );
}
