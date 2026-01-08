import LegalView from '../../components/LegalView';

export const metadata = {
    title: 'Terms of Service - ImageColorPickerAI',
    description: 'The terms and conditions for using ImageColorPickerAI. Professional color extraction and AI generation services.',
    alternates: {
        canonical: '/terms-of-service',
        languages: {
            'en': '/terms-of-service',
            'zh-Hans': '/zh/terms-of-service',
            'ja': '/ja/terms-of-service',
            'es': '/es/terms-of-service',
            'fr': '/fr/terms-of-service',
            'de': '/de/terms-of-service',
            'pt': '/pt/terms-of-service',
            'x-default': '/terms-of-service',
        },
    },
};

export default function Page() {
    return <LegalView type="terms" locale="en" />;
}
