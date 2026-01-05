import LegalView from '../../../components/LegalView';

export const metadata = {
    title: 'Política de Privacidad - ImageColorPickerAI',
    description: 'Nuestro compromiso con su privacidad. Conozca cómo manejamos sus datos e imágenes al usar ImageColorPickerAI.',
    alternates: {
        canonical: '/es/privacy-policy',
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
    return <LegalView type="privacy" locale="es" />;
}
