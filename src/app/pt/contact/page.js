import ContactView from '../../../components/ContactView';

export const metadata = {
    title: 'Contate-nos - Feedback e Suporte | ImageColorPickerAI',
    description: 'Entre em contato com a equipe do ImageColorPickerAI. Relate bugs, sugira recursos ou solicite colaboração.',
    alternates: {
        canonical: 'https://imagecolorpickerai.com/pt/contact',
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
            "name": "Contate o ImageColorPickerAI"
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
            <ContactView locale="pt" />
        </>
    );
}
