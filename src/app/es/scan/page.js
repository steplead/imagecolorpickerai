import PersonalColorAnalyst from '../../../components/PersonalColorAnalyst';
import JsonLd from '../../../components/JsonLd';

export const metadata = {
    title: 'Análisis Color IA - Encuentra Aura Tradicional | ImageColorPickerAI',
    description: 'Análisis de color personal profesional por IA. Sube un selfie para descubrir tu coincidencia única de aura de color tradicional. 100% gratis y sin registro.',
    alternates: {
        canonical: 'https://imagecolorpickerai.com/es/scan',
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
        "name": "Cómo usar el Analista de Color Personal AI",
        "description": "Aprende a descubrir tu aura de color tradicional china única usando el análisis facial de IA",
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
                "name": "Toma o sube una foto clara",
                "text": "Selecciona una foto clara de tu cara. La buena iluminación y un fondo neutro funcionan mejor para un análisis preciso del color.",
                "image": "https://imagecolorpickerai.com/images/step1-upload.png",
                "url": "https://imagecolorpickerai.com/es/scan#step1"
            },
            {
                "@type": "HowToStep",
                "name": "La IA analiza tus características",
                "text": "Nuestra IA analiza tus características faciales, tonos de piel y coloración general para determinar tu armonía de color personal.",
                "image": "https://imagecolorpickerai.com/images/step2-analyze.png",
                "url": "https://imagecolorpickerai.com/es/scan#step2"
            },
            {
                "@type": "HowToStep",
                "name": "Obtén tu paleta de colores",
                "text": "Recibe tu coincidencia de aura de color tradicional china personalizada basada en miles de años de teoría y estética del color.",
                "image": "https://imagecolorpickerai.com/images/step3-result.png",
                "url": "https://imagecolorpickerai.com/es/scan#step3"
            }
        ]
    };

    return (
        <main className="min-h-screen bg-neutral-50 flex flex-col items-center py-12 px-4 font-sans">
            <JsonLd data={howToSchema} />
            <PersonalColorAnalyst locale="es" />
        </main>
    );
}
