import PersonalColorAnalyst from '../../../components/PersonalColorAnalyst';
import JsonLd from '../../../components/JsonLd';

export const metadata = {
    title: 'Scan de Style de Couleur - Trouvez votre Palette Traditionnelle | ImageColorPickerAI',
    description: 'Importez une image pour découvrir votre palette de couleurs traditionnelle personnalisée. Gratuit, sans inscription.',
    alternates: {
        canonical: 'https://imagecolorpickerai.com/fr/scan',
        languages: {
            'en': 'https://imagecolorpickerai.com/scan',
            'zh-Hans': 'https://imagecolorpickerai.com/zh/scan',
            'ja': 'https://imagecolorpickerai.com/ja/scan',
            'es': 'https://imagecolorpickerai.com/es/scan',
            'fr': 'https://imagecolorpickerai.com/fr/scan',
            'de': 'https://imagecolorpickerai.com/de/scan',
            'pt': 'https://imagecolorpickerai.com/pt/scan',
            'x-default': 'https://imagecolorpickerai.com/scan',
        },
    },
};

export default function Page() {
    const howToSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "Comment utiliser le Scan de Style de Couleur",
        "description": "Découvrez comment transformer n'importe quelle image en palette de couleurs traditionnelle personnalisée",
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
                "name": "Toute image (photo, illustration ou capture d'écran)"
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
                "name": "Importez une image",
                "text": "Choisissez une image claire avec un bon éclairage et un fond neutre pour la meilleure extraction de couleurs.",
                "image": "https://imagecolorpickerai.com/images/step1-upload.png",
                "url": "https://imagecolorpickerai.com/fr/scan#step1"
            },
            {
                "@type": "HowToStep",
                "name": "Nous lisons vos couleurs",
                "text": "Nous extrayons les couleurs dominantes et la palette de votre image pour créer votre harmonie de couleurs personnelle.",
                "image": "https://imagecolorpickerai.com/images/step2-analyze.png",
                "url": "https://imagecolorpickerai.com/fr/scan#step2"
            },
            {
                "@type": "HowToStep",
                "name": "Obtenez votre palette de couleurs",
                "text": "Recevez votre palette de couleurs traditionnelle personnalisée basée sur des milliers d'années de théorie et d'esthétique des couleurs.",
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
