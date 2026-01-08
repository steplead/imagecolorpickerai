import LegalView from '../../components/LegalView';

export const metadata = {
    title: 'Privacy Policy - ImageColorPickerAI | Trust & Data Safety',
    description: 'Our commitment to your privacy. Learn how we handle your data and images while using ImageColorPickerAI.',
    alternates: {
        canonical: '/privacy-policy',
        languages: {
            'en': '/privacy-policy',
            'zh-Hans': '/zh/privacy-policy',
            'ja': '/ja/privacy-policy',
            'es': '/es/privacy-policy',
            'fr': '/fr/privacy-policy',
            'de': '/de/privacy-policy',
            'pt': '/pt/privacy-policy',
            'x-default': '/privacy-policy',
        },
    },
};

export default function Page() {
    return <LegalView type="privacy" locale="en" />;
}
