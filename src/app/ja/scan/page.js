import PersonalColorAnalyst from '../../../components/PersonalColorAnalyst';
import JsonLd from '../../../components/JsonLd';

export const metadata = {
    title: 'カラースタイルスキャン - あなたの伝統色を見つける | ImageColorPickerAI',
    description: '任意の画像をアップロードして、あなただけの伝統色パレットを発見。無料で使えて、登録不要。',
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
        "name": "カラースタイルスキャンの使い方",
        "description": "任意の画像をパーソナライズされた伝統色パレットに変える方法を学ぶ",
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
                "name": "任意の画像（写真、イラスト、スクリーンショット）",
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
                "name": "画像をアップロード",
                "text": "明るい照明とニュートラルな背景の鮮明な画像を選ぶと、最も良い色抽出ができます。",
                "image": "https://imagecolorpickerai.com/images/step1-upload.png",
                "url": "https://imagecolorpickerai.com/ja/scan#step1"
            },
            {
                "@type": "HowToStep",
                "name": "色彩を読み取り",
                "text": "画像から主要な色とパレットを抽出し、あなたの個人的な色彩調和を構成します。",
                "image": "https://imagecolorpickerai.com/images/step2-analyze.png",
                "url": "https://imagecolorpickerai.com/ja/scan#step2"
            },
            {
                "@type": "HowToStep",
                "name": "カラーパレットを取得",
                "text": "数千年の色彩理論と美学に基づいて、あなた専用の伝統色パレットを生成します。",
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
