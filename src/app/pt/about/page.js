import AboutView from '../../../components/AboutView';

export const metadata = {
    title: 'Sobre ImageColorPickerAI - Enciclopédia Cores Tradicionais | ImageColorPickerAI',
    description: 'A história por trás do ImageColorPickerAI. Unindo a cultura de cores antigas com a moderna tecnologia de IA.',
    alternates: {
        canonical: 'https://imagecolorpickerai.com/pt/about',
        languages: {
            'en': 'https://imagecolorpickerai.com/about',
            'zh-Hans': 'https://imagecolorpickerai.com/zh/about',
            'ja': 'https://imagecolorpickerai.com/ja/about',
            'es': 'https://imagecolorpickerai.com/es/about',
            'fr': 'https://imagecolorpickerai.com/fr/about',
            'de': 'https://imagecolorpickerai.com/de/about',
            'pt': 'https://imagecolorpickerai.com/pt/about',
            'x-default': 'https://imagecolorpickerai.com/about',
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
