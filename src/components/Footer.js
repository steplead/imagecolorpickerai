import Link from 'next/link';
import { Palette, Share2, Sparkles } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const collections = [
        { name: 'Traditional Chinese', href: '/colors/chinese' },
        { name: 'Nippon (Japanese)', href: '/colors/japanese' },
        { name: 'Red Collections', href: '/colors/red' },
        { name: 'Blue Collections', href: '/colors/blue' },
        { name: 'Green Collections', href: '/colors/green' },
        { name: 'Nature Inspired', href: '/colors/nature' },
    ];

    const tools = [
        { name: 'Color Picker', href: '/' },
        { name: 'Color Style Scan', href: '/scan' },
        { name: 'Color Comparison', href: '/compare/imperial-red-vs-cinnabar' },
        { name: 'Idea Hub', href: '/ideas/fashion' },
    ];

    return (
        <footer className="bg-white border-t border-neutral-100 pt-16 pb-8 px-4 font-sans">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4 group" title="Image Color Picker - Home Catalog">
                            <div className="bg-neutral-900 p-1.5 rounded-lg group-hover:bg-red-900 transition-colors">
                                <Palette className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-bold text-xl tracking-tight text-neutral-900">ImageColorPicker<span className="text-red-600 italic">AI</span></span>
                        </Link>
                        <p className="text-sm text-neutral-500 leading-relaxed mb-6">
                            A free image color picker and traditional-color library. Pick exact hex codes from any photo and explore centuries of Chinese and Japanese color history.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://twitter.com/intent/tweet?url=https://imagecolorpickerai.com&text=ImageColorPickerAI"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-neutral-400 hover:text-neutral-600 transition"
                                aria-label="Share on Twitter"
                            >
                                <Share2 className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Collections Column */}
                    <div>
                        <h3 className="font-bold text-neutral-900 mb-6 uppercase text-xs tracking-widest">Color Collections</h3>
                        <ul className="space-y-4">
                            {collections.map(item => (
                                <li key={item.name}>
                                    <Link href={item.href} title={`Explore ${item.name}`} className="text-sm text-neutral-500 hover:text-red-700 transition">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tools Column */}
                    <div>
                        <h3 className="font-bold text-neutral-900 mb-6 uppercase text-xs tracking-widest">Creative Tools</h3>
                        <ul className="space-y-4">
                            {tools.map(item => (
                                <li key={item.name}>
                                    <Link href={item.href} title={`Use ${item.name}`} className="text-sm text-neutral-500 hover:text-red-700 transition">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter / CTA Column */}
                    <div>
                        <h3 className="font-bold text-neutral-900 mb-6 uppercase text-xs tracking-widest">Stay Inspired</h3>
                        <p className="text-sm text-neutral-500 mb-4">Discover new color stories every week.</p>
                        <Link
                            href="/scan"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 text-white rounded-lg text-sm font-medium hover:bg-neutral-800 transition shadow-sm"
                        >
                            <Sparkles className="w-4 h-4 text-amber-400" />
                            Try Color Style Scan
                        </Link>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-neutral-50 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-neutral-400">
                        &copy; {currentYear} ImageColorPickerAI. All rights reserved. Built for designers, historians, and color enthusiasts.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 text-xs text-neutral-400">
                        <Link href="/about" className="hover:text-neutral-600 transition" title="About ImageColorPickerAI">About</Link>
                        <Link href="https://image-color-picker-ai.gitbook.io/image-color-picker-ai-docs/" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-600 transition" title="Read our Official Documentation">Docs</Link>
                        <Link href="https://aquamobot.substack.com/p/decoding-history-why-we-built-an" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-600 transition" title="Read our Brand Story on Substack">Blog</Link>
                        <Link href="https://dev.to/steplead/building-an-ai-powered-engine-for-traditional-color-preservation-4e3h" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-600 transition" title="Read our Engineering Story on Dev.to">Dev.to Story</Link>
                        <Link href="/contact" className="hover:text-neutral-600 transition" title="Contact Us">Contact</Link>
                        <Link href="/privacy-policy" className="hover:text-neutral-600 transition" title="Privacy Policy">Privacy Policy</Link>
                        <Link href="/terms-of-service" className="hover:text-neutral-600 transition" title="Terms of Service">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
