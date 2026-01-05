import { Metadata } from 'next';
import EmbedWidget from '@/components/EmbedWidget';
import { WebPageSchema, OrganizationSchema } from '@/components/JsonLd';

export async function generateMetadata() {
    return {
        title: 'Embed AI Color Picker Widget - Free Integration | Image Color Picker AI',
        description: 'Add our AI-powered color picker to your website. Free iframe widget with attribution link. Perfect for designers, developers, and color enthusiasts.',
        alternates: {
            canonical: '/widget',
        },
        openGraph: {
            title: 'Embed AI Color Picker Widget - Free Integration',
            description: 'Add our AI-powered color picker to your website. Free iframe widget with attribution.',
            url: 'https://imagecolorpickerai.com/widget',
            siteName: 'ImageColorPickerAI',
            images: [
                {
                    url: 'https://imagecolorpickerai.com/api/og/widget.png',
                    width: 1200,
                    height: 630,
                }
            ],
            locale: 'en_US',
            type: 'website',
        },
    };
}

export default function WidgetPage() {
    const webPageSchema = WebPageSchema({
        title: 'Embed AI Color Picker Widget - Free Integration',
        description: 'Add our AI-powered color picker to your website. Free iframe widget with attribution.',
        url: '/widget',
    });

    const orgSchema = OrganizationSchema();

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
            />
            <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 py-16 px-4 font-sans">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold text-neutral-900 mb-4">
                            Embed Our <span className="text-purple-600">AI Color Picker</span>
                        </h1>
                        <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                            Add professional color analysis to your website in seconds. Free, open-source, and AI-powered.
                        </p>
                    </div>

                    {/* Main Widget Embed */}
                    <div className="mb-12">
                        <EmbedWidget />
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="bg-white rounded-xl p-6 border border-purple-100 shadow-sm">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-neutral-900 mb-2">AI-Powered</h3>
                            <p className="text-sm text-neutral-600">
                                Advanced color analysis using machine learning. Extract palettes, meanings, and harmonies instantly.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 border border-purple-100 shadow-sm">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-neutral-900 mb-2">Easy Integration</h3>
                            <p className="text-sm text-neutral-600">
                                Just copy and paste the iframe code. No API keys, no configuration, no maintenance.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 border border-purple-100 shadow-sm">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-neutral-900 mb-2">100% Free</h3>
                            <p className="text-sm text-neutral-600">
                                Open-source and completely free. attribution link helps support our development.
                            </p>
                        </div>
                    </div>

                    {/* Integration Examples */}
                    <div className="bg-white rounded-xl border border-purple-200 p-8 mb-12">
                        <h2 className="text-2xl font-bold text-neutral-900 mb-6">Integration Examples</h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="font-bold text-neutral-900 mb-2">Design Portfolio</h3>
                                <p className="text-neutral-600 text-sm mb-2">
                                    Let visitors extract colors from your project screenshots and case studies.
                                </p>
                                <code className="block bg-neutral-100 p-3 rounded text-xs font-mono">
                                    &lt;iframe src="https://imagecolorpickerai.com/widget" width="100%" height="500"&gt;&lt;/iframe&gt;
                                </code>
                            </div>

                            <div>
                                <h3 className="font-bold text-neutral-900 mb-2">Design Blog</h3>
                                <p className="text-neutral-600 text-sm mb-2">
                                    Add color analysis tools to your color theory and design tutorials.
                                </p>
                                <code className="block bg-neutral-100 p-3 rounded text-xs font-mono">
                                    &lt;iframe src="https://imagecolorpickerai.com/widget" width="100%" height="500"&gt;&lt;/iframe&gt;
                                </code>
                            </div>

                            <div>
                                <h3 className="font-bold text-neutral-900 mb-2">Agency Website</h3>
                                <p className="text-neutral-600 text-sm mb-2">
                                    Provide clients with instant color extraction from their brand assets.
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
                            Ready to Add Color Intelligence to Your Site?
                        </h2>
                        <p className="text-neutral-600 mb-6">
                            Join thousands of designers, developers, and color enthusiasts using our widget.
                        </p>
                        <a
                            href="/"
                            className="inline-block px-8 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition shadow-sm"
                        >
                            Try the Full Tool
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
