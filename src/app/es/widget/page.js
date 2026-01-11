import EmbedWidget from '@/components/EmbedWidget';
import Link from 'next/link';

export async function generateMetadata() {
    return {
        title: 'Insertar Widget de Selector de Color AI - Integración Gratuita | ImageColorPickerAI',
        description: 'Añade nuestro selector de color impulsado por IA a tu sitio web. Widget iframe gratuito con enlace de atribución. Perfecto para diseñadores, desarrolladores y entusiastas del color.',
        alternates: {
            canonical: 'https://imagecolorpickerai.com/es/widget',
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
            title: 'Insertar Widget de Selector de Color AI - Integración Gratuita',
            description: 'Añade nuestro selector de color impulsado por IA a tu sitio web.',
            url: 'https://imagecolorpickerai.com/es/widget',
            siteName: 'ImageColorPickerAI',
            images: [{ url: 'https://imagecolorpickerai.com/api/og/widget-es.png', width: 1200, height: 630 }],
            locale: 'es_ES',
            type: 'website',
        },
    };
}

export default function WidgetPage() {
    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Insertar Widget de Selector de Color AI",
        "description": "Añade nuestro selector de color impulsado por IA a tu sitio web.",
        "url": "https://imagecolorpickerai.com/es/widget",
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
            <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 py-16 px-4 font-sans">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold text-neutral-900 mb-4">Inserta Nuestro<span className="text-purple-600">Selector de Color AI</span></h1>
                        <p className="text-xl text-neutral-600 max-w-2xl mx-auto">Añade análisis de color profesional a tu sitio web en segundos. Gratis, código abierto e impulsado por IA.</p>
                    </div>
                    <div className="mb-12"><EmbedWidget locale="es" /></div>
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="bg-white rounded-xl p-6 border border-purple-100 shadow-sm">
                            <h3 className="font-bold text-neutral-900 mb-2">Impulsado por IA</h3>
                            <p className="text-sm text-neutral-600">Análisis de color avanzado usando aprendizaje automático. Extrae paletas, significados y armonías al instante.</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 border border-purple-100 shadow-sm">
                            <h3 className="font-bold text-neutral-900 mb-2">Fácil Integración</h3>
                            <p className="text-sm text-neutral-600">Solo copia y pega el código iframe. Sin claves API, sin configuración, sin mantenimiento.</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 border border-purple-100 shadow-sm">
                            <h3 className="font-bold text-neutral-900 mb-2">100% Gratis</h3>
                            <p className="text-sm text-neutral-600">Código abierto y completamente gratuito. El enlace de atribución ayuda a apoyar nuestro desarrollo.</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-neutral-900 mb-4">¿Listo para Añadir Inteligencia de Color a Tu Sitio?</h2>
                        <Link href="/es" className="inline-block px-8 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition shadow-sm">Prueba la Herramienta Completa</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
