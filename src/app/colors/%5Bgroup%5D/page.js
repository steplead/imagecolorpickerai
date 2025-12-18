import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import chineseColors from '../../../data/chineseColors.json';
import { getColorsByTag } from '../../../utils/colorUtils';

// 1. Generate Static Params for all Tags (normalized to lowercase)
export async function generateStaticParams() {
    const allTags = new Set();
    chineseColors.forEach(c => {
        if (c.tags) c.tags.forEach(t => allTags.add(t.toLowerCase()));
    });

    return Array.from(allTags).map(tag => ({
        group: tag,
    }));
}

// 2. Generate Metadata
export async function generateMetadata({ params }) {
    const { group } = await params;
    if (!group) return { title: 'Colors' };

    const decodedGroup = decodeURIComponent(group);
    const capitalized = decodedGroup.charAt(0).toUpperCase() + decodedGroup.slice(1);
    return {
        title: `${capitalized} Colors - Traditional Chinese Code Palette | ImageColorPickerAI`,
        description: `Explore our collection of ${decodedGroup} traditional Chinese colors. Find Hex codes, meanings, and aesthetic inspirations for ${decodedGroup} shades.`,
        alternates: {
            canonical: `https://imagecolorpickerai.com/colors/${group}`,
        },
    };
}

// 3. Page Component
export default async function Page({ params }) {
    const { group } = await params;
    if (!group) return notFound();

    const decodedGroup = decodeURIComponent(group);
    const colors = getColorsByTag(decodedGroup);

    if (!colors || colors.length === 0) {
        notFound();
    }

    const capitalized = decodedGroup.charAt(0).toUpperCase() + decodedGroup.slice(1);

    return (
        <div className="min-h-screen bg-neutral-50 p-4 py-12 font-sans">
            <div className="max-w-4xl mx-auto">
                <div className="mb-10">
                    <Link href="/" className="inline-flex items-center text-sm text-neutral-400 hover:text-neutral-900 mb-4 transition">
                        <ArrowLeft className="w-4 h-4 mr-1" /> Back to Tool
                    </Link>
                    <h1 className="text-3xl font-bold text-neutral-900 mb-2">
                        <span className="capitalize">{group}</span> Colors
                    </h1>
                    <p className="text-neutral-500">
                        Found {colors.length} traditional Chinese colors tagged as "{group}".
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {colors.map((color) => (
                        <Link
                            key={color.id}
                            href={`/color/${color.id}`}
                            className="block group bg-white rounded-xl shadow-sm hover:shadow-md transition border border-neutral-100 overflow-hidden"
                        >
                            <div
                                className="h-32 w-full transition-transform duration-500 group-hover:scale-105"
                                style={{ backgroundColor: color.hex }}
                            ></div>
                            <div className="p-4">
                                <h3 className="font-bold text-neutral-900 text-lg group-hover:text-red-900 transition">{color.name}</h3>
                                <p className="text-sm font-serif text-neutral-500 italic mb-2">{color.chinese} ({color.pinyin})</p>
                                <div className="flex justify-between items-center mt-4">
                                    <span className="font-mono text-xs text-neutral-400 bg-neutral-50 px-2 py-1 rounded">{color.hex}</span>
                                    <ArrowRight className="w-4 h-4 text-neutral-300 group-hover:text-red-600 transition" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Navigation to other tags */}
                <div className="mt-16 pt-8 border-t border-neutral-200">
                    <h3 className="text-sm font-bold uppercase text-neutral-400 tracking-wider mb-4">Explore Other Categories</h3>
                    <div className="flex flex-wrap gap-2">
                        {['red', 'blue', 'green', 'warm', 'cool', 'nature'].map(tag => (
                            <Link
                                key={tag}
                                href={`/colors/${tag}`}
                                className={`px-3 py-1 text-sm rounded-full border transition ${tag === group ? 'bg-neutral-900 text-white border-neutral-900' : 'bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400'}`}
                            >
                                {tag}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
