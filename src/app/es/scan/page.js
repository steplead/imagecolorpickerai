import PersonalColorAnalyst from '../../../components/PersonalColorAnalyst';
import JsonLd from '../../../components/JsonLd';

export const metadata = {
    title: 'Escaneo de Estilo de Color - Encuentra tu Paleta Tradicional | ImageColorPickerAI',
    description: 'Sube cualquier imagen para descubrir tu paleta de colores tradicional personalizada. Gratis, sin registro.',
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
        "name": "Cómo usar el Escaneo de Estilo de Color",
        "description": "Aprende a convertir cualquier imagen en una paleta de colores tradicional personalizada",
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
                "name": "Cualquier imagen (foto, ilustración o captura de pantalla)"
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
                "name": "Sube una imagen",
                "text": "Elige una imagen clara con buena iluminación y fondo neutro para la mejor extracción de color.",
                "image": "https://imagecolorpickerai.com/images/step1-upload.png",
                "url": "https://imagecolorpickerai.com/es/scan#step1"
            },
            {
                "@type": "HowToStep",
                "name": "Leemos tus colores",
                "text": "Extraemos los colores dominantes y la paleta de tu imagen para crear tu armonía de color personal.",
                "image": "https://imagecolorpickerai.com/images/step2-analyze.png",
                "url": "https://imagecolorpickerai.com/es/scan#step2"
            },
            {
                "@type": "HowToStep",
                "name": "Obtén tu paleta de colores",
                "text": "Recibe tu paleta de colores tradicional personalizada basada en miles de años de teoría y estética del color.",
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
