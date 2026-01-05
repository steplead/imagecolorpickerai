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
    return <AboutView locale="zh" />;
}
