/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // WARNING: unoptimized: true is currently enabled for Cloudflare Pages compatibility
        // Cloudflare Pages (@cloudflare/next-on-pages) does NOT support Next.js native Image optimization
        // To enable image optimization, you have three options:
        //
        // Option 1: Use Cloudflare Images (paid service)
        //   images: {
        //     loader: 'custom',
        //     loaderFile: './lib/cloudflare-image-loader.js',
        //   }
        //
        // Option 2: Deploy to Vercel (supports Next.js Image optimization natively)
        //   Just remove 'unoptimized: true' and deploy to Vercel
        //
        // Option 3: Use a third-party image CDN
        //   images: {
        //     loader: 'custom',
        //     loaderFile: './lib/image-loader.js',
        //   }
        //
        // For now, we keep unoptimized: true to ensure Cloudflare Pages builds work
        unoptimized: true,

        // When you do enable optimization, use these settings:
        // formats: ['image/avif', 'image/webp'],
        // deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        // minimumCacheTTL: 60,
    },
    async redirects() {
        return [
            // p-2025-01 -> future-dusk
            { source: '/color/p-2025-01', destination: '/color/future-dusk', permanent: true },
            { source: '/zh/color/p-2025-01', destination: '/zh/color/future-dusk', permanent: true },
            { source: '/ja/color/p-2025-01', destination: '/ja/color/future-dusk', permanent: true },
            { source: '/es/color/p-2025-01', destination: '/es/color/future-dusk', permanent: true },
            { source: '/fr/color/p-2025-01', destination: '/fr/color/future-dusk', permanent: true },
            { source: '/de/color/p-2025-01', destination: '/de/color/future-dusk', permanent: true },
            { source: '/pt/color/p-2025-01', destination: '/pt/color/future-dusk', permanent: true },
            // p-2025-03 -> ray-flower
            { source: '/color/p-2025-03', destination: '/color/ray-flower', permanent: true },
            { source: '/zh/color/p-2025-03', destination: '/zh/color/ray-flower', permanent: true },
            { source: '/ja/color/p-2025-03', destination: '/ja/color/ray-flower', permanent: true },
            { source: '/es/color/p-2025-03', destination: '/es/color/ray-flower', permanent: true },
            { source: '/fr/color/p-2025-03', destination: '/fr/color/ray-flower', permanent: true },
            { source: '/de/color/p-2025-03', destination: '/de/color/ray-flower', permanent: true },
            { source: '/pt/color/p-2025-03', destination: '/pt/color/ray-flower', permanent: true },
            // p-2025-04 -> sunset-coral
            { source: '/color/p-2025-04', destination: '/color/sunset-coral', permanent: true },
            { source: '/zh/color/p-2025-04', destination: '/zh/color/sunset-coral', permanent: true },
            { source: '/ja/color/p-2025-04', destination: '/ja/color/sunset-coral', permanent: true },
            { source: '/es/color/p-2025-04', destination: '/es/color/sunset-coral', permanent: true },
            { source: '/fr/color/p-2025-04', destination: '/fr/color/sunset-coral', permanent: true },
            { source: '/de/color/p-2025-04', destination: '/de/color/sunset-coral', permanent: true },
            { source: '/pt/color/p-2025-04', destination: '/pt/color/sunset-coral', permanent: true },
            // n-earth-01 -> deep-moss
            { source: '/color/n-earth-01', destination: '/color/deep-moss', permanent: true },
            { source: '/zh/color/n-earth-01', destination: '/zh/color/deep-moss', permanent: true },
            { source: '/ja/color/n-earth-01', destination: '/ja/color/deep-moss', permanent: true },
            { source: '/es/color/n-earth-01', destination: '/es/color/deep-moss', permanent: true },
            { source: '/fr/color/n-earth-01', destination: '/fr/color/deep-moss', permanent: true },
            { source: '/de/color/n-earth-01', destination: '/de/color/deep-moss', permanent: true },
            { source: '/pt/color/n-earth-01', destination: '/pt/color/deep-moss', permanent: true },
            // n-earth-02 -> terracotta-clay
            { source: '/color/n-earth-02', destination: '/color/terracotta-clay', permanent: true },
            { source: '/zh/color/n-earth-02', destination: '/zh/color/terracotta-clay', permanent: true },
            { source: '/ja/color/n-earth-02', destination: '/ja/color/terracotta-clay', permanent: true },
            { source: '/es/color/n-earth-02', destination: '/es/color/terracotta-clay', permanent: true },
            { source: '/fr/color/n-earth-02', destination: '/fr/color/terracotta-clay', permanent: true },
            { source: '/de/color/n-earth-02', destination: '/de/color/terracotta-clay', permanent: true },
            { source: '/pt/color/n-earth-02', destination: '/pt/color/terracotta-clay', permanent: true },
            // n-sky-01 -> morning-mist
            { source: '/color/n-sky-01', destination: '/color/morning-mist', permanent: true },
            { source: '/zh/color/n-sky-01', destination: '/zh/color/morning-mist', permanent: true },
            { source: '/ja/color/n-sky-01', destination: '/ja/color/morning-mist', permanent: true },
            { source: '/es/color/n-sky-01', destination: '/es/color/morning-mist', permanent: true },
            { source: '/fr/color/n-sky-01', destination: '/fr/color/morning-mist', permanent: true },
            { source: '/de/color/n-sky-01', destination: '/de/color/morning-mist', permanent: true },
            { source: '/pt/color/n-sky-01', destination: '/pt/color/morning-mist', permanent: true },
        ];
    },
    async headers() {
        return [
            {
                // Cache static assets for 1 year
                source: '/:all*(svg|png|jpg|jpeg|gif|webp|ico|woff|woff2|ttf|eot)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
            {
                // Cache widget page for 1 hour (prevents abuse while allowing updates)
                source: '/widget',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=3600, s-maxage=3600',
                    },
                    {
                        key: 'CDN-Cache-Control',
                        value: 'public, max-age=3600',
                    },
                ],
            },
            {
                // Cache API responses for 5 minutes
                source: '/api/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=300, s-maxage=300',
                    },
                ],
            },
            {
                // Security headers
                source: '/:path*',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
