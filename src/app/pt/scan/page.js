import PersonalColorAnalyst from '../../../components/PersonalColorAnalyst';
import JsonLd from '../../../components/JsonLd';

export const metadata = {
    title: 'Scan de Estilo de Cor - Encontre sua Paleta Tradicional | ImageColorPickerAI',
    description: 'Carregue qualquer imagem para descobrir sua paleta de cores tradicional personalizada. Grátis, sem registro.',
    alternates: {
        canonical: 'https://imagecolorpickerai.com/pt/scan',
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
        "name": "Como usar o Scan de Estilo de Cor",
        "description": "Aprenda a transformar qualquer imagem em uma paleta de cores tradicional personalizada",
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
                "name": "Qualquer imagem (foto, arte ou captura de tela)"
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
                "name": "Carregue uma imagem",
                "text": "Escolha uma imagem clara com boa iluminação e fundo neutro para a melhor extração de cores.",
                "image": "https://imagecolorpickerai.com/images/step1-upload.png",
                "url": "https://imagecolorpickerai.com/pt/scan#step1"
            },
            {
                "@type": "HowToStep",
                "name": "Lemos suas cores",
                "text": "Extraímos as cores dominantes e a paleta da sua imagem para criar sua harmonia de cores pessoal.",
                "image": "https://imagecolorpickerai.com/images/step2-analyze.png",
                "url": "https://imagecolorpickerai.com/pt/scan#step2"
            },
            {
                "@type": "HowToStep",
                "name": "Obtenha sua paleta de cores",
                "text": "Receba sua paleta de cores tradicional personalizada baseada em milhares de anos de teoria e estética de cores.",
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
