import PersonalColorAnalyst from '../../../components/PersonalColorAnalyst';
import JsonLd from '../../../components/JsonLd';

export const metadata = {
    title: 'AIパーソナルカラー分析 - あなたの伝統的なオーラを見つける | ImageColorPickerAI',
    description: 'プロフェッショナルなAIパーソナルカラー分析。自撮りをアップロードして、あなただけの伝統色オーラを見つけましょう。100%無料、登録不要。',
    alternates: {
        canonical: 'https://imagecolorpickerai.com/ja/scan',
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
        "name": "AIパーソナルカラーアンティストの使い方",
        "description": "AI顔色分析を使用して独自の伝統的な中国の色オーラを見つける方法を学ぶ",
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
                "name": "鮮明な写真を撮影またはアップロード",
                "text": "鮮明な顔の写真を選択してください。良好な照明とニュートラルな背景が、正確な色分析に最適です。",
                "image": "https://imagecolorpickerai.com/images/step1-upload.png",
                "url": "https://imagecolorpickerai.com/ja/scan#step1"
            },
            {
                "@type": "HowToStep",
                "name": "AIが特徴を分析",
                "text": "AIが顔の特徴、肌のアンダートーン、全体的な色彩を分析して、個人の色彩調和を判断します。",
                "image": "https://imagecolorpickerai.com/images/step2-analyze.png",
                "url": "https://imagecolorpickerai.com/ja/scan#step2"
            },
            {
                "@type": "HowToStep",
                "name": "カラーパレットを取得",
                "text": "数千年の色理論と美学に基づいて、個人向けの伝統的な中国の色オーラマッチを受け取ります。",
                "image": "https://imagecolorpickerai.com/images/step3-result.png",
                "url": "https://imagecolorpickerai.com/ja/scan#step3"
            }
        ]
    };

    return (
        <main className="min-h-screen bg-neutral-50 flex flex-col items-center py-12 px-4 font-sans">
            <JsonLd data={howToSchema} />
            <PersonalColorAnalyst locale="ja" />
        </main>
    );
}
