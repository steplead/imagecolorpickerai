import HomeView from '../../components/HomeView';

export const metadata = {
    title: 'Bild-Farbwähler - HEX-Code & Enzyklopädie Traditioneller Farben | ImageColorPickerAI',
    description: 'Kostenloser Bild-Farbwähler. HEX-, RGB-, CMYK-Codes extrahieren & traditionelle Farben entdecken. KI-gestützt, keine Anmeldung nötig.',
    alternates: {
        canonical: '/de',
        languages: {
            'en': '/',
            'zh-Hans': '/zh',
            'ja': '/ja',
            'es': '/es',
            'fr': '/fr',
            'de': '/de',
            'pt': '/pt',
            'x-default': '/',
        },
    },
};

export default function Page() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Wie extrahiere ich Farben aus einem Bild?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Laden Sie einfach Ihr JPG- oder PNG-Bild in unser Tool hoch. Verwenden Sie Ihre Maus, um einen beliebigen Bereich des Bildes zu hovered, und der Hex-Code wird sofort angezeigt."
                }
            },
            {
                "@type": "Question",
                "name": "Ist dieser Farbwähler kostenlos?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ja, ImageColorPickerAI ist ein 100% kostenloses Online-Tool mit unbegrenzten Uploads und Palettengenerierungen."
                }
            },
            {
                "@type": "Question",
                "name": "Kann ich Farben für japanische und chinesische Kunst extrahieren?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolut. Wir spezialisieren uns auf das Mapping von digitalen Farben zu traditionellen Paletten, einschließlich japanischer Farbsysteme der Heian-Zeit und chinesischer Farbsysteme der Ming-Zeit."
                }
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <HomeView locale="de" />
        </>
    );
}
