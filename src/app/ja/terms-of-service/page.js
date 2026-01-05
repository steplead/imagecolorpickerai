import LegalView from '../../../components/LegalView';

export const metadata = {
    title: '利用規約 - ImageColorPickerAI',
    description: 'ImageColorPickerAIの利用に関する規約。プロフェッショナルな色の抽出とAI生成サービス。',
    alternates: {
        canonical: '/ja/terms-of-service',
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
    return <LegalView type="terms" locale="ja" />;
}
