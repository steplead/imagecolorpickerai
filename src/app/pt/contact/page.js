import ContactView from '../../../components/ContactView';

export const metadata = {
    title: 'Contate-nos - Feedback e Suporte | ImageColorPickerAI',
    description: 'Entre em contato com a equipe do ImageColorPickerAI. Relate bugs, sugira recursos ou solicite colaboração.',
    alternates: {
        canonical: '/pt/contact',
        languages: {
            'en': '/contact',
            'zh-Hans': '/zh/contact',
            'ja': '/ja/contact',
            'es': '/es/contact',
            'fr': '/fr/contact',
            'de': '/de/contact',
            'pt': '/pt/contact',
            'x-default': '/contact',
        },
    },
};

export default function Page() {
    return <ContactView locale="pt" />;
}
