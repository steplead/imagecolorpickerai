import { getAllColors } from '../../../utils/colorData';
import { ColorsCollectionView } from '../../../components/ColorsCollectionView';

// 1. Generate Static Params for all Tags + Collections
export async function generateStaticParams() {
    const allGroups = new Set(['chinese', 'japanese']); // Explicitly add collections
    const colors = getAllColors();

    colors.forEach(c => {
        if (c.tags) c.tags.forEach(t => allGroups.add(t.toLowerCase()));
    });

    return Array.from(allGroups).map(group => ({
        group: group, // match [group] param name
    }));
}

// Per-collection/tag title & description templates (fixed 2026-08-19).
// Previously every group was labeled "Traditional Chinese Code Palette",
// which mislabeled Japanese/Pantone/Nature and generic tag pages.
const GROUP_META = {
    chinese: {
        title: 'Traditional Chinese Colors - Hex Codes & Meanings | ImageColorPickerAI',
        description: 'Explore the Traditional Chinese Color system: 85+ historical colors with hex codes, cultural meanings, and design palettes.',
    },
    japanese: {
        title: 'Traditional Japanese Colors - Hex Codes & Meanings | ImageColorPickerAI',
        description: 'Explore the Traditional Japanese color system: Heian-era and seasonal colors with hex codes, meanings, and design palettes.',
    },
    pantone: {
        title: 'Pantone 2025 Color Trends - Hex Codes | ImageColorPickerAI',
        description: 'Discover the forecasted Pantone 2025 color trends with hex codes, palettes, and design inspiration.',
    },
    nature: {
        title: 'Nature & Earth Color Palettes - Hex Codes | ImageColorPickerAI',
        description: 'Explore nature-inspired earth tone palettes with hex codes, meanings, and design inspiration.',
    },
};

// 2. Generate Metadata
export async function generateMetadata({ params }) {
    const { group } = await params;
    if (!group) return { title: 'Colors' };

    const decodedGroup = decodeURIComponent(group);
    const capitalized = decodedGroup.charAt(0).toUpperCase() + decodedGroup.slice(1);

    const meta = GROUP_META[decodedGroup.toLowerCase()] || {
        title: `${capitalized} Colors - Traditional Color Palette | ImageColorPickerAI`,
        description: `Explore our curated collection of ${decodedGroup} traditional colors. Find hex codes, meanings, and aesthetic inspirations for ${decodedGroup} shades.`,
    };

    return {
        title: meta.title,
        description: meta.description,
        alternates: {
            canonical: `/colors/${group.toLowerCase()}`,
            languages: {
                'en': `/colors/${group.toLowerCase()}`,
                'zh-Hans': `/zh/colors/${group.toLowerCase()}`,
                'ja': `/ja/colors/${group.toLowerCase()}`,
                'es': `/es/colors/${group.toLowerCase()}`,
                'fr': `/fr/colors/${group.toLowerCase()}`,
                'de': `/de/colors/${group.toLowerCase()}`,
                'pt': `/pt/colors/${group.toLowerCase()}`,
                'x-default': `/colors/${group.toLowerCase()}`,
            },
        },
    };
}

// 3. Page Component
export default async function Page({ params }) {
    const resolvedParams = await params;
    return <ColorsCollectionView params={resolvedParams} locale="en" />;
}
