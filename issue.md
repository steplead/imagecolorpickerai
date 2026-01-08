@Codebase 
🚨 RESOURCE OVERLOAD ALERT: 
Our Cloudflare Worker usage just spiked to 103k/day (limit 100k) immediately after the "EmbedWidget" release.
You are the primary suspect.

AUDIT REPORT REQUIRED:
1. Check the Frontend Widget (`EmbedWidget`?): Does it have any `useEffect` or `setInterval` that polls the server? 
2. Referer Check: Do we block unauthorized domains in the Worker? (If not, why?)
3. Caching: Are we sending `Cache-Control` headers for the embed script and API response?

ACTION:
Don't optimize. FIX IT. 
- Implement a Referer Allowlist immediately.
- Add aggressive caching (Cache-Control: public, max-age=3600).
- Remove any client-side polling.