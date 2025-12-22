import Link from 'next/link';
import { Heart, Briefcase, Home, Shirt, Palette, Sparkles } from 'lucide-react';
import { IDEA_CATEGORIES } from '../../utils/ideaUtils';
import AdPlacement from '../../components/AdPlacement';

export const metadata = {
    title: 'Color Inspiration & Ideas | Traditional Chinese Palette Guide',
    description: 'Find the perfect Traditional Chinese colors for your project. Curated palettes for Weddings, Branding, Interior Design, and Art.',
    alternates: {
        canonical: '/ideas',
    },
};

const IconMap = {
    Heart, Briefcase, Home, Shirt, Palette
};

export default function IdeasHub() {
    return (
        <main className="min-h-screen bg-neutral-50 p-4 py-12 font-sans">
            <div className="max-w-6xl mx-auto text-center mb-16">
                <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold tracking-widest uppercase mb-4">
                    Inspiration Engine
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6 tracking-tight">
                    Find Color for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">Every Purpose</span>
                </h1>
                <p className="text-lg text-neutral-500 max-w-2xl mx-auto font-serif italic">
                    Don't just pick a color. Pick a meaning. Explore curated collections designed for specific life moments and creative projects.
                </p>
            </div>

            <div className="max-w-4xl mx-auto px-4 mb-12">
                <AdPlacement slot="ideas-hub-top" />
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {IDEA_CATEGORIES.map((cat) => {
                    const Icon = IconMap[cat.icon] || Sparkles;
                    return (
                        <Link
                            key={cat.id}
                            href={`/ideas/${cat.id}`}
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
                                    {cat.title}
                                </h2>
                                <p className="text-neutral-500 font-serif italic">
                                    {cat.desc}
                                </p>
                            </div>

                            {/* Mobile View optimized */}
                            <div className="relative z-10 md:hidden flex items-center gap-4">
                                <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex-shrink-0 flex items-center justify-center text-indigo-600">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-neutral-900">
                                        {cat.title}
                                    </h2>
                                    <p className="text-sm text-neutral-500 font-serif italic">
                                        {cat.desc}
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
