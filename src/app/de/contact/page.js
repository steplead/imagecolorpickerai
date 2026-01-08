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
    const contactSchema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "mainContentOfPage": {
            "@type": "WebPageElement",
            "name": "Kontaktieren Sie ImageColorPickerAI"
        },
        "about": {
            "@type": "Organization",
            "name": "ImageColorPickerAI",
            "url": "https://imagecolorpickerai.com"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
            />
            <ContactView locale="de" />
        </>
    );
}
