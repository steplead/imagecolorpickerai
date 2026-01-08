/**
 * Emergency Circuit Breaker - Referer Check
 * Protects against widget abuse and unauthorized embedding
 *
 * Issue: Cloudflare quota exceeded (103,637 / 100,000)
 * Solution: Block requests without valid referer
 */

import { NextResponse } from 'next/server';

// Allowed domains that can embed our widget
const ALLOWED_DOMAINS = [
  'imagecolorpickerai.com',
  'www.imagecolorpickerai.com',
  // Add your approved partner domains here
];

// Paths that require referer check
const PROTECTED_PATHS = [
  '/widget',
  '/api',
  '/api/track',
];

// Paths that are always accessible (no referer check)
const PUBLIC_PATHS = [
  '/',
  '/about',
  '/contact',
  '/privacy-policy',
  '/terms-of-service',
  '/ideas',
  '/scan',
  '/_next',
  '/favicon.ico',
  '/icon.png',
  '/apple-icon.png',
  '/robots.txt',
  '/sitemap.xml',
];

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const referer = request.headers.get('referer') || request.headers.get('Referer');

  // Check if path is public (no protection needed)
  const isPublicPath = PUBLIC_PATHS.some(path => pathname.startsWith(path));
  if (isPublicPath) {
    return NextResponse.next();
  }

  // Check if path needs protection
  const isProtectedPath = PROTECTED_PATHS.some(path => pathname.startsWith(path));

  if (isProtectedPath) {
    // Allow requests with valid referer
    if (referer) {
      const refererUrl = new URL(referer);
      const refererDomain = refererUrl.hostname;

      // Check if referer is from allowed domain
      const isAllowedDomain = ALLOWED_DOMAINS.some(domain => {
        // Exact match or subdomain match
        return refererDomain === domain || refererDomain.endsWith(`.${domain}`);
      });

      if (isAllowedDomain) {
        return NextResponse.next();
      }

      // Referer present but not from allowed domain
      console.warn(`Blocked request from unauthorized referer: ${referer} to ${pathname}`);
      return new Response('Unauthorized - Please embed from imagecolorpickerai.com', {
        status: 403,
        headers: {
          'Content-Type': 'text/plain',
          'X-Blocked-Reason': 'Unauthorized Referer',
        },
      });
    }

    // No referer present - could be direct access or API tool
    // Allow GET requests (direct access), block POST/PUT/DELETE (API calls)
    if (request.method === 'GET') {
      return NextResponse.next();
    }

    // Block API calls without referer
    console.warn(`Blocked API call without referer to ${pathname}`);
    return new Response('Unauthorized - API calls require valid referer', {
      status: 403,
      headers: {
        'Content-Type': 'text/plain',
        'X-Blocked-Reason': 'Missing Referer',
      },
    });
  }

  // All other paths - allow
  return NextResponse.next();
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
