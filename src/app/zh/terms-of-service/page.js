import LegalView from '../../../components/LegalView';

export const metadata = {
    title: '服务条款 - ImageColorPickerAI',
    description: '使用 ImageColorPickerAI 的条款和条件。专业的取色与 AI 生成服务。',
    alternates: {
        canonical: 'https://imagecolorpickerai.com/zh/terms-of-service',
        languages: {
            'en': 'https://imagecolorpickerai.com/terms-of-service',
            'zh-Hans': 'https://imagecolorpickerai.com/zh/terms-of-service',
            'ja': 'https://imagecolorpickerai.com/ja/terms-of-service',
            'es': 'https://imagecolorpickerai.com/es/terms-of-service',
            'fr': 'https://imagecolorpickerai.com/fr/terms-of-service',
            'de': 'https://imagecolorpickerai.com/de/terms-of-service',
            'pt': 'https://imagecolorpickerai.com/pt/terms-of-service',
            'x-default': 'https://imagecolorpickerai.com/terms-of-service',
        },
    },
};

export default function Page() {
    return <LegalView type="terms" locale="zh" />;
}
