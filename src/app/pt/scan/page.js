import PersonalColorAnalyst from '../../../components/PersonalColorAnalyst';
import JsonLd from '../../../components/JsonLd';

export const metadata = {
    title: 'Análise de Cor Pessoal com IA - Encontre sua Aura de Cor Tradicional | ImageColorPickerAI',
    description: 'Análise de cor pessoal profissional com IA. Carregue uma selfie para descobrir sua combinação única de aura de cor tradicional. 100% grátis e sem registro.',
    alternates: {
        canonical: '/pt/scan',
        languages: {
            'en': '/scan',
            'zh-Hans': '/zh/scan',
            'ja': '/ja/scan',
            'es': '/es/scan',
            'fr': '/fr/scan',
            'de': '/de/scan',
            'pt': '/pt/scan',
            'x-default': '/scan',
        },
    },
};

export default function Page() {
    return (
        <main className="min-h-screen bg-neutral-50 flex flex-col items-center py-12 px-4 font-sans">
            <PersonalColorAnalyst locale="pt" />
        </main>
    );
}
