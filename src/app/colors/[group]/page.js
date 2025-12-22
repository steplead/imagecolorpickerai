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
            canonical: `/colors/${group.toLowerCase()}`,
            languages: {
                'en': `/colors/${group.toLowerCase()}`,
                'zh-Hans': `/zh/colors/${group.toLowerCase()}`,
                'ja': `/ja/colors/${group.toLowerCase()}`,
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
