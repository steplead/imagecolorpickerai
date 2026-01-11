import LegalView from '../../../components/LegalView';

export const metadata = {
    title: '隐私政策 - ImageColorPickerAI | 数据安全',
    description: '我们对您隐私的承诺。了解在使用 ImageColorPickerAI 时我们如何处理您的数据和图像。',
    alternates: {
        canonical: 'https://imagecolorpickerai.com/zh/privacy-policy',
        languages: {
            'en': 'https://imagecolorpickerai.com/privacy-policy',
            'zh-Hans': 'https://imagecolorpickerai.com/zh/privacy-policy',
            'ja': 'https://imagecolorpickerai.com/ja/privacy-policy',
            'es': 'https://imagecolorpickerai.com/es/privacy-policy',
            'fr': 'https://imagecolorpickerai.com/fr/privacy-policy',
            'de': 'https://imagecolorpickerai.com/de/privacy-policy',
            'pt': 'https://imagecolorpickerai.com/pt/privacy-policy',
            'x-default': 'https://imagecolorpickerai.com/privacy-policy',
        },
    },
};

export default function Page() {
    return <LegalView type="privacy" locale="zh" />;
}
