'use client';

import Link from 'next/link';
import { Heart, Briefcase, Home, Shirt, Palette, Sparkles } from 'lucide-react';
import { IDEA_CATEGORIES } from '../utils/ideaUtils';
import AdPlacement from './AdPlacement';

const IconMap = {
    Heart, Briefcase, Home, Shirt, Palette
};

export default function IdeasHub({ locale = 'en' }) {
    const labels = {
        en: {
            badge: "Inspiration Engine",
            titlePrefix: "Find Color for ",
            titleSuffix: "Every Purpose",
            desc: "Don't just pick a color. Pick a meaning. Explore curated collections designed for specific life moments and creative projects.",
            categories: {
                wedding: { title: "Wedding & Celebration", desc: "Auspicious colors for invitations, decor, and traditional wear." },
                branding: { title: "Logo & Branding", desc: "Professional palettes that convey trust, energy, or luxury." },
                interior: { title: "Interior Design", desc: "Harmonious shades for living rooms, tea rooms, and feng shui." },
                fashion: { title: "Fashion & Silk", desc: "Traditional textile colors for modern apparel and accessories." },
                art: { title: "Art & Illustration", desc: "Pigments used in classic ink wash painting and calligraphy." }
            }
        },
        zh: {
            badge: "灵感引擎",
            titlePrefix: "为",
            titleSuffix: "寻找色彩",
            desc: "不要只是选择一种颜色。选择一种意义。探索为特定生活瞬间和创意项目设计的精选系列。",
            categories: {
                wedding: { title: "婚礼与庆典", desc: "用于邀请函、装饰和传统服饰的吉祥色彩。" },
                branding: { title: "标志与品牌", desc: "传达信任、能量或奢侈感的专业色板。" },
                interior: { title: "室内设计", desc: "用于起居室、茶室和风水的和谐色调。" },
                fashion: { title: "时尚与丝绸", desc: "用于现代服装和配饰的传统纺织色彩。" },
                art: { title: "艺术与插画", desc: "用于经典水墨画和书法的颜料。" }
            }
        },
        ja: {
            badge: "インスピレーション・エンジン",
            titlePrefix: "",
            titleSuffix: "のための色を見つける",
            desc: "単に色を選ぶだけでなく、意味を選んでください。特定のライフシーンやクリエイティブなプロジェクトのためにデザインされた厳選されたコレクションを探索してください。",
            categories: {
                wedding: { title: "結婚式と祝典", desc: "招待状、装飾、伝統的な衣装のための縁起の良い色。" },
                branding: { title: "ロゴとブランディング", desc: "信頼、エネルギー、または高級感を伝えるプロフェッショナルなパレット。" },
                interior: { title: "インテリアデザイン", desc: "リビングルーム、茶室、風水のための調和のとれた色合い。" },
                fashion: { title: "ファッションとシルク", desc: "現代のアパレルやアクセサリーのための伝統的なテキスタイルカラー。" },
                art: { title: "アートとイラスト", desc: "古典的な水墨画や書道で使用される顔料。" }
            }
        },
        es: {
            badge: "Motor de Inspiración",
            titlePrefix: "Encuentra Color para ",
            titleSuffix: "Cada Propósito",
            desc: "No solo elijas un color. Elige un significado. Explora colecciones curadas diseñadas para momentos específicos de la vida y proyectos creativos.",
            categories: {
                wedding: { title: "Bodas y Celebraciones", desc: "Colores auspiciosos para invitaciones, decoración y vestimenta tradicional." },
                branding: { title: "Logo y Branding", desc: "Paletas profesionales que transmiten confianza, energía o lujo." },
                interior: { title: "Diseño de Interiores", desc: "Tonos armoniosos para salas de estar, salones de té y feng shui." },
                fashion: { title: "Moda y Seda", desc: "Colores textiles tradicionales para prendas y accesorios modernos." },
                art: { title: "Arte e Ilustración", desc: "Pigmentos utilizados en la pintura clásica de lavado de tinta y caligrafía." }
            }
        },
        fr: {
            badge: "Moteur d'Inspiration",
            titlePrefix: "Trouvez une Couleur pour ",
            titleSuffix: "Chaque Usage",
            desc: "Ne vous contentez pas de choisir une couleur. Choisissez une signification. Explorez des collections curatées conçues pour des moments de vie spécifiques et des projets créatifs.",
            categories: {
                wedding: { title: "Mariage & Célébration", desc: "Couleurs de bon augure pour les invitations, le décor et les tenues traditionnelles." },
                branding: { title: "Logo & Branding", desc: "Palettes professionnelles transmettant confiance, énergie ou luxe." },
                interior: { title: "Design d'Intérieur", desc: "Nuances harmonieuses pour les salons, les salons de thé et le feng shui." },
                fashion: { title: "Mode & Soie", desc: "Couleurs textiles traditionnelles pour les vêtements et accessoires modernes." },
                art: { title: "Art & Illustration", desc: "Pigments utilisés dans la peinture classique au lavis et la calligraphie." }
            }
        },
        de: {
            badge: "Inspirations-Engine",
            titlePrefix: "Farben finden für ",
            titleSuffix: "jeden Zweck",
            desc: "Wählen Sie nicht nur eine Farbe. Wählen Sie eine Bedeutung. Entdecken Sie kuratierte Kollektionen für spezifische Lebensmomente und kreative Projekte.",
            categories: {
                wedding: { title: "Hochzeit & Feier", desc: "Glückbringende Farben für Einladungen, Dekor und traditionelle Kleidung." },
                branding: { title: "Logo & Branding", desc: "Professionelle Paletten, die Vertrauen, Energie oder Luxus vermitteln." },
                interior: { title: "Innendesign", desc: "Harmonische Töne für Wohnzimmer, Teestuben und Feng Shui." },
                fashion: { title: "Mode & Seide", desc: "Traditionelle Textilfarben für moderne Bekleidung und Accessoires." },
                art: { title: "Kunst & Illustration", desc: "Pigmente aus der klassischen Tuschmalerei und Kalligrafie." }
            }
        },
        pt: {
            badge: "Mecanismo de Inspiração",
            titlePrefix: "Encontre Cores para ",
            titleSuffix: "Qualquer Propósito",
            desc: "Não escolha apenas uma cor. Escolha um significado. Explore coleções curadas projetadas para momentos específicos da vida e projetos criativos.",
            categories: {
                wedding: { title: "Casamentos e Celebrações", desc: "Cores auspiciosas para convites, decoração e trajes tradicionais." },
                branding: { title: "Logo e Branding", desc: "Paletas profissionais que transmitem confiança, energia ou luxo." },
                interior: { title: "Design de Interiores", desc: "Tons harmoniosos para salas de estar, salas de chá e feng shui." },
                fashion: { title: "Moda e Seda", desc: "Cores têxteis tradicionais para vestuário e acessórios modernos." },
                art: { title: "Arte e Ilustração", desc: "Pigmentos usados na pintura clássica de lavagem de tinta e caligrafia." }
            }
        }
    };

    const t = labels[locale] || labels.en;

    return (
        <main className="min-h-screen bg-neutral-50 p-4 py-12 font-sans">
            <div className="max-w-6xl mx-auto text-center mb-16">
                <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold tracking-widest uppercase mb-4">
                    {t.badge}
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6 tracking-tight">
                    {t.titlePrefix}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
                        {locale === 'zh' ? '每个场景' : t.titleSuffix}
                    </span>
                    {locale === 'zh' ? t.titleSuffix : ''}
                    {locale === 'ja' ? '' : ''}
                </h1>
                <p className="text-lg text-neutral-500 max-w-2xl mx-auto font-serif italic">
                    {t.desc}
                </p>
            </div>

            <div className="max-w-4xl mx-auto px-4 mb-12">
                <AdPlacement slot="ideas-hub-top" />
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {IDEA_CATEGORIES.map((cat) => {
                    const Icon = IconMap[cat.icon] || Sparkles;
                    const catInfo = t.categories[cat.id] || cat;
                    return (
                        <Link
                            key={cat.id}
                            href={`${locale === 'en' ? '' : `/${locale}`}/ideas/${cat.id}`}
                            className="group bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 border border-neutral-100 hover:-translate-y-1 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Icon className="w-24 h-24 text-indigo-500" />
                            </div>

                            <div className="relative z-10 hidden md:block">
                                <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-bold text-neutral-900 mb-2 group-hover:text-indigo-600 transition-colors">
                                    {catInfo.title}
                                </h2>
                                <p className="text-neutral-500 font-serif italic">
                                    {catInfo.desc}
                                </p>
                            </div>

                            {/* Mobile View optimized */}
                            <div className="relative z-10 md:hidden flex items-center gap-4">
                                <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex-shrink-0 flex items-center justify-center text-indigo-600">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-neutral-900">
                                        {catInfo.title}
                                    </h2>
                                    <p className="text-sm text-neutral-500 font-serif italic">
                                        {catInfo.desc}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </main>
    );
}
