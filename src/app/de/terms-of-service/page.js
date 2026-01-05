import LegalView from '../../../components/LegalView';

export const metadata = {
    title: 'Nutzungsbedingungen - ImageColorPickerAI',
    description: 'Die Bedingungen für die Nutzung von ImageColorPickerAI. Professionelle Farbauswahl und KI-Generierungsdienste.',
    alternates: {
        canonical: '/de/terms-of-service',
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
    return <LegalView type="terms" locale="de" />;
}
