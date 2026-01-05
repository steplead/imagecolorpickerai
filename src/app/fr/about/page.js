import AboutView from '../../../components/AboutView';

export const metadata = {
    title: 'À Propos d\'ImageColorPickerAI - L\'Encyclopédie des Couleurs Traditionnelles | ImageColorPickerAI',
    description: 'L\'histoire d\'ImageColorPickerAI. Faire le pont entre la culture des couleurs anciennes et la technologie moderne de l\'IA.',
    alternates: {
        canonical: '/fr/about',
        languages: {
            'en': '/about',
            'zh-Hans': '/zh/about',
            'ja': '/ja/about',
            'es': '/es/about',
            'fr': '/fr/about',
            'de': '/de/about',
            'pt': '/pt/about',
            'x-default': '/about',
        },
    },
};

export default function Page() {
    return <AboutView locale="fr" />;
}
