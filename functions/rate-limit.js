/**
 * Rate Limiting Middleware for Cloudflare Pages
 *
 * Limits requests per IP to prevent abuse
 *
 * Configuration:
 * - API routes: 100 requests per minute
 * - Widget: 60 requests per minute
 * - All other routes: 200 requests per minute
 */

// Rate limit configuration
const RATE_LIMITS = {
  '/api': {
    limit: 100,
    window: 60, // seconds
  },
  '/widget': {
    limit: 60,
    window: 60,
  },
  default: {
    limit: 200,
    window: 60,
  },
};

// Simple in-memory rate limiter (resets on deployment)
// For production, use Cloudflare KV or Durable Objects
const requestCounts = new Map();

function getRateLimit(pathname) {
  for (const [prefix, config] of Object.entries(RATE_LIMITS)) {
    if (pathname.startsWith(prefix)) {
      return config;
    }
  }
  return RATE_LIMITS.default;
}

function getClientIP(request) {
  // Check various headers for the real IP
  return (
    request.headers.get('CF-Connecting-IP') ||
    request.headers.get('X-Forwarded-For')?.split(',')[0]?.trim() ||
    'unknown'
  );
}

function checkRateLimit(ip, pathname) {
  const now = Math.floor(Date.now() / 1000);
  const config = getRateLimit(pathname);
  const key = `${ip}:${pathname}`;

  const record = requestCounts.get(key);

  if (!record || now > record.resetTime) {
    // First request or window expired
    requestCounts.set(key, {
      count: 1,
      resetTime: now + config.window,
    });
    return { allowed: true, remaining: config.limit - 1 };
  }

  if (record.count >= config.limit) {
    // Rate limit exceeded
    return {
      allowed: false,
      remaining: 0,
      resetTime: record.resetTime,
    };
  }

  // Increment counter
  record.count++;
  return {
    allowed: true,
    remaining: config.limit - record.count,
  };
}

export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Get client IP
  const ip = getClientIP(request);

  // Check rate limit
  const result = checkRateLimit(ip, pathname);

  if (!result.allowed) {
    // Return 429 Too Many Requests
    const retryAfter = result.resetTime - Math.floor(Date.now() / 1000);

    return new Response(
      JSON.stringify({
        error: 'Rate limit exceeded',
        message: 'Too many requests. Please try again later.',
        retryAfter,
      }),
      {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'Retry-After': retryAfter.toString(),
          'X-RateLimit-Limit': RATE_LIMITS[pathname.startsWith('/api') ? '/api' : pathname.startsWith('/widget') ? '/widget' : 'default'].limit.toString(),
          'X-RateLimit-Remaining': '0',
          'X-RateLimit-Reset': result.resetTime.toString(),
        },
      }
    );
  }

  // Add rate limit headers to successful requests
  const response = await context.next();

  // Clone response to modify headers
  const newResponse = new Response(response.body, response);

  newResponse.headers.set('X-RateLimit-Limit', RATE_LIMITS[pathname.startsWith('/api') ? '/api' : pathname.startsWith('/widget') ? '/widget' : 'default'].limit.toString());
  newResponse.headers.set('X-RateLimit-Remaining', result.remaining.toString());

  return newResponse;
}

// Export for middleware usage
export { checkRateLimit, getClientIP };
