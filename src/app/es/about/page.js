import AboutView from '../../../components/AboutView';

export const metadata = {
    title: 'Sobre ImageColorPickerAI - Enciclopedia Color Tradicional | ImageColorPickerAI',
    description: 'La historia detrás de ImageColorPickerAI. Uniendo la cultura del color antiguo con la tecnología de IA moderna.',
    alternates: {
        canonical: '/es/about',
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
        "description": "Selector de color de imagen impulsado por IA y enciclopedia de color tradicional. Conectando la antigua cultura de color china y japonesa con la tecnología moderna de IA.",
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
            <AboutView locale="es" />
        </>
    );
}
