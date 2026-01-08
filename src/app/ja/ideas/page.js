import IdeasHub from '../../../components/IdeasHub';

export const metadata = {
    title: '色のインスピレーションとパレットのアイデア - 日本の伝統デザインガイド | ImageColorPickerAI',
    description: '次のプロジェクトのための厳選された色のインスピレーション。結婚式、ブランディング、インテリアデザインのための伝統的な中国・日本のパレットを探索。',
    alternates: {
        canonical: '/ja/ideas',
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
