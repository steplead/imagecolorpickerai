import LegalView from '../../../components/LegalView';

import { socialMeta } from '@/lib/socialMeta';

export const metadata = {
    robots: { index: false, follow: true },

    title: 'プライバシーポリシー - ImageColorPickerAI',
    description: 'プライバシーへの取り組み。ImageColorPickerAIの使用中にデータと画像がどのように処理されるかをご確認ください。',
    ...socialMeta({ title: 'プライバシーポリシー - ImageColorPickerAI', description: 'プライバシーへの取り組み。ImageColorPickerAIの使用中にデータと画像がどのように処理されるかをご確認ください。', path: '/ja/privacy-policy' }),
    alternates: {
        canonical: 'https://imagecolorpickerai.com/ja/privacy-policy',
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
    return <LegalView type="privacy" locale="ja" />;
}
