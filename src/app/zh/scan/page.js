import PersonalColorAnalyst from '../../../components/PersonalColorAnalyst';
import JsonLd from '../../../components/JsonLd';

export const metadata = {
    title: '色彩风格扫描 - 寻找您的传统色彩图谱 | ImageColorPickerAI',
    description: '上传任意图片，发现您的专属传统色彩图谱。免费使用，无需注册。',
    alternates: {
        canonical: 'https://imagecolorpickerai.com/zh/scan',
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
        "name": "如何使用色彩风格扫描",
        "description": "了解如何将任意图片转化为专属的传统色彩图谱",
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
                "name": "任意图片（照片、画作或截图）",
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
                "name": "上传一张图片",
                "text": "选择一张光线充足、背景中性的清晰图片，以获得最佳的取色效果。",
                "image": "https://imagecolorpickerai.com/images/step1-upload.png",
                "url": "https://imagecolorpickerai.com/zh/scan#step1"
            },
            {
                "@type": "HowToStep",
                "name": "我们分析您的色彩",
                "text": "我们从您的图片中提取主色调与配色，构建您的个人色彩和谐。",
                "image": "https://imagecolorpickerai.com/images/step2-analyze.png",
                "url": "https://imagecolorpickerai.com/zh/scan#step2"
            },
            {
                "@type": "HowToStep",
                "name": "获取您的色彩调色板",
                "text": "根据数千年的色彩理论与美学，为您生成专属的传统色彩图谱。",
                "image": "https://imagecolorpickerai.com/images/step3-result.png",
                "url": "https://imagecolorpickerai.com/zh/scan#step3"
            }
        ]
    };

    return (
        <main className="min-h-screen bg-neutral-50 flex flex-col items-center py-12 px-4 font-sans">
            <JsonLd data={howToSchema} />
            <PersonalColorAnalyst locale="zh" />
        </main>
    );
}
