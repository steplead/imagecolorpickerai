import Link from 'next/link';

// Every 404 the site returned used to advertise itself as the homepage: the
// response carried the ROOT layout's metadata wholesale, i.e.
//   <link rel="canonical" href="https://imagecolorpickerai.com">
//   <link rel="alternate" hreflang="en|zh-Hans|ja|es|fr|de|pt" href="...">
//   <meta property="og:title" content="Image Color Picker - ...">
//   <meta property="og:url" content="https://imagecolorpickerai.com">
// hreflang claims "7 language versions of this URL exist" while the status code
// says "this URL does not exist" - two signals that cannot both be true. This
// boundary replaces them with 404-specific values.
//
// `alternates: {}` is deliberate: Next.js deep-merges only openGraph/twitter
// between a layout and a page, so an empty `alternates` replaces the inherited
// canonical + hreflang set instead of merging with it. The `noindex` Next.js
// emits for every not-found response, and the 404 status code, are untouched.
const NOT_FOUND_TITLE = '404: Page Not Found | ImageColorPickerAI';
const NOT_FOUND_DESCRIPTION =
    'This page does not exist. Pick colours from an image or browse the traditional colour encyclopedia instead.';

export const metadata = {
    title: NOT_FOUND_TITLE,
    description: NOT_FOUND_DESCRIPTION,
    alternates: {},
    openGraph: {
        title: NOT_FOUND_TITLE,
        description: NOT_FOUND_DESCRIPTION,
        url: 'https://imagecolorpickerai.com/404',
        images: ['/og-image.png'],
    },
    twitter: {
        card: 'summary_large_image',
        title: NOT_FOUND_TITLE,
        description: NOT_FOUND_DESCRIPTION,
        images: ['/og-image.png'],
    },
};

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-24 text-center font-sans bg-neutral-50">
            <p className="text-sm font-bold tracking-widest text-neutral-400 uppercase mb-4">404</p>
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                This page could not be found
            </h1>
            <p className="text-neutral-500 max-w-md mb-8">
                The page you requested does not exist or has been moved.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <Link
                    href="/"
                    className="px-6 py-3 bg-red-900 text-white rounded-xl font-bold hover:bg-red-800 transition"
                >
                    Pick Colors From an Image
                </Link>
                <Link
                    href="/colors/chinese"
                    className="px-6 py-3 bg-white border border-neutral-200 rounded-xl font-bold hover:bg-neutral-50 transition"
                >
                    Browse the Color Encyclopedia
                </Link>
            </div>
        </div>
    );
}
