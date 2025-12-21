'use client';

import { useState } from 'react';
import { Sofa, Shirt, Layout, Monitor } from 'lucide-react';

export default function Visualizer({ colorHex }) {
    const [scene, setScene] = useState('interior'); // interior | fashion | ui

    return (
        <div className="mt-12 pt-12 border-t border-slate-100">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h3 className="text-2xl font-serif font-bold text-slate-800">Visual Studio</h3>
                    <p className="text-slate-500">Preview this color in real-world contexts.</p>
                </div>

                {/* Scene Switcher */}
                <div className="flex bg-slate-100 p-1 rounded-lg">
                    <button
                        onClick={() => setScene('interior')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${scene === 'interior' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                        <Sofa className="w-4 h-4" />
                        <span className="hidden sm:inline">Interior</span>
                    </button>
                    <button
                        onClick={() => setScene('fashion')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${scene === 'fashion' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                        <Shirt className="w-4 h-4" />
                        <span className="hidden sm:inline">Fashion</span>
                    </button>
                    <button
                        onClick={() => setScene('ui')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${scene === 'ui' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                        <Monitor className="w-4 h-4" />
                        <span className="hidden sm:inline">Web UI</span>
                    </button>
                </div>
            </div>

            {/* Visualizer Stage */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden relative min-h-[400px] flex items-center justify-center">

                {/* INTERIOR SCENE */}
                {scene === 'interior' && (
                    <svg viewBox="0 0 800 600" className="w-full h-full max-h-[500px]" preserveAspectRatio="xMidYMid slice">
                        {/* Background Wall */}
                        <rect x="0" y="0" width="800" height="450" fill={colorHex} fillOpacity="0.2" />

                        {/* Floor */}
                        <rect x="0" y="450" width="800" height="150" fill="#e2e8f0" />

                        {/* Sofa (Main Color) */}
                        <g transform="translate(200, 250)">
                            {/* Sofa Back */}
                            <path d="M50 50 L350 50 L350 150 L50 150 Z" fill={colorHex} />
                            {/* Sofa Arms */}
                            <rect x="20" y="80" width="40" height="120" rx="10" fill={colorHex} filter="brightness(0.9)" />
                            <rect x="340" y="80" width="40" height="120" rx="10" fill={colorHex} filter="brightness(0.9)" />
                            {/* Cushions */}
                            <rect x="70" y="80" width="120" height="100" rx="4" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="2" />
                            <rect x="210" y="80" width="120" height="100" rx="4" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="2" />
                        </g>

                        {/* Lamp */}
                        <g transform="translate(600, 150)">
                            <path d="M50 0 L100 80 L0 80 Z" fill="#1e293b" />
                            <rect x="45" y="80" width="10" height="300" fill="#cbd5e1" />
                            <rect x="20" y="380" width="60" height="10" rx="2" fill="#1e293b" />
                        </g>

                        {/* Plant */}
                        <g transform="translate(100, 320)">
                            <path d="M30 150 Q0 50 60 0 Q120 50 90 150 Z" fill="#15803d" />
                            <rect x="40" y="150" width="40" height="40" fill="#78350f" />
                        </g>
                    </svg>
                )}

                {/* FASHION SCENE */}
                {scene === 'fashion' && (
                    <svg viewBox="0 0 800 600" className="w-full h-full max-h-[500px]" preserveAspectRatio="xMidYMid meet">
                        <defs>
                            <filter id="shadow">
                                <feDropShadow dx="0" dy="10" stdDeviation="5" floodOpacity="0.2" />
                            </filter>
                        </defs>
                        <rect x="0" y="0" width="800" height="600" fill="#f8fafc" />

                        {/* T-Shirt */}
                        <g transform="translate(250, 100)" filter="url(#shadow)">
                            <path
                                d="M100 0 C130 20 170 20 200 0 L280 40 L260 100 L200 80 L200 350 L100 350 L100 80 L40 100 L20 40 Z"
                                fill={colorHex}
                                stroke="#000"
                                strokeOpacity="0.1"
                                strokeWidth="1"
                            />
                            {/* Collar Details */}
                            <path d="M100 0 C130 20 170 20 200 0" fill="none" stroke="#000" strokeOpacity="0.1" strokeWidth="3" />
                        </g>

                        {/* Tag */}
                        <g transform="translate(500, 200)">
                            <text x="0" y="0" fontFamily="serif" fontSize="24" fill="#334155" fontWeight="bold">Classic Tee</text>
                            <text x="0" y="30" fontFamily="monospace" fontSize="16" fill="#64748b">{colorHex.toUpperCase()}</text>
                            <rect x="0" y="40" width="40" height="40" rx="4" fill={colorHex} stroke="#cbd5e1" />
                        </g>
                    </svg>
                )}

                {/* UI SCENE */}
                {scene === 'ui' && (
                    <svg viewBox="0 0 800 600" className="w-full h-full max-h-[500px]" preserveAspectRatio="xMidYMid meet">
                        <rect x="0" y="0" width="800" height="600" fill="#e2e8f0" />

                        {/* Laptop */}
                        <g transform="translate(100, 100)">
                            {/* Screen Bezel */}
                            <rect x="0" y="0" width="600" height="350" rx="12" fill="#1e293b" />
                            {/* Screen Area */}
                            <rect x="20" y="20" width="560" height="310" fill="white" />

                            {/* Website UI */}
                            <g transform="translate(20, 20)">
                                {/* Hero Section with Color */}
                                <rect x="0" y="0" width="560" height="200" fill={colorHex} fillOpacity="0.15" />
                                <rect x="40" y="160" width="120" height="30" rx="4" fill={colorHex} />
                                <text x="40" y="80" fontFamily="sans-serif" fontSize="24" fontWeight="bold" fill="#1e293b">Headline Text</text>
                                <rect x="40" y="100" width="200" height="10" rx="2" fill="#cbd5e1" />
                                <rect x="40" y="120" width="160" height="10" rx="2" fill="#cbd5e1" />

                                {/* Features */}
                                <circle cx="100" cy="250" r="20" fill={colorHex} fillOpacity="0.5" />
                                <circle cx="280" cy="250" r="20" fill={colorHex} fillOpacity="0.5" />
                                <circle cx="460" cy="250" r="20" fill={colorHex} fillOpacity="0.5" />
                            </g>

                            {/* Base */}
                            <path d="M-20 350 L620 350 L620 365 Q620 375 610 375 L-10 375 Q-20 375 -20 365 Z" fill="#334155" />
                        </g>
                    </svg>
                )}

            </div>

            <p className="text-center text-xs text-slate-400 mt-4">
                *Simulated preview. Actual appearance may vary by material.
            </p>
        </div>
    );
}
