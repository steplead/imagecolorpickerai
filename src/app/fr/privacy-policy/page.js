import LegalView from '../../../components/LegalView';

export const metadata = {
    title: 'Politique de Confidentialité - ImageColorPickerAI',
    description: 'Notre engagement envers votre vie privée. Apprenez comment nous traitons vos données et vos images lors de l\'utilisation d\'ImageColorPickerAI.',
    alternates: {
        canonical: '/fr/privacy-policy',
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
    return <LegalView type="privacy" locale="fr" />;
}
