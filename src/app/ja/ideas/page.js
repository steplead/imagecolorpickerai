import IdeasHub from '../../../components/IdeasHub';

export const metadata = {
    title: '色のインスピレーションとパレットのアイデア - 日本の伝統デザインガイド | ImageColorPickerAI',
    description: '次のプロジェクトのための厳選された色のインスピレーション。結婚式、ブランディング、インテリアデザインのための伝統的な中国・日本のパレットを探索。',
    alternates: {
        canonical: 'https://imagecolorpickerai.com/ja/ideas',
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
        "name": "色のインスピレーションとパレットのアイデア",
        "description": "次のプロジェクトのための厳選された色のインスピレーション。結婚式、ブランディング、インテリアデザインのための伝統的な中国・日本のパレットを探索。",
        "url": "https://imagecolorpickerai.com/ja/ideas"
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
            />
            <IdeasHub locale="ja" />
        </>
    );
}
