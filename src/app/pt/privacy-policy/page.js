import LegalView from '../../../components/LegalView';

export const metadata = {
    title: 'Política de Privacidade - ImageColorPickerAI',
    description: 'Nosso compromisso com a sua privacidade. Saiba como lidamos com seus dados e imagens ao usar o ImageColorPickerAI.',
    alternates: {
        canonical: '/pt/privacy-policy',
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
    return <LegalView type="privacy" locale="pt" />;
}
