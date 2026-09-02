import HomeView from '../../components/HomeView';

export const metadata = {
    title: 'Bild-Farbwähler - HEX-Code & Enzyklopädie Traditioneller Farben | ImageColorPickerAI',
    description: 'Kostenloser Bild-Farbwähler. HEX-, RGB-, CMYK-Codes extrahieren & traditionelle Farben entdecken. Keine Anmeldung nötig.',
    alternates: {
        canonical: 'https://imagecolorpickerai.com/de',
        languages: {
            'en': 'https://imagecolorpickerai.com/',
            'zh-Hans': 'https://imagecolorpickerai.com/zh',
            'ja': 'https://imagecolorpickerai.com/ja',
            'es': 'https://imagecolorpickerai.com/es',
            'fr': 'https://imagecolorpickerai.com/fr',
            'de': 'https://imagecolorpickerai.com/de',
            'pt': 'https://imagecolorpickerai.com/pt',
            'x-default': 'https://imagecolorpickerai.com/',
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
                    "text": "Ja, ImageColorPickerAI ist ein kostenloses Online-Werkzeug, um Farben auszuwählen und Paletten zu erzeugen."
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

    const webSiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "ImageColorPickerAI",
        "alternateName": "Bild-Farbwähler",
        "url": "https://imagecolorpickerai.com/de",
        "description": "Kostenloser Online-Bild-Farbwähler mit Enzyklopädie für traditionelle chinesische und japanische Farben",
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://imagecolorpickerai.com/de/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
            />
            <HomeView locale="de" />
        </>
    );
}
