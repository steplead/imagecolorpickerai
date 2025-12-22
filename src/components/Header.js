'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Palette } from 'lucide-react';

const ARCHETYPE_LINKS = [
    { id: 'red', name: 'Imperial Red', href: '/colors/red' },
    { id: 'blue', name: 'Misty Blue', href: '/colors/blue' },
    { id: 'green', name: 'Jade Valley', href: '/colors/green' },
    { id: 'scan', name: 'AI Analyst', href: '/scan' },
];

const LOCALES = [
    { code: 'en', name: 'English', path: '/' },
    { code: 'zh', name: '中文', path: '/zh' },
    { code: 'ja', name: '日本語', path: '/ja' },
];

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100/50">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group transition-all" title="Image Color Picker AI - Home">
                    <div className="relative p-1 rounded-xl group-hover:bg-indigo-50 transition-all duration-300">
                        {/* Neon Glow Layer */}
                        <div className="absolute inset-0 bg-indigo-500/0 group-hover:bg-indigo-500/10 blur-xl rounded-full transition-all duration-500" />
                        <img
                            src="/icon.png"
                            alt="Logo"
                            className="w-8 h-8 relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-sm rounded-lg"
                        />
                    </div>
                    <span className="font-black text-neutral-900 tracking-tighter hidden sm:block text-lg">
                        ImageColorPicker<span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-amber-500">AI</span>
                    </span>
                </Link>

                {/* Navigation & Locale */}
                <div className="flex items-center gap-2 sm:gap-6">
                    <nav className="hidden md:flex items-center gap-2">
                        {ARCHETYPE_LINKS.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.id}
                                    href={link.href}
                                    title={`Explore ${link.name} Colors`}
                                    className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${isActive
                                        ? 'bg-neutral-900 text-white shadow-lg'
                                        : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="h-4 w-[1px] bg-neutral-200 hidden md:block" />

                    <div className="flex items-center gap-1 bg-neutral-100 p-1 rounded-full">
                        {LOCALES.map((loc) => {
                            const isActive = pathname.startsWith(loc.path) && (loc.path !== '/' || pathname === '/');
                            // Precise check for root vs others
                            const isExact = loc.code === 'en' ? pathname === '/' || (!pathname.startsWith('/zh') && !pathname.startsWith('/ja')) : pathname.startsWith(loc.path);

                            return (
                                <Link
                                    key={loc.code}
                                    href={loc.path}
                                    className={`px-2 py-1 rounded-full text-[10px] font-bold transition-all ${isExact
                                        ? 'bg-white text-neutral-900 shadow-sm'
                                        : 'text-neutral-400 hover:text-neutral-600'
                                        }`}
                                >
                                    {loc.code.toUpperCase()}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </header>
    );
}
