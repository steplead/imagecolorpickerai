import { getAllColors } from '../utils/colorData';
import { IDEA_CATEGORIES } from '../utils/ideaUtils';

// ---------------------------------------------------------------------------
// Content revision dates (added 2026-09-30).
//
// Every url used to carry `new Date()` — the BUILD date — so all 899 urls
// shipped the same lastmod and were re-stamped on every deploy, including pages
// whose content had not changed. Google only treats lastmod as a signal when it
// is demonstrably accurate, so a site-wide build timestamp is worse than none;
// one identical date across the whole sitemap also advertises "bulk generated
// on a single day", which is the wrong hint for the pages sitting in
// "crawled – currently not indexed".
//
// Each value below is the date the content behind that group last actually
// changed, taken from git history. Rule: when a group's content changes, bump
// its date here.
//
// `changeFrequency` was dropped from every entry: Google has stated since 2023
// that it ignores the field, so it was pure noise.
// `priority` is intentionally left as-is (also ignored by Google, but outside
// the scope of this change).
// ---------------------------------------------------------------------------
const REV = {
    // Hand-written pages: home, static hubs, locale hubs, /ideas/*.
    hub: '2026-09-30',
    // /color-personality-test — separate feature, last changed on its own day.
    personality: '2026-09-03',
    // /colors/* collection hubs: social metadata + the pantone collection.
    colors: '2026-09-30',
    // /color/* and the pair pages are generated from the colour datasets, so
    // their lastmod is the dataset's own revision date.
    data: {
        chinese: '2025-12-18',
        japanese: '2025-12-22',
        pantone: '2025-12-22',
        nature: '2025-12-22',
    },
};

const dataRev = (collectionId) => REV.data[collectionId] || REV.data.chinese;

// A pair page's content changes when either of its two colours changes.
const pairRev = (a, b) => (dataRev(a.collectionId) > dataRev(b.collectionId)
    ? dataRev(a.collectionId)
    : dataRev(b.collectionId));

const hubRev = (route) => (route === '/color-personality-test' ? REV.personality : REV.hub);

export default function sitemap() {
    const baseUrl = 'https://imagecolorpickerai.com';
    const allColors = getAllColors();

    // 1. Static Routes (The Hubs)
    const routes = [
        '',
        '/scan',
        '/ideas',
        '/about',
        '/contact',
        '/widget',
        '/privacy-policy',
        '/terms-of-service',
        '/color-personality-test',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: hubRev(route),
        priority: route === '' ? 1.0 : 0.9,
    }));

    // 2. Color Detail Pages (The Long Tail)
    const colorRoutes = allColors.map((color) => ({
        url: `${baseUrl}/color/${color.id}`,
        lastModified: dataRev(color.collectionId),
        priority: 0.8,
    }));

    // 3. Collection Pages (The Categories)
    // Extract unique collections (chinese, japanese, pantone, nature)
    const collections = [...new Set(allColors.map(c => c.collectionId || 'chinese'))];

    const collectionRoutes = collections.map((group) => ({
        url: `${baseUrl}/colors/${group}`,
        lastModified: REV.colors,
        priority: 0.9,
    }));

    // 4. Idea Hub Pages (The Intent Buckets)
    const ideaRoutes = IDEA_CATEGORIES.map((cat) => ({
        url: `${baseUrl}/ideas/${cat.id}`,
        lastModified: REV.hub,
        priority: 0.9,
    }));

    // 5. Comparison Pages (Legacy + Programmatic)
    // Deduped 2026-08-19: the same color pair was generated under multiple
    // tags (e.g. cinnabar-vs-persimmon-red under 'red' and 'warm'), producing
    // 6 duplicate <url> entries. A Set on the canonical key removes them at
    // generation time.
    const vsRoutes = [];
    // Only generate a small subset for sitemap to avoid bloat,
    // relying on internal linking for the rest.
    const tags = ['red', 'blue', 'green', 'warm'];
    const seenCompare = new Set();
    const seenCombine = new Set();

    tags.forEach(tag => {
        const colors = allColors.filter(c => c.tags && c.tags.includes(tag)).slice(0, 3);
        for (let i = 0; i < colors.length; i++) {
            for (let j = i + 1; j < colors.length; j++) {
                const compareKey = `${colors[i].id}-vs-${colors[j].id}`;
                const combineKey = `${colors[i].id}-and-${colors[j].id}`;
                const pairLastModified = pairRev(colors[i], colors[j]);
                // Legacy Compare
                if (!seenCompare.has(compareKey)) {
                    seenCompare.add(compareKey);
                    vsRoutes.push({
                        url: `${baseUrl}/compare/${compareKey}`,
                        lastModified: pairLastModified,
                        priority: 0.7,
                    });
                }
                // Protocol 5 Combine (Seed)
                if (!seenCombine.has(combineKey)) {
                    seenCombine.add(combineKey);
                    vsRoutes.push({
                        url: `${baseUrl}/combine/${combineKey}`,
                        lastModified: pairLastModified,
                        priority: 0.7,
                    });
                }
            }
        }
    });

    // [2026-09-30 → 2026-10-05] Locale direction A (convergence), final step.
    // ALL locale template routes are now withdrawn from the sitemap:
    //   - the 702 collection/color locale URLs were removed 2026-09-30
    //   - the 48 static locale routes (6 langs x {home, scan, ideas, about,
    //     contact, widget, privacy-policy, terms-of-service}) are removed here
    // They remain HTTP 200 and now carry <meta name="robots" content="noindex">
    // (added to the 48 template page.js files), so Google drops them from the
    // index instead of re-crawling them through internal links.
    // Canonical→EN convergence is a separate, later round and is NOT done here.

    return [
        ...routes,
        ...collectionRoutes,
        ...ideaRoutes,
        ...colorRoutes,
        ...vsRoutes,
    ];
}
