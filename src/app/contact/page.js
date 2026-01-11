import ContactView from '../../components/ContactView';

export const metadata = {
    title: 'Contact Us - Feedback & Support | ImageColorPickerAI',
    description: 'Get in touch with the ImageColorPickerAI team. Report bugs, suggest features, or request collaboration.',
    alternates: {
        canonical: 'https://imagecolorpickerai.com/contact',
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

export default function ContactPage() {
    const contactSchema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact ImageColorPickerAI",
        "description": "Get in touch with the ImageColorPickerAI team for support, feedback, or collaboration",
        "url": "https://imagecolorpickerai.com/contact",
        "mainContentOfPage": {
            "@type": "WebPageElement",
            "name": "Contact Form"
        },
        "about": {
            "@type": "Organization",
            "name": "ImageColorPickerAI",
            "url": "https://imagecolorpickerai.com",
            "logo": "https://imagecolorpickerai.com/icon.png",
            "sameAs": [
                "https://github.com/steplead",
                "https://www.pinterest.com/johnlauvip/",
                "https://imagecolorpickerai.com"
            ],
            "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "support@imagecolorpickerai.com",
                "availableLanguage": ["English", "Chinese", "Japanese", "Spanish", "French", "German", "Portuguese"]
            }
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
            />
            <ContactView locale="en" />
        </>
    );
}
