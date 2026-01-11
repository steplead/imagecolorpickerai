import HomeView from '../../components/HomeView';

export const metadata = {
    title: 'Sélecteur de Couleur d\'Image - Obtenir le Code Hex et Encyclopédie des Couleurs Traditionnelles | ImageColorPickerAI',
    description: 'Sélecteur de couleur d\'image en ligne gratuit. Extrayez les codes HEX, RGB, CMYK et découvrez instantanément les significations des couleurs traditionnelles chinoises et japonaises. Propulsé par l\'IA et sans inscription.',
    alternates: {
        canonical: 'https://imagecolorpickerai.com/fr',
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
                "name": "Comment extraire les couleurs d'une image ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Téléchargez simplement votre image JPG ou PNG dans notre outil. Utilisez votre souris pour survoler n'importe quelle zone de l'image et le code hexadécimal s'affichera instantanément."
                }
            },
            {
                "@type": "Question",
                "name": "Ce sélecteur de couleur est-il gratuit ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, ImageColorPickerAI est un outil en ligne 100% gratuit avec des téléchargements et des générations de palettes illimités."
                }
            },
            {
                "@type": "Question",
                "name": "Puis-je extraire les couleurs pour l'art japonais et chinois ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolument. Nous nous spécialisons dans le mappage des couleurs numériques vers des palettes traditionnelles, y compris les systèmes de couleur japonais de l'ère Heian et chinois de l'ère Ming."
                }
            }
        ]
    };

    const webSiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "ImageColorPickerAI",
        "alternateName": "Sélecteur de Couleur d'Image IA",
        "url": "https://imagecolorpickerai.com/fr",
        "description": "Sélecteur de couleur d'image en ligne gratuit avec encyclopédie des couleurs traditionnelles chinoises et japonaises propulsée par l'IA",
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://imagecolorpickerai.com/fr/search?q={search_term_string}"
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
            <HomeView locale="fr" />
        </>
    );
}
