import HomeView from '../../components/HomeView';

export const metadata = {
    title: 'Sélecteur de Couleur d\'Image - Obtenir le Code Hex et Encyclopédie des Couleurs Traditionnelles | ImageColorPickerAI',
    description: 'Sélecteur de couleur d\'image en ligne gratuit. Extrayez les codes HEX, RGB, CMYK et découvrez instantanément les significations des couleurs traditionnelles chinoises et japonaises. Propulsé par l\'IA et sans inscription.',
    alternates: {
        canonical: '/fr',
        languages: {
            'en': '/',
            'zh-Hans': '/zh',
            'ja': '/ja',
            'es': '/es',
            'fr': '/fr',
            'de': '/de',
            'pt': '/pt',
            'x-default': '/',
        },
    },
};

export default function Page() {
    return <HomeView locale="fr" />;
}
