import IdeasHub from '../../../components/IdeasHub';

export const metadata = {
    title: 'Inspiração de Cores e Ideias de Paletas - Guia de Design Tradicional | ImageColorPickerAI',
    description: 'Inspiração de cores curada para o seu próximo projecto. Explore paletas tradicionais para casamentos, marcas e design de interiores. Guia de design profissional.',
    alternates: {
        canonical: '/pt/ideas',
        languages: {
            'en': '/ideas',
            'zh-Hans': '/zh/ideas',
            'ja': '/ja/ideas',
            'es': '/es/ideas',
            'fr': '/fr/ideas',
            'de': '/de/ideas',
            'pt': '/pt/ideas',
            'x-default': '/ideas',
        },
    },
};

export default function Page() {
    return <IdeasHub locale="pt" />;
}
