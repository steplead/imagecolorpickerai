import AboutView from '../../../components/AboutView';

export const metadata = {
    title: 'Über ImageColorPickerAI - Die Enzyklopädie der traditionellen Farben | ImageColorPickerAI',
    description: 'Die Geschichte hinter ImageColorPickerAI. Die Brücke zwischen alter Farbkultur und moderner KI-Technologie.',
    alternates: {
        canonical: '/de/about',
        languages: {
            'en': '/about',
            'zh-Hans': '/zh/about',
            'ja': '/ja/about',
            'es': '/es/about',
            'fr': '/fr/about',
            'de': '/de/about',
            'pt': '/pt/about',
            'x-default': '/about',
        },
    },
};

export default function Page() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "ImageColorPickerAI",
        "url": "https://imagecolorpickerai.com",
        "logo": "https://imagecolorpickerai.com/icon.png",
        "description": "KI-gesteuerter Bildfarbwähler und traditionelle Farbenzyklopädie. Verbindet die alte chinesische und japanische Farbkultur mit moderner KI-Technologie.",
        "sameAs": [
            "https://github.com/steplead/imagecolorpickerai",
            "https://www.pinterest.com/johnlauvip/traditional-chinese-art-wallpapers/"
        ],
        "founder": {
            "@type": "Person",
            "name": "ImageColorPickerAI Team"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <AboutView locale="de" />
        </>
    );
}
