import EmbedWidget from '@/components/EmbedWidget';
import Link from 'next/link';

export async function generateMetadata() {
    return {
        title: 'KI-Farbwähler-Widget Einbetten - Kostenlose Integration | ImageColorPickerAI',
        description: 'Fügen Sie unseren KI-gesteuerten Farbwähler zu Ihrer Website hinzu. Kostenloses iframe-Widget mit Attributionslink. Perfekt für Designer, Entwickler und Farbfans.',
        alternates: {
            canonical: 'https://imagecolorpickerai.com/de/widget',
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
            title: 'KI-Farbwähler-Widget Einbetten - Kostenlose Integration',
            description: 'Fügen Sie unseren KI-gesteuerten Farbwähler zu Ihrer Website hinzu.',
            url: 'https://imagecolorpickerai.com/de/widget',
            siteName: 'ImageColorPickerAI',
            images: [{ url: 'https://imagecolorpickerai.com/api/og/widget-de.png', width: 1200, height: 630 }],
            locale: 'de_DE',
            type: 'website',
        },
    };
}

export default function WidgetPage() {
    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "KI-Farbwähler-Widget Einbetten",
        "description": "Fügen Sie unseren KI-gesteuerten Farbwähler zu Ihrer Website hinzu.",
        "url": "https://imagecolorpickerai.com/de/widget",
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
            <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 py-16 px-4 font-sans">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold text-neutral-900 mb-4">Betten Sie Unseren<span className="text-purple-600">KI-Farbwähler</span> Ein</h1>
                        <p className="text-xl text-neutral-600 max-w-2xl mx-auto">Fügen Sie professionelle Farbanalyse in Sekunden zu Ihrer Website hinzu. Kostenlos, Open Source und KI-gesteuert.</p>
                    </div>
                    <div className="mb-12"><EmbedWidget locale="de" /></div>
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="bg-white rounded-xl p-6 border border-purple-100 shadow-sm">
                            <h3 className="font-bold text-neutral-900 mb-2">KI-Gesteuert</h3>
                            <p className="text-sm text-neutral-600">Erweiterte Farbanalyse mit maschinellem Lernen. Extrahieren Sie sofort Paletten, Bedeutungen und Harmonien.</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 border border-purple-100 shadow-sm">
                            <h3 className="font-bold text-neutral-900 mb-2">Einfache Integration</h3>
                            <p className="text-sm text-neutral-600">Kopieren und Einfügen des iframe-Codes. Keine API-Schlüssel, keine Konfiguration, kein Wartungsaufwand.</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 border border-purple-100 shadow-sm">
                            <h3 className="font-bold text-neutral-900 mb-2">100% Kostenlos</h3>
                            <p className="text-sm text-neutral-600">Open Source und völlig kostenlos. Der Attributionslink unterstützt unsere Entwicklung.</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-neutral-900 mb-4">Bereit, Farb-Intelligenz zu Ihrer Seite Hinzuzufügen?</h2>
                        <Link href="/de" className="inline-block px-8 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition shadow-sm">Vollständiges Tool Probieren</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
