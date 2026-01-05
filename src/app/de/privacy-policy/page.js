import LegalView from '../../../components/LegalView';

export const metadata = {
    title: 'Datenschutzbestimmungen - ImageColorPickerAI',
    description: 'Unser Engagement für Ihren Datenschutz. Erfahren Sie, wie wir mit Ihren Daten und Bildern umgehen, während Sie ImageColorPickerAI nutzen.',
    alternates: {
        canonical: '/de/privacy-policy',
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
    return <LegalView type="privacy" locale="de" />;
}
