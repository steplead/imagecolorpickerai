import AboutView from '../../../components/AboutView';

export const metadata = {
    title: 'Sobre o ImageColorPickerAI - A Enciclopédia de Cores Tradicionais | ImageColorPickerAI',
    description: 'A história por trás do ImageColorPickerAI. Unindo a cultura de cores antigas com a moderna tecnologia de IA.',
    alternates: {
        canonical: '/pt/about',
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
        "description": "Seletor de cor de imagem alimentado por IA e enciclopédia de cores tradicional. Conectando a antiga cultura de cores chinesa e japonesa com a tecnologia moderna de IA.",
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
            <AboutView locale="pt" />
        </>
    );
}
