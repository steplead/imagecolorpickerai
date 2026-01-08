import HomeView from '../../components/HomeView';

export const metadata = {
    title: '图片取色器 - 专业的十六进制代码提取与传统色彩百科 | ImageColorPickerAI',
    description: '免费在线图片取色器。提取精确的十六进制代码、RGB，并立即发现中国和日本传统色彩配方。无需注册。',
    alternates: {
        canonical: '/zh',
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
                "name": "如何从图像中提取颜色？",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "只需将您的JPG或PNG图像上传到我们的工具。使用鼠标悬停在图像的任何区域，十六进制代码将立即显示。"
                }
            },
            {
                "@type": "Question",
                "name": "这个取色器免费吗？",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "是的，ImageColorPickerAI是一个100%免费的在线工具，具有无限上传和调色板生成功能。"
                }
            },
            {
                "@type": "Question",
                "name": "我可以提取日本和中国艺术的颜色吗？",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "当然可以。我们专长于将数字颜色映射到传统调色板，包括平安时代的日本和明代中国的色彩系统。"
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
            <HomeView locale="zh" />
        </>
    );
}
