'use client';

import React from 'react';
import Link from 'next/link';
import chineseColors from '../data/chineseColors.json';

// Helper to convert hex to HSL
function hexToHsl(hex) {
    let r = parseInt(hex.slice(1, 3), 16) / 255;
    let g = parseInt(hex.slice(3, 5), 16) / 255;
    let b = parseInt(hex.slice(5, 7), 16) / 255;

    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0; // achromatic
    } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return { h: h * 360, s: s * 100, l: l * 100 };
}

// Helper to convert HSL to Hex
function hslToHex(h, s, l) {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`.toUpperCase();
}

// Helper to find the nearest color in our chineseColors database
function findNearestChineseColor(hex) {
    // Simple Euclidean distance distance in RGB space
    const r1 = parseInt(hex.slice(1, 3), 16);
    const g1 = parseInt(hex.slice(3, 5), 16);
    const b1 = parseInt(hex.slice(5, 7), 16);

    let minDistance = Infinity;
    let nearest = null;

    chineseColors.forEach(color => {
        const r2 = parseInt(color.hex.slice(1, 3), 16);
        const g2 = parseInt(color.hex.slice(3, 5), 16);
        const b2 = parseInt(color.hex.slice(5, 7), 16);

        const distance = Math.sqrt(
            Math.pow(r2 - r1, 2) + Math.pow(g2 - g1, 2) + Math.pow(b2 - b1, 2)
        );

        if (distance < minDistance) {
            minDistance = distance;
            nearest = color;
        }
    });

    return nearest;
}

const ColorHarmony = ({ hex }) => {
    const hsl = hexToHsl(hex);

    // Complementary (+180)
    const compHex = hslToHex((hsl.h + 180) % 360, hsl.s, hsl.l);
    const compColor = findNearestChineseColor(compHex);

    // Triadic (+120, +240)
    const triad1Hex = hslToHex((hsl.h + 120) % 360, hsl.s, hsl.l);
    const triad2Hex = hslToHex((hsl.h + 240) % 360, hsl.s, hsl.l);
    const triad1Color = findNearestChineseColor(triad1Hex);
    const triad2Color = findNearestChineseColor(triad2Hex);

    const schemes = [
        { name: 'Complementary', colors: [compColor] },
        { name: 'Triadic', colors: [triad1Color, triad2Color] }
    ];

    return (
        <div className="mt-12">
            <h3 className="text-sm font-bold uppercase text-neutral-400 tracking-wider mb-6">Color Harmonies</h3>
            <div className="space-y-8">
                {schemes.map(scheme => (
                    <div key={scheme.name}>
                        <p className="text-sm text-neutral-500 mb-3">{scheme.name}</p>
                        <div className="flex gap-4">
                            {scheme.colors.map((color, idx) => (
                                <Link
                                    key={idx}
                                    href={`/color/${color.id}`}
                                    className="group flex flex-col items-center gap-2"
                                >
                                    <div
                                        className="w-16 h-16 rounded-xl shadow-sm border border-black/5 group-hover:scale-105 transition-transform"
                                        style={{ backgroundColor: color.hex }}
                                    />
                                    <span className="text-xs text-neutral-600 font-medium group-hover:text-neutral-900">{color.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ColorHarmony;
