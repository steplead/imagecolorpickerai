import HomeView from '../../components/HomeView';

export const metadata = {
    title: 'AI画像カラーピッカー - 画像からHEXカラーコードを抽出',
    description: '無料のオンライン画像カラーピッカー。HEX、RGB、CMYKコードを抽出し、中国と日本の伝統色の意味を即座に発見。AI搭載、登録不要。',
    keywords: '画像カラーピッカー, 16進数カラーピッカー, 色抽出器, RGBからHEX, CMYK変換, 中国の伝統色, 日本の伝統色, カラーパレットジェネレーター, オンラインカラーツール',
    alternates: {
        canonical: 'https://imagecolorpickerai.com/ja',
        languages: {
            'en': 'https://imagecolorpickerai.com/',
            'zh-Hans': 'https://imagecolorpickerai.com/zh',
            'ja': 'https://imagecolorpickerai.com/ja',
            'es': 'https://imagecolorpickerai.com/es',
            'fr': 'https://imagecolorpickerai.com/fr',
            'de': 'https://imagecolorpickerai.com/de',
            'pt': 'https://imagecolorpickerai.com/pt',
            'x-default': 'https://imagecolorpickerai.com/',
        },
    },
};

export default function Page() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "画像から色を抽出するには？",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "JPGまたはPNG画像をツールにアップロードするだけです。マウスを画像の任意の領域に合わせると、16進コードが即座に表示されます。"
                }
            },
            {
                "@type": "Question",
                "name": "このカラーピッカーは無料ですか？",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "はい、ImageColorPickerAIは無制限のアップロードとパレット生成を備えた100%無料のオンラインツールです。"
                }
            },
            {
                "@type": "Question",
                "name": "日本と中国の芸術の色を抽出できますか？",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "もちろんです。平安時代の日本や明代の中国の色彩システムなど、デジタルカラーを伝統的なパレットにマッピングすることを専門としています。"
                }
            }
        ]
    };

    const webSiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "ImageColorPickerAI",
        "alternateName": "画像カラーピッカーAI",
        "url": "https://imagecolorpickerai.com/ja",
        "description": "無料のオンライン画像カラーピッカー、AI搭載の中国と日本の伝統色百科事典",
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://imagecolorpickerai.com/ja/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
            />
            <HomeView locale="ja" />
        </>
    );
}
