import EmbedWidget from '@/components/EmbedWidget';
import Link from 'next/link';

export async function generateMetadata() {
    return {
        title: 'Intégrer le Widget Sélecteur de Couleur IA - Intégration Gratuite | ImageColorPickerAI',
        description: 'Ajoutez notre sélecteur de couleur alimenté par l\'IA à votre site web. Widget iframe gratuit avec lien d\'attribution. Parfait pour les designers, développeurs et passionnés de couleurs.',
        alternates: {
            canonical: 'https://imagecolorpickerai.com/fr/widget',
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
            title: 'Intégrer le Widget Sélecteur de Couleur IA - Intégration Gratuite',
            description: 'Ajoutez notre sélecteur de couleur alimenté par l\'IA à votre site web.',
            url: 'https://imagecolorpickerai.com/fr/widget',
            siteName: 'ImageColorPickerAI',
            images: [{ url: 'https://imagecolorpickerai.com/api/og/widget-fr.png', width: 1200, height: 630 }],
            locale: 'fr_FR',
            type: 'website',
        },
    };
}

export default function WidgetPage() {
    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Intégrer le Widget Sélecteur de Couleur IA",
        "description": "Ajoutez notre sélecteur de couleur alimenté par l'IA à votre site web.",
        "url": "https://imagecolorpickerai.com/fr/widget",
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
            <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 py-16 px-4 font-sans">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold text-neutral-900 mb-4">Intégrez Notre<span className="text-purple-600">Sélecteur de Couleur IA</span></h1>
                        <p className="text-xl text-neutral-600 max-w-2xl mx-auto">Ajoutez une analyse de couleur professionnelle à votre site web en quelques secondes. Gratuit, open source et propulsé par l'IA.</p>
                    </div>
                    <div className="mb-12"><EmbedWidget locale="fr" /></div>
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="bg-white rounded-xl p-6 border border-purple-100 shadow-sm">
                            <h3 className="font-bold text-neutral-900 mb-2">Propulsé par l'IA</h3>
                            <p className="text-sm text-neutral-600">Analyse de couleur avancée utilisant l'apprentissage automatique. Extrayez des palettes, des significations et des harmonies instantanément.</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 border border-purple-100 shadow-sm">
                            <h3 className="font-bold text-neutral-900 mb-2">Intégration Facile</h3>
                            <p className="text-sm text-neutral-600">Copiez et collez simplement le code iframe. Pas de clés API, pas de configuration, pas de maintenance.</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 border border-purple-100 shadow-sm">
                            <h3 className="font-bold text-neutral-900 mb-2">100% Gratuit</h3>
                            <p className="text-sm text-neutral-600">Open source et entièrement gratuit. Le lien d'attribution aide à soutenir notre développement.</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-neutral-900 mb-4">Prêt à Ajouter l'Intelligence des Couleurs à Votre Site?</h2>
                        <Link href="/fr" className="inline-block px-8 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition shadow-sm">Essayer l'Outil Complet</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
