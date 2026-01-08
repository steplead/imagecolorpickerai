import PersonalColorAnalyst from '../../../components/PersonalColorAnalyst';
import JsonLd from '../../../components/JsonLd';

export const metadata = {
    title: 'Analyse de Couleur Personnelle par IA - Trouvez votre Aura de Couleur Traditionnelle | ImageColorPickerAI',
    description: 'Analyse de couleur personnelle professionnelle par IA. Téléchargez un selfie pour découvrir votre aura de couleur traditionnelle unique. 100% gratuit et sans inscription.',
    alternates: {
        canonical: '/fr/scan',
        languages: {
            'en': '/scan',
            'zh-Hans': '/zh/scan',
            'ja': '/ja/scan',
            'es': '/es/scan',
            'fr': '/fr/scan',
            'de': '/de/scan',
            'pt': '/pt/scan',
            'x-default': '/scan',
        },
    },
};

export default function Page() {
    const howToSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "Comment utiliser le Analyste de Couleur Personnel IA",
        "description": "Découvrez comment trouver votre aura de couleur traditionnelle chinoise unique en utilisant l'analyse faciale par IA",
        "image": "https://imagecolorpickerai.com/images/how-to-scan.png",
        "totalTime": "PT2M",
        "estimatedCost": {
            "@type": "MonetaryAmount",
            "currency": "USD",
            "value": "0"
        },
        "supply": [
            {
                "@type": "HowToSupply",
                "name": "Digital photo of your face"
            }
        ],
        "tool": [
            {
                "@type": "HowToTool",
                "name": "Computer or smartphone with camera"
            }
        ],
        "step": [
            {
                "@type": "HowToStep",
                "name": "Prendre ou télécharger une photo claire",
                "text": "Sélectionnez une photo claire de votre visage. Un bon éclairage et un fond neutre fonctionnent le mieux pour une analyse précise des couleurs.",
                "image": "https://imagecolorpickerai.com/images/step1-upload.png",
                "url": "https://imagecolorpickerai.com/fr/scan#step1"
            },
            {
                "@type": "HowToStep",
                "name": "L'IA analyse vos caractéristiques",
                "text": "Notre IA analyse vos traits faciaux, vos tons de peau et votre coloration globale pour déterminer votre harmonie de couleurs personnelle.",
                "image": "https://imagecolorpickerai.com/images/step2-analyze.png",
                "url": "https://imagecolorpickerai.com/fr/scan#step2"
            },
            {
                "@type": "HowToStep",
                "name": "Obtenez votre palette de couleurs",
                "text": "Recevez votre correspondance d'aura de couleur traditionnelle chinoise personnalisée basée sur des milliers d'années de théorie et d'esthétique des couleurs.",
                "image": "https://imagecolorpickerai.com/images/step3-result.png",
                "url": "https://imagecolorpickerai.com/fr/scan#step3"
            }
        ]
    };

    return (
        <main className="min-h-screen bg-neutral-50 flex flex-col items-center py-12 px-4 font-sans">
            <JsonLd data={howToSchema} />
            <PersonalColorAnalyst locale="fr" />
        </main>
    );
}
