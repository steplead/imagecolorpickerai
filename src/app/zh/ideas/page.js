import IdeasHub from '../../../components/IdeasHub';

export const metadata = {
    title: '配色灵感与方案创意 - 传统中国设计指南 | ImageColorPickerAI',
    description: '为您的下一个项目精心挑选的配方案灵感。探索专为婚礼、品牌和室内设计打造的中国传统色。专业级设计指南。',
    alternates: {
        canonical: 'https://imagecolorpickerai.com/zh/ideas',
        languages: {
            'en': 'https://imagecolorpickerai.com/ideas',
            'zh-Hans': 'https://imagecolorpickerai.com/zh/ideas',
            'ja': 'https://imagecolorpickerai.com/ja/ideas',
            'es': 'https://imagecolorpickerai.com/es/ideas',
            'fr': 'https://imagecolorpickerai.com/fr/ideas',
            'de': 'https://imagecolorpickerai.com/de/ideas',
            'pt': 'https://imagecolorpickerai.com/pt/ideas',
            'x-default': 'https://imagecolorpickerai.com/ideas',
        },
    },
};

export default function Page() {
    const collectionPageSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "配色灵感与方案创意",
        "description": "为您的下一个项目精心挑选的配案例灵感。探索专为婚礼、品牌和室内设计打造的中国传统色。",
        "url": "https://imagecolorpickerai.com/zh/ideas"
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
            />
            <IdeasHub locale="zh" />
        </>
    );
}
