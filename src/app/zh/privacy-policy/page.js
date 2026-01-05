import LegalView from '../../../components/LegalView';

export const metadata = {
    title: '隐私政策 - ImageColorPickerAI | 数据安全',
    description: '我们对您隐私的承诺。了解在使用 ImageColorPickerAI 时我们如何处理您的数据和图像。',
    alternates: {
        canonical: '/zh/privacy-policy',
        languages: {
            'en': '/privacy-policy',
            'zh-Hans': '/zh/privacy-policy',
            'ja': '/ja/privacy-policy',
            'es': '/es/privacy-policy',
            'fr': '/fr/privacy-policy',
            'de': '/de/privacy-policy',
            'pt': '/pt/privacy-policy',
            'x-default': '/privacy-policy',
        },
    },
};

export default function Page() {
    return <LegalView type="privacy" locale="zh" />;
}
