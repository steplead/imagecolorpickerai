import LegalView from '../../../components/LegalView';

export const metadata = {
    title: 'Termos de Serviço - ImageColorPickerAI',
    description: 'Os termos e condições para o uso do ImageColorPickerAI. Serviços profissionais de extração de cores e geração por IA.',
    alternates: {
        canonical: '/pt/terms-of-service',
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
    return <LegalView type="terms" locale="pt" />;
}
