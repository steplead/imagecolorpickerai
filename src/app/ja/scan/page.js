import PersonalColorAnalyst from '../../../components/PersonalColorAnalyst';
import JsonLd from '../../../components/JsonLd';

export const metadata = {
    title: 'AIパーソナルカラー分析 - あなたの伝統的なオーラを見つける | ImageColorPickerAI',
    description: 'プロフェッショナルなAIパーソナルカラー分析。自撮りをアップロードして、あなただけの伝統色オーラを見つけましょう。100%無料、登録不要。',
    alternates: {
        canonical: '/ja/scan',
        languages: {
            'en': '/scan',
            'zh-Hans': '/zh/scan',
            'ja': '/ja/scan',
            'es': '/es/scan',
            'fr': '/fr/scan',
            'de': '/de/scan',
            'pt': '/pt/scan',
            'x-default': '/scan',
        },
    },
};

export default function Page() {
    return (
        <main className="min-h-screen bg-neutral-50 flex flex-col items-center py-12 px-4 font-sans">
            <PersonalColorAnalyst locale="ja" />
        </main>
    );
}
