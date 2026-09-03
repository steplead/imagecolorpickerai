import PersonalColorAnalyst from '../../../components/PersonalColorAnalyst';
import JsonLd from '../../../components/JsonLd';

export const metadata = {
    title: 'Color Style Scan - Finde deine traditionelle Farbpalette | ImageColorPickerAI',
    description: 'Lade ein beliebiges Bild hoch, um deine persönliche traditionelle Farbpalette zu entdecken. Kostenlos, ohne Anmeldung.',
    alternates: {
        canonical: 'https://imagecolorpickerai.com/de/scan',
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
        "name": "So verwendest du den Color Style Scan",
        "description": "Erfahre, wie du jedes Bild in eine personalisierte traditionelle Farbpalette verwandelst",
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
                "name": "Beliebiges Bild (Foto, Kunstwerk oder Screenshot)"
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
                "name": "Lade ein Bild hoch",
                "text": "Wähle ein klares Bild mit guter Beleuchtung und neutralem Hintergrund für die beste Farbextraktion.",
                "image": "https://imagecolorpickerai.com/images/step1-upload.png",
                "url": "https://imagecolorpickerai.com/de/scan#step1"
            },
            {
                "@type": "HowToStep",
                "name": "Wir lesen deine Farben",
                "text": "Wir extrahieren die dominanten Farben und die Palette deines Bildes, um deine persönliche Farbharmonie zu erstellen.",
                "image": "https://imagecolorpickerai.com/images/step2-analyze.png",
                "url": "https://imagecolorpickerai.com/de/scan#step2"
            },
            {
                "@type": "HowToStep",
                "name": "Erhalten Sie Ihre Farbpalette",
                "text": "Erhalte deine personalisierte traditionelle Farbpalette basierend auf Tausenden von Jahren Farbtheorie und Ästhetik.",
                "image": "https://imagecolorpickerai.com/images/step3-result.png",
                "url": "https://imagecolorpickerai.com/de/scan#step3"
            }
        ]
    };

    return (
        <main className="min-h-screen bg-neutral-50 flex flex-col items-center py-12 px-4 font-sans">
            <JsonLd data={howToSchema} />
            <PersonalColorAnalyst locale="de" />
        </main>
    );
}
