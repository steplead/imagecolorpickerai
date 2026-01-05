import AboutView from '../../../components/AboutView';

export const metadata = {
    title: 'Sobre ImageColorPickerAI - La Enciclopedia del Color Tradicional | ImageColorPickerAI',
    description: 'La historia detrás de ImageColorPickerAI. Uniendo la cultura del color antiguo con la tecnología de IA moderna.',
    alternates: {
        canonical: '/es/about',
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
    return <AboutView locale="es" />;
}
