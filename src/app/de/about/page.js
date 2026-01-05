import AboutView from '../../../components/AboutView';

export const metadata = {
    title: 'Über ImageColorPickerAI - Die Enzyklopädie der traditionellen Farben | ImageColorPickerAI',
    description: 'Die Geschichte hinter ImageColorPickerAI. Die Brücke zwischen alter Farbkultur und moderner KI-Technologie.',
    alternates: {
        canonical: '/de/about',
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
    return <AboutView locale="de" />;
}
