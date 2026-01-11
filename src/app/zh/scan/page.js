import PersonalColorAnalyst from '../../../components/PersonalColorAnalyst';
import JsonLd from '../../../components/JsonLd';

export const metadata = {
    title: 'AI 个人色彩分析 - 寻找您的传统色彩图谱 | ImageColorPickerAI',
    description: '专业的 AI 个人色彩分析。上传自拍，探索您独特的中国、日本传统色彩图谱匹配。100% 免费，无需注册。',
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
        "name": "如何使用AI个人色彩分析师",
        "description": "了解如何使用AI驱动的面部分析发现您的独特中国传统色彩图谱",
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
                "name": "拍摄或上传清晰的照片",
                "text": "选择一张清晰的面部照片。良好的照明和中性背景最适合准确的颜色分析。",
                "image": "https://imagecolorpickerai.com/images/step1-upload.png",
                "url": "https://imagecolorpickerai.com/zh/scan#step1"
            },
            {
                "@type": "HowToStep",
                "name": "AI分析您的特征",
                "text": "我们的AI会分析您的面部特征、肤色和整体着色，以确定您的个人色彩和谐。",
                "image": "https://imagecolorpickerai.com/images/step2-analyze.png",
                "url": "https://imagecolorpickerai.com/zh/scan#step2"
            },
            {
                "@type": "HowToStep",
                "name": "获取您的色彩调色板",
                "text": "根据数千年的色彩理论和美学，接收您的个性化中国传统色彩图谱匹配。",
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
