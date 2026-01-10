import PersonalColorAnalyst from '../../../components/PersonalColorAnalyst';
import JsonLd from '../../../components/JsonLd';

export const metadata = {
    title: 'Análise Cor IA - Encontre Aura Tradicional | ImageColorPickerAI',
    description: 'Análise de cor pessoal profissional com IA. Carregue uma selfie para descobrir sua combinação única de aura de cor tradicional. 100% grátis e sem registro.',
    alternates: {
        canonical: '/pt/scan',
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
        "name": "Como usar o Analista de Cores Pessoal IA",
        "description": "Saiba como descobrir sua Aura de Cor Tradicional Chinesa única usando análise facial de IA",
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
                "name": "Tire ou carregue uma foto clara",
                "text": "Selecione uma foto clara do seu rosto. Boa iluminação e fundo neutro funcionam melhor para uma análise precisa de cores.",
                "image": "https://imagecolorpickerai.com/images/step1-upload.png",
                "url": "https://imagecolorpickerai.com/pt/scan#step1"
            },
            {
                "@type": "HowToStep",
                "name": "A IA analisa seus recursos",
                "text": "Nossa IA analisa seus recursos faciais, tons de pele e coloração geral para determinar sua harmonia de cores pessoal.",
                "image": "https://imagecolorpickerai.com/images/step2-analyze.png",
                "url": "https://imagecolorpickerai.com/pt/scan#step2"
            },
            {
                "@type": "HowToStep",
                "name": "Obtenha sua paleta de cores",
                "text": "Receba sua correspondência personalizada de Aura de Cor Tradicional Chinesa baseada em milhares de anos de teoria e estética de cores.",
                "image": "https://imagecolorpickerai.com/images/step3-result.png",
                "url": "https://imagecolorpickerai.com/pt/scan#step3"
            }
        ]
    };

    return (
        <main className="min-h-screen bg-neutral-50 flex flex-col items-center py-12 px-4 font-sans">
            <JsonLd data={howToSchema} />
            <PersonalColorAnalyst locale="pt" />
        </main>
    );
}
