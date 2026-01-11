import EmbedWidget from '@/components/EmbedWidget';
import Link from 'next/link';

export async function generateMetadata() {
    return {
        title: '埋め込みAIカラーピッカーウィジェット - 無料統合 | ImageColorPickerAI',
        description: 'AI搭載カラーピッカーをあなたのウェブサイトに追加。無料iframeウィジェット、帰属リンク付き。デザイナー、開発者、カラー愛好家に最適。',
        alternates: {
            canonical: 'https://imagecolorpickerai.com/ja/widget',
            languages: {
                'en': 'https://imagecolorpickerai.com/widget',
                'zh-Hans': 'https://imagecolorpickerai.com/zh/widget',
                'ja': 'https://imagecolorpickerai.com/ja/widget',
                'es': 'https://imagecolorpickerai.com/es/widget',
                'fr': 'https://imagecolorpickerai.com/fr/widget',
                'de': 'https://imagecolorpickerai.com/de/widget',
                'pt': 'https://imagecolorpickerai.com/pt/widget',
                'x-default': 'https://imagecolorpickerai.com/widget',
            },
        },
        openGraph: {
            title: '埋め込みAIカラーピッカーウィジェット - 無料統合',
            description: 'AI搭載カラーピッカーをあなたのウェブサイトに追加。無料iframeウィジェット。',
            url: 'https://imagecolorpickerai.com/ja/widget',
            siteName: 'ImageColorPickerAI',
            images: [{ url: 'https://imagecolorpickerai.com/api/og/widget-ja.png', width: 1200, height: 630 }],
            locale: 'ja_JP',
            type: 'website',
        },
    };
}

export default function WidgetPage() {
    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "埋め込みAIカラーピッカーウィジェット",
        "description": "AI搭載カラーピッカーをあなたのウェブサイトに追加。無料iframeウィジェット。",
        "url": "https://imagecolorpickerai.com/ja/widget",
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
            <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 py-16 px-4 font-sans">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold text-neutral-900 mb-4">私たちの<span className="text-purple-600">AIカラーピッカー</span>を埋め込む</h1>
                        <p className="text-xl text-neutral-600 max-w-2xl mx-auto">数秒でウェブサイトにプロフェッショナルなカラー分析を追加。無料、オープンソース、AI搭載。</p>
                    </div>
                    <div className="mb-12"><EmbedWidget locale="ja" /></div>
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="bg-white rounded-xl p-6 border border-purple-100 shadow-sm">
                            <h3 className="font-bold text-neutral-900 mb-2">AI搭載</h3>
                            <p className="text-sm text-neutral-600">機械学習を使用した高度なカラー分析。配色、意味、調和を即座に抽出。</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 border border-purple-100 shadow-sm">
                            <h3 className="font-bold text-neutral-900 mb-2">簡単統合</h3>
                            <p className="text-sm text-neutral-600">iframeコードをコピー＆ペーストするだけ。APIキー、設定、メンテナンス不要。</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 border border-purple-100 shadow-sm">
                            <h3 className="font-bold text-neutral-900 mb-2">100%無料</h3>
                            <p className="text-sm text-neutral-600">オープンソースで完全無料。帰属リンクで開発をサポート。</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-neutral-900 mb-4">サイトにカラーインテリジェンスを追加する準備はできましたか？</h2>
                        <Link href="/ja" className="inline-block px-8 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition shadow-sm">ツールを試す</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
