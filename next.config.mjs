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
