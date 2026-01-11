import AboutView from '../../components/AboutView';

export const metadata = {
    title: 'About ImageColorPickerAI - The Traditional Color Encyclopedia',
    description: 'The story behind ImageColorPickerAI. Bridging ancient color culture with modern AI technology.',
    alternates: {
        canonical: 'https://imagecolorpickerai.com/about',
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

export default function AboutPage() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "ImageColorPickerAI",
        "url": "https://imagecolorpickerai.com",
        "logo": "https://imagecolorpickerai.com/icon.png",
        "description": "AI-powered image color picker and traditional color encyclopedia. Bridging ancient Chinese and Japanese color culture with modern AI technology.",
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
            <AboutView locale="en" />
        </>
    );
}
