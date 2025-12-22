import Link from 'next/link';
import { Sparkles, Palette, Globe, Library } from 'lucide-react';

export const metadata = {
    title: 'About ImageColorPickerAI - The Traditional Color Encyclopedia',
    description: 'The story behind ImageColorPickerAI. Bridging ancient color culture with modern AI technology.',
    alternates: {
        canonical: '/about',
    },
};

export default function About() {
    return (
        <main className="min-h-screen bg-neutral-50 font-sans">
            {/* Hero Section */}
            <div className="bg-neutral-900 text-white py-24 px-4 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
                        More Than Just <span className="text-red-600">Pixels</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto font-serif italic leading-relaxed">
                        We are building the world's most comprehensive cultural color library, powered by AI to help modern creators connect with ancient traditions.
                    </p>
                </div>
            </div>

            {/* The Mission */}
            <div className="max-w-5xl mx-auto px-4 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-neutral-900 mb-6">The "Ge Fei" Mission</h2>
                        <p className="text-lg text-neutral-600 space-y-4 font-serif leading-relaxed">
                            ImageColorPickerAI was born from a simple observation: Most color pickers are clinical and soul-less. They give you a hex code, but they don't tell you a story.
                            <br /><br />
                            Our mission is to bridge the gap between digital precision and cultural depth. Whether it's the <strong>Imperial Reds</strong> of the Forbidden City or the <strong>Zen Whites</strong> of Japanese tea rooms, every color on our platform is tied to its historical and emotional origin.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-neutral-100 flex flex-col items-center text-center">
                            <Library className="w-8 h-8 text-red-600 mb-4" />
                            <span className="text-2xl font-bold">500+</span>
                            <span className="text-xs text-neutral-400 uppercase font-sans">Colors</span>
                        </div>
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-neutral-100 flex flex-col items-center text-center">
                            <Globe className="w-8 h-8 text-indigo-600 mb-4" />
                            <span className="text-2xl font-bold">4</span>
                            <span className="text-xs text-neutral-400 uppercase font-sans">Cultures</span>
                        </div>
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-neutral-100 flex flex-col items-center text-center">
                            <Sparkles className="w-8 h-8 text-purple-600 mb-4" />
                            <span className="text-2xl font-bold">8K</span>
                            <span className="text-xs text-neutral-400 uppercase font-sans">AI Art</span>
                        </div>
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-neutral-100 flex flex-col items-center text-center">
                            <Palette className="w-8 h-8 text-amber-500 mb-4" />
                            <span className="text-2xl font-bold">100%</span>
                            <span className="text-xs text-neutral-400 uppercase font-sans">Free</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* The Tech */}
            <div className="bg-white border-y border-neutral-100 py-24">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-neutral-900 mb-12 uppercase tracking-widest text-sm opacity-50">Our Technology Stack</h2>
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
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8">Ready to Discover Your Palette?</h3>
                <Link href="/" className="inline-flex items-center gap-2 bg-neutral-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-neutral-800 transition shadow-xl hover:shadow-2xl hover:-translate-y-1">
                    Start Picking Colors <Sparkles className="w-5 h-5" />
                </Link>
            </div>
        </main>
    );
}
