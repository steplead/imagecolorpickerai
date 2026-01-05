import IdeasHub from '../../../components/IdeasHub';

export const metadata = {
    title: '配色灵感与方案创意 - 传统中国设计指南 | ImageColorPickerAI',
    description: '为您的下一个项目精心挑选的配方案灵感。探索专为婚礼、品牌和室内设计打造的中国传统色。专业级设计指南。',
    alternates: {
        canonical: '/zh/ideas',
        languages: {
            'en': '/ideas',
            'zh-Hans': '/zh/ideas',
            'ja': '/ja/ideas',
            'es': '/es/ideas',
            'fr': '/fr/ideas',
            'de': '/de/ideas',
            'pt': '/pt/ideas',
            'x-default': '/ideas',
        },
    },
};

export default function Page() {
    return <IdeasHub locale="zh" />;
}
