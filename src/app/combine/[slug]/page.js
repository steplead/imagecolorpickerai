import { getAllColors, getColorBySlug } from '@/utils/colorData';
import { getContrastRatio, getWCAGScore } from '@/utils/colorMetrics';
import Link from 'next/link';
import AdPlacement from '@/components/AdPlacement';
import AccessibilityBadge from '@/components/AccessibilityBadge';

export const runtime = 'edge';

// Protocol 5: Static Generation of Combinations is too large (250k pages).
// We will use generateStaticParams for a "curated" set, or rely on ISR/SSR.
// For now, we will allow dynamic rendering but cache heavily.

export async function generateMetadata({ params }) {
    const slug = params.slug; // e.g., "red-and-blue"
    const title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

    return {
        title: `${title} - Color Combination | ImageColorPickerAI`,
        description: `See how ${title} look together. Check contrast ratio, accessibility score, and design examples for this color pairing.`,
        alternates: {
            canonical: `https://imagecolorpickerai.com/combine/${slug}`,
        }
    };
}

export default function CombinationPage({ params }) {
    const slug = params.slug;
    const parts = slug.split('-and-');

    if (parts.length !== 2) {
        return <div className="p-12 text-center">Invalid combination URL. Format: /combine/color1-and-color2</div>;
    }

    const color1 = getColorBySlug(parts[0]);
    const color2 = getColorBySlug(parts[1]);

    if (!color1 || !color2) {
        return <div className="p-12 text-center">One or both colors not found in our database.</div>;
    }

    const contrast = getContrastRatio(color1.hex, color2.hex).toFixed(2);
    const wcag = getWCAGScore(contrast);

    return (
        <div className="max-w-4xl mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-5xl font-black text-neutral-900 mb-4 capitalize">
                    {color1.name} <span className="text-neutral-300">&</span> {color2.name}
                </h1>
                <p className="text-xl text-neutral-600">
                    Aesthetics, Contrast, and Design Usage for this pair.
                </p>
            </div>

            {/* Visualizer */}
            <div className="grid grid-cols-1 md:grid-cols-2 h-96 rounded-3xl overflow-hidden shadow-2xl mb-12">
                <div
                    className="flex items-center justify-center h-full"
                    style={{ backgroundColor: color1.hex, color: color2.hex }}
                >
                    <div className="text-center">
                        <span className="block text-2xl font-bold mb-2">{color1.hex}</span>
                        <span className="opacity-75">{color1.name}</span>
                    </div>
                </div>
                <div
                    className="flex items-center justify-center h-full"
                    style={{ backgroundColor: color2.hex, color: color1.hex }}
                >
                    <div className="text-center">
                        <span className="block text-2xl font-bold mb-2">{color2.hex}</span>
                        <span className="opacity-75">{color2.name}</span>
                    </div>
                </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm text-center">
                    <h3 className="text-sm font-bold text-neutral-400 uppercase mb-2">Contrast Ratio</h3>
                    <div className="text-4xl font-black text-neutral-900">{contrast}:1</div>
                </div>
                <div className="col-span-2">
                    <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm flex items-center justify-between">
                        <div>
                            <h3 className="text-sm font-bold text-neutral-400 uppercase mb-2">WCAG Compliance</h3>
                            <p className="text-neutral-600 max-w-sm">
                                Can these colors be used for text and background?
                            </p>
                        </div>
                        <div className={`px-4 py-2 rounded-xl text-xl font-bold ${wcag === 'Fail' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                            {wcag}
                        </div>
                    </div>
                </div>
            </div>

            <AdPlacement slot="combine-mid" className="mb-12" />

            {/* Individual Links */}
            <div className="flex justify-center gap-6 mb-12">
                <Link
                    href={`/color/${color1.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="px-6 py-3 bg-white border border-neutral-200 rounded-xl hover:bg-neutral-50 font-bold"
                >
                    View {color1.name} Details
                </Link>
                <Link
                    href={`/color/${color2.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="px-6 py-3 bg-white border border-neutral-200 rounded-xl hover:bg-neutral-50 font-bold"
                >
                    View {color2.name} Details
                </Link>
            </div>
        </div>
    );
}
