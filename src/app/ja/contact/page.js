import ContactView from '../../../components/ContactView';

export const metadata = {
    title: 'お問い合わせ - フィードバックとサポート | ImageColorPickerAI',
    description: 'ImageColorPickerAIチームにお問い合わせください。バグの報告、機能の提案、コラボレーションのリクエストを受け付けています。',
    alternates: {
        canonical: 'https://imagecolorpickerai.com/ja/contact',
        languages: {
            'en': 'https://imagecolorpickerai.com/contact',
            'zh-Hans': 'https://imagecolorpickerai.com/zh/contact',
            'ja': 'https://imagecolorpickerai.com/ja/contact',
            'es': 'https://imagecolorpickerai.com/es/contact',
            'fr': 'https://imagecolorpickerai.com/fr/contact',
            'de': 'https://imagecolorpickerai.com/de/contact',
            'pt': 'https://imagecolorpickerai.com/pt/contact',
            'x-default': 'https://imagecolorpickerai.com/contact',
        },
    },
};

export default function Page() {
    const contactSchema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "mainContentOfPage": {
            "@type": "WebPageElement",
            "name": "ImageColorPickerAIにお問い合わせ"
        },
        "about": {
            "@type": "Organization",
            "name": "ImageColorPickerAI",
            "url": "https://imagecolorpickerai.com"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
            />
            <ContactView locale="ja" />
        </>
    );
}
