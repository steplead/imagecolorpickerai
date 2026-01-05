import AboutView from '../../../components/AboutView';

export const metadata = {
    title: 'ImageColorPickerAIについて - 伝統色の百科事典 | ImageColorPickerAI',
    description: 'ImageColorPickerAIの背後にある物語。AI技術を使用して、古代の色彩文化と現代を橋渡しします。',
    alternates: {
        canonical: '/ja/about',
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
    return <AboutView locale="ja" />;
}
