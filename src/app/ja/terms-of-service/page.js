import LegalView from '../../../components/LegalView';

export const metadata = {
    title: '利用規約 - ImageColorPickerAI',
    description: 'ImageColorPickerAIの利用に関する規約。プロフェッショナルな色の抽出とAI生成サービス。',
    alternates: {
        canonical: 'https://imagecolorpickerai.com/ja/terms-of-service',
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
    return <LegalView type="terms" locale="ja" />;
}
