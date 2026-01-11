import ContactView from '../../../components/ContactView';

export const metadata = {
    title: 'Kontaktieren Sie uns - Feedback & Support | ImageColorPickerAI',
    description: 'Kontaktieren Sie das Team von ImageColorPickerAI. Melden Sie Fehler, schlagen Sie Funktionen vor oder fordern Sie eine Zusammenarbeit an.',
    alternates: {
        canonical: 'https://imagecolorpickerai.com/de/contact',
        languages: {
            'en': 'https://imagecolorpickerai.com/contact',
            'zh-Hans': 'https://imagecolorpickerai.com/zh/contact',
            'ja': 'https://imagecolorpickerai.com/ja/contact',
            'es': 'https://imagecolorpickerai.com/es/contact',
            'fr': 'https://imagecolorpickerai.com/fr/contact',
            'de': 'https://imagecolorpickerai.com/de/contact',
            'pt': 'https://imagecolorpickerai.com/pt/contact',
            'x-default': 'https://imagecolorpickerai.com/contact',
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
