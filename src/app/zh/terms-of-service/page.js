import LegalView from '../../../components/LegalView';

export const metadata = {
    title: '服务条款 - ImageColorPickerAI',
    description: '使用 ImageColorPickerAI 的条款和条件。专业的取色与 AI 生成服务。',
    alternates: {
        canonical: '/zh/terms-of-service',
        languages: {
            'en': '/terms-of-service',
            'zh-Hans': '/zh/terms-of-service',
            'ja': '/ja/terms-of-service',
            'es': '/es/terms-of-service',
            'fr': '/fr/terms-of-service',
            'de': '/de/terms-of-service',
            'pt': '/pt/terms-of-service',
            'x-default': '/terms-of-service',
        },
    },
};

export default function Page() {
    return <LegalView type="terms" locale="zh" />;
}
