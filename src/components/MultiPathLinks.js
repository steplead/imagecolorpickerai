import Link from 'next/link';
import { TrendingUp, Tag, FolderOpen, Calendar } from 'lucide-react';

/**
 * MultiPathLinks Component (Protocol 5: "Stars Surrounding the Moon")
 * Creates multiple logical paths to high-value pages for SEO
 *
 * Strategy: Each important page should have 4+ entry paths:
 * 1. Direct (Home → Detail)
 * 2. Categorical (Home → Category → Detail)
 * 3. Attribute-based (Home → Tag → Detail)
 * 4. Behavioral (Popular this Week → Detail)
 * 5. Temporal (Seasonal/Trending → Detail)
 */
export default function MultiPathLinks({ color, locale = 'en' }) {
    const baseUrl = locale === 'en' ? '' : `/${locale}`;

    // Generate multiple navigation paths
    const paths = [
        {
            icon: FolderOpen,
            title: 'Explore Collection',
            description: `View all ${color.collectionId} colors`,
            href: `/colors/${color.collectionId}`,
            color: 'text-blue-600'
        },
        {
            icon: Tag,
            title: 'By Tag',
            description: `See more ${color.tags?.[0] || 'neutral'} colors`,
            href: `/colors/${color.tags?.[0] || 'neutral'}`,
            color: 'text-purple-600'
        },
        {
            icon: TrendingUp,
            title: 'Trending This Week',
            description: 'Popular colors right now',
            href: '/colors/trending',
            color: 'text-orange-600'
        },
        {
            icon: Calendar,
            title: 'Seasonal Palettes',
            description: `${new Date().toLocaleString('default', { month: 'long' })} favorites`,
            href: '/colors/seasonal',
            color: 'text-green-600'
        }
    ];

    // Add related colors for visual appeal
    const relatedPaths = [
        { name: 'Similar Colors', href: `/colors/similar/${color.id}` },
        { name: 'Harmonies', href: `/combine/${color.id}` },
        { name: 'Compare', href: `/compare/${color.id}-vs-red` },
        { name: 'Design Ideas', href: `/ideas?color=${color.id}` }
    ];

    return (
        <div className="space-y-6">
            {/* Primary Navigation Paths */}
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
                <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-4">
                    Explore This Color
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {paths.map((path, index) => {
                        const Icon = path.icon;
                        return (
                            <Link
                                key={index}
                                href={`${baseUrl}${path.href}`}
                                className="group flex items-start gap-3 p-4 rounded-lg border border-neutral-100 hover:border-neutral-300 hover:bg-neutral-50 transition"
                                title={path.description}
                            >
                                <div className={`p-2 bg-neutral-100 rounded-lg group-hover:bg-white transition ${path.color}`}>
                                    <Icon className="w-4 h-4" />
                                </div>
                                <div className="flex-1">
                                    <div className="font-medium text-neutral-900 group-hover:text-neutral-700">
                                        {path.title}
                                    </div>
                                    <div className="text-xs text-neutral-500 mt-1">
                                        {path.description}
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Secondary Related Actions */}
            <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-xl border border-neutral-200 p-6">
                <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-3">
                    More Ways to Discover
                </h4>
                <div className="flex flex-wrap gap-2">
                    {relatedPaths.map((path, index) => (
                        <Link
                            key={index}
                            href={`${baseUrl}${path.href}`}
                            className="px-3 py-1.5 bg-white text-neutral-700 text-sm rounded-lg border border-neutral-200 hover:border-neutral-300 hover:bg-white transition"
                            title={path.name}
                        >
                            {path.name}
                        </Link>
                    ))}
                </div>
            </div>

            {/* SEO: Schema.org WebSite navigation links */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "ImageColorPickerAI",
                        "url": "https://imagecolorpickerai.com",
                        "potentialAction": [
                            {
                                "@type": "SearchAction",
                                "target": "https://imagecolorpickerai.com/colors?q={search_term_string}",
                                "query-input": "required name=search_term_string"
                            }
                        ]
                    })
                }}
            />
        </div>
    );
}
