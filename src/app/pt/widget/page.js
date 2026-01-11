import EmbedWidget from '@/components/EmbedWidget';
import Link from 'next/link';

export async function generateMetadata() {
    return {
        title: 'Incorporar Widget de Seleção de Cores IA - Integração Gratuita | ImageColorPickerAI',
        description: 'Adicione nosso seletor de cores alimentado por IA ao seu site. Widget iframe gratuito com link de atribuição. Perfeito para designers, desenvolvedores e entusiastas de cores.',
        alternates: {
            canonical: 'https://imagecolorpickerai.com/pt/widget',
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
            title: 'Incorporar Widget de Seleção de Cores IA - Integração Gratuita',
            description: 'Adicione nosso seletor de cores alimentado por IA ao seu site.',
            url: 'https://imagecolorpickerai.com/pt/widget',
            siteName: 'ImageColorPickerAI',
            images: [{ url: 'https://imagecolorpickerai.com/api/og/widget-pt.png', width: 1200, height: 630 }],
            locale: 'pt_PT',
            type: 'website',
        },
    };
}

export default function WidgetPage() {
    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Incorporar Widget de Seleção de Cores IA",
        "description": "Adicione nosso seletor de cores alimentado por IA ao seu site.",
        "url": "https://imagecolorpickerai.com/pt/widget",
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
            <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 py-16 px-4 font-sans">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold text-neutral-900 mb-4">Incorpore Nosso<span className="text-purple-600">Seletor de Cores IA</span></h1>
                        <p className="text-xl text-neutral-600 max-w-2xl mx-auto">Adicione análise de cores profissional ao seu site em segundos. Gratuito, open source e alimentado por IA.</p>
                    </div>
                    <div className="mb-12"><EmbedWidget locale="pt" /></div>
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="bg-white rounded-xl p-6 border border-purple-100 shadow-sm">
                            <h3 className="font-bold text-neutral-900 mb-2">Alimentado por IA</h3>
                            <p className="text-sm text-neutral-600">Análise de cores avançada usando aprendizado de máquina. Extraia paletas, significados e harmonias instantaneamente.</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 border border-purple-100 shadow-sm">
                            <h3 className="font-bold text-neutral-900 mb-2">Fácil Integração</h3>
                            <p className="text-sm text-neutral-600">Basta copiar e colar o código iframe. Sem chaves API, sem configuração, sem manutenção.</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 border border-purple-100 shadow-sm">
                            <h3 className="font-bold text-neutral-900 mb-2">100% Gratuito</h3>
                            <p className="text-sm text-neutral-600">Open source e completamente gratuito. O link de atribuição ajuda a apoiar nosso desenvolvimento.</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-neutral-900 mb-4">Pronto para Adicionar Inteligência de Cores ao Seu Site?</h2>
                        <Link href="/pt" className="inline-block px-8 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition shadow-sm">Experimente a Ferramenta Completa</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
