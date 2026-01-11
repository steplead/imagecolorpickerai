import LegalView from '../../components/LegalView';

export const metadata = {
    title: 'Privacy Policy - ImageColorPickerAI | Trust & Data Safety',
    description: 'Our commitment to your privacy. Learn how we handle your data and images while using ImageColorPickerAI.',
    alternates: {
        canonical: 'https://imagecolorpickerai.com/privacy-policy',
        languages: {
            'en': 'https://imagecolorpickerai.com/privacy-policy',
            'zh-Hans': 'https://imagecolorpickerai.com/zh/privacy-policy',
            'ja': 'https://imagecolorpickerai.com/ja/privacy-policy',
            'es': 'https://imagecolorpickerai.com/es/privacy-policy',
            'fr': 'https://imagecolorpickerai.com/fr/privacy-policy',
            'de': 'https://imagecolorpickerai.com/de/privacy-policy',
            'pt': 'https://imagecolorpickerai.com/pt/privacy-policy',
            'x-default': 'https://imagecolorpickerai.com/privacy-policy',
        },
    },
};

export default function Page() {
    const legalSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Privacy Policy",
        "description": "Privacy Policy for ImageColorPickerAI - Learn how we protect your data and privacy",
        "url": "https://imagecolorpickerai.com/privacy-policy",
        "lastReviewed": new Date().toISOString().split('T')[0],
        "reviewedBy": {
            "@type": "Organization",
            "name": "ImageColorPickerAI",
            "url": "https://imagecolorpickerai.com"
        },
        "about": {
            "@type": "DigitalDocument",
            "name": "Privacy Policy Document",
            "text": "Our commitment to user privacy and data protection"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(legalSchema) }}
            />
            <LegalView type="privacy" locale="en" />
        </>
    );
}
