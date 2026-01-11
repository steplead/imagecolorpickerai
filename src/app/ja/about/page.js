import AboutView from '../../../components/AboutView';

export const metadata = {
    title: 'ImageColorPickerAIについて - 伝統色の百科事典 | ImageColorPickerAI',
    description: 'ImageColorPickerAIの背後にある物語。AI技術を使用して、古代の色彩文化と現代を橋渡しします。',
    alternates: {
        canonical: 'https://imagecolorpickerai.com/ja/about',
        languages: {
            'en': 'https://imagecolorpickerai.com/about',
            'zh-Hans': 'https://imagecolorpickerai.com/zh/about',
            'ja': 'https://imagecolorpickerai.com/ja/about',
            'es': 'https://imagecolorpickerai.com/es/about',
            'fr': 'https://imagecolorpickerai.com/fr/about',
            'de': 'https://imagecolorpickerai.com/de/about',
            'pt': 'https://imagecolorpickerai.com/pt/about',
            'x-default': 'https://imagecolorpickerai.com/about',
        },
    },
};

export default function Page() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "ImageColorPickerAI",
        "url": "https://imagecolorpickerai.com",
        "logo": "https://imagecolorpickerai.com/icon.png",
        "description": "AI駆動の画像カラーピッカーと伝統的な色の百科事典。現代のAI技術を使用して、古代の中国と日本の色の文化をつなぎます。",
        "sameAs": [
            "https://github.com/steplead/imagecolorpickerai",
            "https://www.pinterest.com/johnlauvip/traditional-chinese-art-wallpapers/"
        ],
        "founder": {
            "@type": "Person",
            "name": "ImageColorPickerAI Team"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <AboutView locale="ja" />
        </>
    );
}
