"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getRandomColors } from '@/utils/colorData';

export default function FryingBeansFooter() {
    const [beans, setBeans] = useState([]);

    useEffect(() => {
        // Hydration mismatch avoidance: only randomize on client
        setBeans(getRandomColors(12));
    }, []);

    if (beans.length === 0) return null;

    return (
        <div className="border-t border-neutral-100 bg-neutral-50 py-12">
            <div className="max-w-7xl mx-auto px-4">
                <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-6">
                    Discover More Colors (Frying Beans 🍳)
                </h3>
                <div className="flex flex-wrap gap-3">
                    {beans.map(color => (
                        <Link
                            key={color.hex}
                            href={`/color/${color.name.toLowerCase().replace(/\s+/g, '-')}`}
                            className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors shadow-sm"
                        >
                            <span
                                className="w-3 h-3 rounded-full border border-neutral-100"
                                style={{ backgroundColor: color.hex }}
                            />
                            <span className="text-xs font-medium text-neutral-600">
                                {color.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
