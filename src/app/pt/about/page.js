import AboutView from '../../../components/AboutView';

export const metadata = {
    title: 'Sobre o ImageColorPickerAI - A Enciclopédia de Cores Tradicionais | ImageColorPickerAI',
    description: 'A história por trás do ImageColorPickerAI. Unindo a cultura de cores antigas com a moderna tecnologia de IA.',
    alternates: {
        canonical: '/pt/about',
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
    return <AboutView locale="pt" />;
}
