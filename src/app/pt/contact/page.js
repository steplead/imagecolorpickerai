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
