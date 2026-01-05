import LegalView from '../../../components/LegalView';

export const metadata = {
    title: 'プライバシーポリシー - ImageColorPickerAI',
    description: 'プライバシーへの取り組み。ImageColorPickerAIの使用中にデータと画像がどのように処理されるかをご確認ください。',
    alternates: {
        canonical: '/ja/privacy-policy',
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
    return <LegalView type="privacy" locale="ja" />;
}
