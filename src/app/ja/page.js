import HomeView from '../../components/HomeView';

export const metadata = {
    title: '画像から色を抽出 - 16進数コード提取と伝統色の百科事典 | ImageColorPickerAI',
    description: '無料のオンライン画像カラーピッカー。HEX、RGB、CMYKコードを抽出し、中国と日本の伝統色の意味を即座に発見。AI搭載、登録不要。',
    alternates: {
        canonical: '/ja',
        languages: {
            'en': '/',
            'zh-Hans': '/zh',
            'ja': '/ja',
            'es': '/es',
            'fr': '/fr',
            'de': '/de',
            'pt': '/pt',
            'x-default': '/',
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

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <HomeView locale="ja" />
        </>
    );
}
