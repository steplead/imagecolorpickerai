import AboutView from '../../../components/AboutView';

export const metadata = {
    title: 'À Propos d\'ImageColorPickerAI - L\'Encyclopédie des Couleurs Traditionnelles | ImageColorPickerAI',
    description: 'L\'histoire d\'ImageColorPickerAI. Faire le pont entre la culture des couleurs anciennes et la technologie moderne de l\'IA.',
    alternates: {
        canonical: '/fr/about',
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
        "description": "Sélecteur de couleur d'image alimenté par l'IA et encyclopédie des couleurs traditionnelles. Relier la ancienne culture des couleurs chinoise et japonaise avec la technologie moderne de l'IA.",
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
            <AboutView locale="fr" />
        </>
    );
}
