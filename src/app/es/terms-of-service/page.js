import LegalView from '../../../components/LegalView';

export const metadata = {
    title: 'Términos de Servicio - ImageColorPickerAI',
    description: 'Los términos y condiciones para usar ImageColorPickerAI. Servicios profesionales de extracción de color y generación por IA.',
    alternates: {
        canonical: '/es/terms-of-service',
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
    return <LegalView type="terms" locale="es" />;
}
