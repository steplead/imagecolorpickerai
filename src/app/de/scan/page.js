import PersonalColorAnalyst from '../../../components/PersonalColorAnalyst';
import JsonLd from '../../../components/JsonLd';

export const metadata = {
    title: 'KI-Farbtypberatung - Finde deine traditionelle Farbaura | ImageColorPickerAI',
    description: 'Professionelle KI-Farbtypberatung. Lade ein Selfie hoch, um deine einzigartige traditionelle Farbaura zu entdecken. 100% kostenlos und ohne Anmeldung.',
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
        "name": "So verwenden Sie den AI-Personenfarbanalysten",
        "description": "Erfahren Sie, wie Sie Ihre einzigartige traditionelle chinesische Color Aura mithilfe der KI-Gesichtsanalyse entdecken",
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
                "name": "Machen oder laden Sie ein klares Foto hoch",
                "text": "Wählen Sie ein klares Foto Ihres Gesichts. Gute Beleuchtung und ein neutraler Hintergrund sind am besten für eine genaue Farbanalyse.",
                "image": "https://imagecolorpickerai.com/images/step1-upload.png",
                "url": "https://imagecolorpickerai.com/de/scan#step1"
            },
            {
                "@type": "HowToStep",
                "name": "Die KI analysiert Ihre Merkmale",
                "text": "Unsere KI analysiert Ihre Gesichtszüge, Hautuntertöne und Gesamtcolorierung, um Ihre persönliche Farbharmonie zu bestimmen.",
                "image": "https://imagecolorpickerai.com/images/step2-analyze.png",
                "url": "https://imagecolorpickerai.com/de/scan#step2"
            },
            {
                "@type": "HowToStep",
                "name": "Erhalten Sie Ihre Farbpalette",
                "text": "Erhalten Sie Ihre personalisierte Übereinstimmung der traditionellen chinesischen Color Aura basierend auf tausenden Jahren von Farbtheorie und Ästhetik.",
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
