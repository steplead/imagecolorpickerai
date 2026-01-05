import PersonalColorAnalyst from '../../../components/PersonalColorAnalyst';
import JsonLd from '../../../components/JsonLd';

export const metadata = {
    title: 'AI 个人色彩分析 - 寻找您的传统色彩图谱 | ImageColorPickerAI',
    description: '专业的 AI 个人色彩分析。上传自拍，探索您独特的中国、日本传统色彩图谱匹配。100% 免费，无需注册。',
    alternates: {
        canonical: '/zh/scan',
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
    return (
        <main className="min-h-screen bg-neutral-50 flex flex-col items-center py-12 px-4 font-sans">
            <PersonalColorAnalyst locale="zh" />
        </main>
    );
}
