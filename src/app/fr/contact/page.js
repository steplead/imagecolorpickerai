import ContactView from '../../../components/ContactView';

export const metadata = {
    title: 'Contactez-nous - Commentaires & Support | ImageColorPickerAI',
    description: 'Contactez l\'équipe d\'ImageColorPickerAI. Signalez des bogues, suggérez des fonctionnalités ou demandez une collaboration.',
    alternates: {
        canonical: '/fr/contact',
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
    return <ContactView locale="fr" />;
}
