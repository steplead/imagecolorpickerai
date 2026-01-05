import ContactView from '../../../components/ContactView';

export const metadata = {
    title: 'お問い合わせ - フィードバックとサポート | ImageColorPickerAI',
    description: 'ImageColorPickerAIチームにお問い合わせください。バグの報告、機能の提案、コラボレーションのリクエストを受け付けています。',
    alternates: {
        canonical: '/ja/contact',
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
    return <ContactView locale="ja" />;
}
