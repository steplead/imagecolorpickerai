import ContactView from '../../../components/ContactView';

export const metadata = {
    title: '联系我们 - 反馈与支持 | ImageColorPickerAI',
    description: '联系 ImageColorPickerAI 团队。报告错误、提出功能建议或请求合作。',
    alternates: {
        canonical: '/zh/contact',
        languages: {
            'en': '/contact',
            'zh-Hans': '/zh/contact',
            'ja': '/ja/contact',
            'es': '/es/contact',
            'fr': '/fr/contact',
            'de': '/de/contact',
            'pt': '/pt/contact',
            'x-default': '/contact',
        },
    },
};

export default function Page() {
    return <ContactView locale="zh" />;
}
