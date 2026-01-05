'use client';

import Link from 'next/link';
import { Sparkles, Palette, Globe, Library } from 'lucide-react';

export default function AboutView({ locale = 'en' }) {
    const labels = {
        en: {
            heroTitle: "More Than Just ",
            heroAccent: "Pixels",
            heroDesc: "We are building the world's most comprehensive cultural color library, powered by AI to help modern creators connect with ancient traditions.",
            missionTitle: "The \"Ge Fei\" Mission",
            missionBody: "ImageColorPickerAI was born from a simple observation: Most color pickers are clinical and soul-less. They give you a hex code, but they don't tell you a story. \n\n Our mission is to bridge the gap between digital precision and cultural depth. Whether it's the Imperial Reds of the Forbidden City or the Zen Whites of Japanese tea rooms, every color on our platform is tied to its historical and emotional origin.",
            statColors: "Colors",
            statCultures: "Cultures",
            statAI: "AI Art",
            statFree: "Free",
            techTitle: "Our Technology Stack",
            ctaTitle: "Ready to Discover Your Palette?",
            ctaBtn: "Start Picking Colors"
        },
        zh: {
            heroTitle: "不只是",
            heroAccent: "像素",
            heroDesc: "我们正在致力于建立世界上最全面的传统色彩百科图库，利用 AI 技术帮助现代创作者连接千年传统。",
            missionTitle: "“格非”使命",
            missionBody: "ImageColorPickerAI 诞生于一个简单的观察：大多数取色工具都是冰冷且缺乏灵魂的。它们只给你一个十六进制代码，却不告诉你背后的故事。\n\n 我们的使命是弥合数字精确度与文化深度之间的鸿沟。无论是紫禁城的宫廷红（Imperial Reds），还是日本茶室的禅意白（Zen Whites），平台上的每一种颜色都与其历史和情感渊源紧密相连。",
            statColors: "色彩数量",
            statCultures: "文化分类",
            statAI: "AI 艺术",
            statFree: "100% 免费",
            techTitle: "我们的技术架构",
            ctaTitle: "准备好探索您的专属色板了吗？",
            ctaBtn: "开始取色"
        },
        ja: {
            heroTitle: "単なるピクセル",
            heroAccent: "を超えて",
            heroDesc: "私たちは、AIを活用して現代のクリエイターが古代の伝統とつながるのを支援するため、世界で最も包括的な文化的カラーライブラリを構築しています。",
            missionTitle: "「Ge Fei」の使命",
            missionBody: "ImageColorPickerAIは、シンプルな観察から生まれました。ほとんどのカラーピッカーは臨床的で魂がありません。16進コードは教えてくれますが、物語は教えてくれません。\n\n 私たちの使命は、デジタルの正確さと文化的な深さの間のギャップを埋めることです。禁城のインペリアルレッド、あるいは日本の茶室の禅ホワイト。当プラットフォームのすべての色は、その歴史的、感情的な起源に結びついています。",
            statColors: "色の数",
            statCultures: "文化",
            statAI: "AIアート",
            statFree: "無料",
            techTitle: "テクノロジースタック",
            ctaTitle: "あなたのパレットを見つける準備はできましたか？",
            ctaBtn: "色選びを始める"
        },
        es: {
            heroTitle: "Más que solo ",
            heroAccent: "Píxeles",
            heroDesc: "Estamos construyendo la biblioteca de colores culturales más completa del mundo, impulsada por IA para ayudar a los creadores modernos a conectarse con las tradiciones antiguas.",
            missionTitle: "La misión \"Ge Fei\"",
            missionBody: "ImageColorPickerAI nació de una observación simple: la mayoría de los selectores de color son clínicos y sin alma. Te dan un código hexadecimal, pero no te cuentan una historia.\n\n Nuestra misión es cerrar la brecha entre la precisión digital y la profundidad cultural. Ya sean los Rojos Imperiales de la Ciudad Prohibida o los Blancos Zen de los salones de té japoneses, cada color en nuestra plataforma está ligado a su origen histórico y emocional.",
            statColors: "Colores",
            statCultures: "Culturas",
            statAI: "Arte IA",
            statFree: "Gratis",
            techTitle: "Nuestra pila tecnológica",
            ctaTitle: "¿Listo para descubrir tu paleta?",
            ctaBtn: "Empezar a elegir colores"
        },
        fr: {
            heroTitle: "Plus que de simples ",
            heroAccent: "Pixels",
            heroDesc: "Nous construisons la bibliothèque de couleurs culturelles la plus complète au monde, propulsée par l'IA pour aider les créateurs modernes à se connecter aux traditions anciennes.",
            missionTitle: "La mission \"Ge Fei\"",
            missionBody: "ImageColorPickerAI est né d'une observation simple : la plupart des sélecteurs de couleurs sont cliniques et sans âme. Ils vous donnent un code hexadécimal, mais ils ne vous racontent pas d'histoire.\n\n Notre mission est de combler le fossé entre la précision numérique et la profondeur culturelle. Qu'il s'agisse des Rouges Impériaux de la Cité Interdite ou des Blancs Zen des salons de thé japonais, chaque couleur sur notre plateforme est liée à son origine historique et émotionnelle.",
            statColors: "Couleurs",
            statCultures: "Cultures",
            statAI: "Art IA",
            statFree: "Gratuit",
            techTitle: "Notre pile technique",
            ctaTitle: "Prêt à découvrir votre palette ?",
            ctaBtn: "Commencer à choisir des couleurs"
        },
        de: {
            heroTitle: "Mehr als nur ",
            heroAccent: "Pixel",
            heroDesc: "Wir bauen die weltweit umfassendste kulturelle Farbbibliothek auf, unterstützt durch KI, um modernen Kreativen zu helfen, sich mit alten Traditionen zu verbinden.",
            missionTitle: "Die „Ge Fei“-Mission",
            missionBody: "ImageColorPickerAI entstand aus einer einfachen Beobachtung: Die meisten Farbwähler sind klinisch und seelenlos. Sie geben Ihnen einen Hex-Code, aber sie erzählen Ihnen keine Geschichte.\n\n Unsere Mission ist es, die Lücke zwischen digitaler Präzision und kultureller Tiefe zu schließen. Ob das kaiserliche Rot der Verbotenen Stadt oder das Zen-Weiß japanischer Teestuben – jede Farbe auf unserer Plattform ist mit ihrem historischen und emotionalen Ursprung verbunden.",
            statColors: "Farben",
            statCultures: "Kulturen",
            statAI: "KI-Kunst",
            statFree: "Kostenlos",
            techTitle: "Unser Technologie-Stack",
            ctaTitle: "Bereit, Ihre Palette zu entdecken?",
            ctaBtn: "Farben auswählen"
        },
        pt: {
            heroTitle: "Mais do que apenas ",
            heroAccent: "Pixels",
            heroDesc: "Estamos construindo a biblioteca de cores culturais mais abrangente do mundo, impulsionada por IA para ajudar os criadores modernos a se conectarem com as tradições antigas.",
            missionTitle: "A Missão \"Ge Fei\"",
            missionBody: "O ImageColorPickerAI nasceu de uma observação simples: a maioria dos seletores de cores são clínicos e sem alma. Eles fornecem um código hexadecimal, mas não contam uma história.\n\n Nossa missão é preencher a lacuna entre a precisão digital e a profundidade cultural. Sejam os Vermelhos Imperiais da Cidade Proibida ou os Brancos Zen das casas de chá japonesas, cada cor em nossa plataforma está ligada à sua origem histórica e emocional.",
            statColors: "Cores",
            statCultures: "Culturas",
            statAI: "Arte IA",
            statFree: "Grátis",
            techTitle: "Nossa pilha de tecnologia",
            ctaTitle: "Pronto para descobrir sua paleta?",
            ctaBtn: "Começar a escolher cores"
        }
    };

    const t = labels[locale] || labels.en;

    return (
        <main className="min-h-screen bg-neutral-50 font-sans">
            {/* Hero Section */}
            <div className="bg-neutral-900 text-white py-24 px-4 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
                        {t.heroTitle}<span className="text-red-600">{t.heroAccent}</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto font-serif italic leading-relaxed">
                        {t.heroDesc}
                    </p>
                </div>
            </div>

            {/* The Mission */}
            <div className="max-w-5xl mx-auto px-4 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-neutral-900 mb-6">{t.missionTitle}</h2>
                        <div className="text-lg text-neutral-600 space-y-4 font-serif leading-relaxed whitespace-pre-wrap">
                            {t.missionBody}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-neutral-100 flex flex-col items-center text-center">
                            <Library className="w-8 h-8 text-red-600 mb-4" />
                            <span className="text-2xl font-bold">500+</span>
                            <span className="text-xs text-neutral-400 uppercase font-sans">{t.statColors}</span>
                        </div>
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-neutral-100 flex flex-col items-center text-center">
                            <Globe className="w-8 h-8 text-indigo-600 mb-4" />
                            <span className="text-2xl font-bold">4</span>
                            <span className="text-xs text-neutral-400 uppercase font-sans">{t.statCultures}</span>
                        </div>
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-neutral-100 flex flex-col items-center text-center">
                            <Sparkles className="w-8 h-8 text-purple-600 mb-4" />
                            <span className="text-2xl font-bold">8K</span>
                            <span className="text-xs text-neutral-400 uppercase font-sans">{t.statAI}</span>
                        </div>
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-neutral-100 flex flex-col items-center text-center">
                            <Palette className="w-8 h-8 text-amber-500 mb-4" />
                            <span className="text-2xl font-bold">100%</span>
                            <span className="text-xs text-neutral-400 uppercase font-sans">{t.statFree}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* The Tech */}
            <div className="bg-white border-y border-neutral-100 py-24">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-neutral-900 mb-12 uppercase tracking-widest text-sm opacity-50">{t.techTitle}</h2>
                    <div className="flex flex-wrap justify-center gap-12 font-mono text-neutral-400 text-lg italic">
                        <span>Next.js 14+</span>
                        <span>Tailwind CSS</span>
                        <span>Cloudflare Edge</span>
                        <span>AI Integration</span>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="py-24 px-4 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8">{t.ctaTitle}</h3>
                <Link href={`${locale === 'en' ? '' : `/${locale}`}/`} className="inline-flex items-center gap-2 bg-neutral-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-neutral-800 transition shadow-xl hover:shadow-2xl hover:-translate-y-1">
                    {t.ctaBtn} <Sparkles className="w-5 h-5" />
                </Link>
            </div>
        </main>
    );
}
