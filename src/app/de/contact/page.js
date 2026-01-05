import ContactView from '../../../components/ContactView';

export const metadata = {
    title: 'Kontaktieren Sie uns - Feedback & Support | ImageColorPickerAI',
    description: 'Kontaktieren Sie das Team von ImageColorPickerAI. Melden Sie Fehler, schlagen Sie Funktionen vor oder fordern Sie eine Zusammenarbeit an.',
    alternates: {
        canonical: '/de/contact',
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
    return <ContactView locale="de" />;
}
