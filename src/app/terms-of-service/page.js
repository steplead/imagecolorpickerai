import LegalView from '../../components/LegalView';

export const metadata = {
    title: 'Terms of Service - ImageColorPickerAI',
    description: 'The terms and conditions for using ImageColorPickerAI. Professional color extraction and AI generation services.',
    alternates: {
        canonical: 'https://imagecolorpickerai.com/terms-of-service',
        languages: {
            'en': 'https://imagecolorpickerai.com/terms-of-service',
            'zh-Hans': 'https://imagecolorpickerai.com/zh/terms-of-service',
            'ja': 'https://imagecolorpickerai.com/ja/terms-of-service',
            'es': 'https://imagecolorpickerai.com/es/terms-of-service',
            'fr': 'https://imagecolorpickerai.com/fr/terms-of-service',
            'de': 'https://imagecolorpickerai.com/de/terms-of-service',
            'pt': 'https://imagecolorpickerai.com/pt/terms-of-service',
            'x-default': 'https://imagecolorpickerai.com/terms-of-service',
        },
    },
};

export default function Page() {
    const legalSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Terms of Service",
        "description": "Terms of Service for ImageColorPickerAI - Rules and guidelines for using our platform",
        "url": "https://imagecolorpickerai.com/terms-of-service",
        "lastReviewed": new Date().toISOString().split('T')[0],
        "reviewedBy": {
            "@type": "Organization",
            "name": "ImageColorPickerAI",
            "url": "https://imagecolorpickerai.com"
        },
        "about": {
            "@type": "DigitalDocument",
            "name": "Terms of Service Document",
            "text": "Terms and conditions for using ImageColorPickerAI services"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(legalSchema) }}
            />
            <LegalView type="terms" locale="en" />
        </>
    );
}
