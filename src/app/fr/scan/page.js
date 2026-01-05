import PersonalColorAnalyst from '../../../components/PersonalColorAnalyst';
import JsonLd from '../../../components/JsonLd';

export const metadata = {
    title: 'Analyse de Couleur Personnelle par IA - Trouvez votre Aura de Couleur Traditionnelle | ImageColorPickerAI',
    description: 'Analyse de couleur personnelle professionnelle par IA. Téléchargez un selfie pour découvrir votre aura de couleur traditionnelle unique. 100% gratuit et sans inscription.',
    alternates: {
        canonical: '/fr/scan',
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
            <PersonalColorAnalyst locale="fr" />
        </main>
    );
}
