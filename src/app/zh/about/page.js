import AboutView from '../../../components/AboutView';

export const metadata = {
    title: '关于 ImageColorPickerAI - 传统色彩百科 | ImageColorPickerAI',
    description: 'ImageColorPickerAI 的故事。利用现代 AI 技术桥接古代色彩文化。',
    alternates: {
        canonical: '/zh/about',
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
        "description": "AI驱动的图像颜色提取器和传统色彩百科。利用现代AI技术桥接古代中国和日本色彩文化。",
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
            <AboutView locale="zh" />
        </>
    );
}
