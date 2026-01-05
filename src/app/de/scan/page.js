import PersonalColorAnalyst from '../../../components/PersonalColorAnalyst';
import JsonLd from '../../../components/JsonLd';

export const metadata = {
    title: 'KI-Farbtypberatung - Finde deine traditionelle Farbaura | ImageColorPickerAI',
    description: 'Professionelle KI-Farbtypberatung. Lade ein Selfie hoch, um deine einzigartige traditionelle Farbaura zu entdecken. 100% kostenlos und ohne Anmeldung.',
    alternates: {
        canonical: '/de/scan',
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
            <PersonalColorAnalyst locale="de" />
        </main>
    );
}
