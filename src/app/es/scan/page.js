import PersonalColorAnalyst from '../../../components/PersonalColorAnalyst';
import JsonLd from '../../../components/JsonLd';

export const metadata = {
    title: 'Análisis de Color Personal IA - Encuentra tu Aura de Color Tradicional | ImageColorPickerAI',
    description: 'Análisis de color personal profesional por IA. Sube un selfie para descubrir tu coincidencia única de aura de color tradicional. 100% gratis y sin registro.',
    alternates: {
        canonical: '/es/scan',
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
            <PersonalColorAnalyst locale="es" />
        </main>
    );
}
