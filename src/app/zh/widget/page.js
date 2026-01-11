import EmbedWidget from '@/components/EmbedWidget';
import Link from 'next/link';

export async function generateMetadata() {
    return {
        title: '嵌入AI取色器小工具 - 免费集成 | 图片取色器AI',
        description: '将我们AI驱动的取色器添加到您的网站。免费的iframe小工具，附带归因链接。非常适合设计师、开发者和色彩爱好者。',
        alternates: {
            canonical: 'https://imagecolorpickerai.com/zh/widget',
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
            title: '嵌入AI取色器小工具 - 免费集成',
            description: '将我们AI驱动的取色器添加到您的网站。免费的iframe小工具，附带归因链接。',
            url: 'https://imagecolorpickerai.com/zh/widget',
            siteName: 'ImageColorPickerAI',
            images: [
                {
                    url: 'https://imagecolorpickerai.com/api/og/widget-zh.png',
                    width: 1200,
                    height: 630,
                }
            ],
            locale: 'zh_CN',
            type: 'website',
        },
    };
}

export default function WidgetPage() {
    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "嵌入AI取色器小工具",
        "description": "将我们AI驱动的取色器添加到您的网站。免费的iframe小工具，附带归因链接。",
        "url": "https://imagecolorpickerai.com/zh/widget",
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
            />
            <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 py-16 px-4 font-sans">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold text-neutral-900 mb-4">
                            嵌入我们的<span className="text-purple-600">AI取色器</span>
                        </h1>
                        <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                            在几秒钟内为您的网站添加专业的色彩分析功能。免费、开源、AI驱动。
                        </p>
                    </div>

                    {/* Main Widget Embed */}
                    <div className="mb-12">
                        <EmbedWidget locale="zh" />
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="bg-white rounded-xl p-6 border border-purple-100 shadow-sm">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-neutral-900 mb-2">AI驱动</h3>
                            <p className="text-sm text-neutral-600">
                                使用机器学习进行高级色彩分析。即时提取配色方案、含义和和谐组合。
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 border border-purple-100 shadow-sm">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-neutral-900 mb-2">轻松集成</h3>
                            <p className="text-sm text-neutral-600">
                                只需复制并粘贴iframe代码。无需API密钥，无需配置，无需维护。
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 border border-purple-100 shadow-sm">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-neutral-900 mb-2">100%免费</h3>
                            <p className="text-sm text-neutral-600">
                                开源且完全免费。归因链接有助于支持我们的开发。
                            </p>
                        </div>
                    </div>

                    {/* Integration Examples */}
                    <div className="bg-white rounded-xl border border-purple-200 p-8 mb-12">
                        <h2 className="text-2xl font-bold text-neutral-900 mb-6">集成示例</h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="font-bold text-neutral-900 mb-2">设计作品集</h3>
                                <p className="text-neutral-600 text-sm mb-2">
                                    让访问者从您的项目截图和案例研究中提取颜色。
                                </p>
                                <code className="block bg-neutral-100 p-3 rounded text-xs font-mono">
                                    &lt;iframe src="https://imagecolorpickerai.com/widget" width="100%" height="500"&gt;&lt;/iframe&gt;
                                </code>
                            </div>

                            <div>
                                <h3 className="font-bold text-neutral-900 mb-2">设计博客</h3>
                                <p className="text-neutral-600 text-sm mb-2">
                                    在色彩理论和设计教程中添加色彩分析工具。
                                </p>
                                <code className="block bg-neutral-100 p-3 rounded text-xs font-mono">
                                    &lt;iframe src="https://imagecolorpickerai.com/widget" width="100%" height="500"&gt;&lt;/iframe&gt;
                                </code>
                            </div>

                            <div>
                                <h3 className="font-bold text-neutral-900 mb-2">代理商网站</h3>
                                <p className="text-neutral-600 text-sm mb-2">
                                    为客户提供从品牌资产中即时提取颜色的功能。
                                </p>
                                <code className="block bg-neutral-100 p-3 rounded text-xs font-mono">
                                    &lt;iframe src="https://imagecolorpickerai.com/widget" width="100%" height="500"&gt;&lt;/iframe&gt;
                                </code>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                            准备好为您的网站添加色彩智能了吗？
                        </h2>
                        <p className="text-neutral-600 mb-6">
                            加入数千名使用我们小工具的设计师、开发者和色彩爱好者。
                        </p>
                        <Link
                            href="/zh"
                            className="inline-block px-8 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition shadow-sm"
                        >
                            试用完整工具
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
