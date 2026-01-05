"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getRandomColors } from '@/utils/colorData';

/**
 * FryingBeansFooter Component (Protocol 5: Dynamic Rotation Strategy)
 * Implements "stir fry" internal linking for deep page discovery
 *
 * Strategy: Rotate recommended links every hour/day to ensure crawlers
 * eventually touch every deep page (the "cold beans")
 */
export default function FryingBeansFooter() {
    const [beans, setBeans] = useState([]);
    const [rotationKey, setRotationKey] = useState('');

    useEffect(() => {
        // Hydration mismatch avoidance: only randomize on client
        setBeans(getRandomColors(12));

        // Time-based rotation: Change seed every hour
        const hour = Math.floor(Date.now() / (1000 * 60 * 60));
        setRotationKey(`rotation-${hour}`);

        // Optional: Auto-rotate every 60 seconds for demo purposes
        const interval = setInterval(() => {
            setBeans(getRandomColors(12));
        }, 60000); // 60 seconds

        return () => clearInterval(interval);
    }, []);

    if (beans.length === 0) return null;

    // SEO: Add structured data for these links
    const schema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Discover More Colors",
        "description": "Dynamically rotated color recommendations for exploration",
        "numberOfItems": beans.length,
        "itemListElement": beans.map((color, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "url": `https://imagecolorpickerai.com/color/${color.name.toLowerCase().replace(/\s+/g, '-')}`,
            "name": color.name
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <div className="border-t border-neutral-100 bg-neutral-50 py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-wider flex items-center gap-2">
                            <span className="text-lg">🍳</span>
                            Discover More Colors
                            <span className="text-xs text-neutral-300 font-normal normal-case">
                                (Rotates every hour)
                            </span>
                        </h3>
                        <div className="text-xs text-neutral-400">
                            Seed: {rotationKey}
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {beans.map(color => (
                            <Link
                                key={color.hex}
                                href={`/color/${color.name.toLowerCase().replace(/\s+/g, '-')}`}
                                className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-neutral-200 hover:border-neutral-300 hover:shadow-md transition-all shadow-sm"
                                title={`Explore ${color.name} (${color.hex})`}
                            >
                                <span
                                    className="w-3 h-3 rounded-full border border-neutral-100 flex-shrink-0"
                                    style={{ backgroundColor: color.hex }}
                                />
                                <span className="text-xs font-medium text-neutral-600">
                                    {color.name}
                                </span>
                            </Link>
                        ))}
                    </div>
                    <p className="text-xs text-neutral-400 mt-4">
                        💡 <strong>Protocol 5:</strong> These links rotate automatically to help search engines
                        discover all 500+ colors in our database. Check back in an hour for new recommendations!
                    </p>
                </div>
            </div>
        </>
    );
}
