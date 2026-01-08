import ContactView from '../../../components/ContactView';

export const metadata = {
    title: 'お問い合わせ - フィードバックとサポート | ImageColorPickerAI',
    description: 'ImageColorPickerAIチームにお問い合わせください。バグの報告、機能の提案、コラボレーションのリクエストを受け付けています。',
    alternates: {
        canonical: '/ja/contact',
        languages: {
            'en': '/contact',
            'zh-Hans': '/zh/contact',
            'ja': '/ja/contact',
            'es': '/es/contact',
            'fr': '/fr/contact',
            'de': '/de/contact',
            'pt': '/pt/contact',
            'x-default': '/contact',
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
