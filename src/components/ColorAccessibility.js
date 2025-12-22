'use client';

import { useState } from 'react';
import { Eye, CheckCircle, XCircle } from 'lucide-react';
import { getContrastRatio, getWCAGScore, simulateColorBlindness } from '../utils/colorMetrics';
import AccessibilityBadge from './AccessibilityBadge';

export default function ColorAccessibility({ hex }) {
    // 1. Contrast Logic
    const whiteRatio = getContrastRatio(hex, '#FFFFFF');
    const blackRatio = getContrastRatio(hex, '#000000');
    const whiteScore = getWCAGScore(whiteRatio);
    const blackScore = getWCAGScore(blackRatio);

    // 2. Simulation Logic
    const simulations = [
        { type: 'protanopia', label: 'Protanopia (No Red)', desc: '1% of males' },
        { type: 'deuteranopia', label: 'Deuteranopia (No Green)', desc: '1% of males' },
        { type: 'tritanopia', label: 'Tritanopia (No Blue)', desc: 'Rare' },
        { type: 'achromatopsia', label: 'Achromatopsia (Mono)', desc: 'Very Rare' },
    ];

    return (
        <div className="mt-12 bg-white rounded-2xl shadow-xl overflow-hidden border border-neutral-100 p-8">
            <h3 className="text-lg font-bold text-neutral-900 mb-6 flex items-center gap-2">
                <Eye className="w-5 h-5 text-indigo-600" />
                Accessibility & Design Safety
            </h3>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* Column 1: Contrast Checker */}
                <div>
                    <h4 className="text-sm font-bold uppercase text-neutral-400 tracking-wider mb-4">
                        WCAG 2.1 Contrast (Background: {hex})
                    </h4>
                    <div className="space-y-4">
                        <AccessibilityBadge ratio={whiteRatio} score={whiteScore} backgroundHex={hex} textHex="#FFFFFF" />
                        <AccessibilityBadge ratio={blackRatio} score={blackScore} backgroundHex={hex} textHex="#000000" />
                    </div>
                    <p className="text-xs text-neutral-400 mt-4 leading-relaxed">
                        * WCAG AA requires 4.5:1 for normal text. AAA requires 7:1. Large text requires 3:1.
                    </p>
                </div>

                {/* Column 2: Color Blindness Simulator */}
                <div>
                    <h4 className="text-sm font-bold uppercase text-neutral-400 tracking-wider mb-4">
                        Color Blindness Simulation
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                        {simulations.map((sim) => {
                            const simHex = simulateColorBlindness(hex, sim.type);
                            return (
                                <div key={sim.type} className="flex flex-col gap-2">
                                    <div
                                        className="h-16 w-full rounded-lg border border-neutral-200 shadow-sm"
                                        style={{ backgroundColor: simHex }}
                                    />
                                    <div>
                                        <div className="text-xs font-bold text-neutral-700">{sim.label}</div>
                                        <div className="text-[10px] text-neutral-400 font-mono">{simHex}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </div>
    );
}
