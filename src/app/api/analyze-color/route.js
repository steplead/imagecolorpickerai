import { NextResponse } from "next/server";
import { getRequestContext } from '@cloudflare/next-on-pages';

export const runtime = 'edge';

// 速率限制配置（使用简单的内存 Map，适合短期紧急修复）
// 注意：每次部署后会重置，生产环境应使用 Cloudflare KV
const rateLimits = new Map();

const LIMIT_CONFIG = {
  limit: 10,           // 10次请求
  window: 60000,       // 每分钟
};

function getClientIP(request) {
  return request.headers.get('CF-Connecting-IP') ||
         request.headers.get('X-Forwarded-For')?.split(',')[0]?.trim() ||
         'unknown';
}

function checkRateLimit(ip) {
  const now = Date.now();
  const key = `${ip}:analyze-color`;
  const record = rateLimits.get(key);

  if (!record || now > record.resetTime) {
    // 首次请求或窗口已过期
    rateLimits.set(key, {
      count: 1,
      resetTime: now + LIMIT_CONFIG.window,
    });
    return { allowed: true, remaining: LIMIT_CONFIG.limit - 1 };
  }

  if (record.count >= LIMIT_CONFIG.limit) {
    // 超出限制
    return {
      allowed: false,
      remaining: 0,
      resetTime: record.resetTime,
    };
  }

  // 增加计数
  record.count++;
  return {
    allowed: true,
    remaining: LIMIT_CONFIG.limit - record.count,
  };
}

export async function POST(req) {
  try {
    // 1. 获取客户端 IP 并检查速率限制
    const ip = getClientIP(req);
    const limitCheck = checkRateLimit(ip);

    if (!limitCheck.allowed) {
      return NextResponse.json(
        {
          error: 'Rate limit exceeded. Please try again later.',
          retryAfter: Math.ceil((limitCheck.resetTime - Date.now()) / 1000)
        },
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'X-RateLimit-Limit': LIMIT_CONFIG.limit.toString(),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': new Date(limitCheck.resetTime).toISOString(),
            'Retry-After': Math.ceil((limitCheck.resetTime - Date.now()) / 1000).toString(),
          },
        }
      );
    }

    // 2. 解析和验证输入
    const body = await req.json();
    const { colorName, hex } = body;

    // 输入验证
    if (!colorName || typeof colorName !== 'string') {
      return NextResponse.json(
        { error: 'Invalid or missing colorName' },
        { status: 400 }
      );
    }

    if (!hex || typeof hex !== 'string') {
      return NextResponse.json(
        { error: 'Invalid or missing hex' },
        { status: 400 }
      );
    }

    // 验证 hex 格式
    if (!/^#[0-9A-F]{6}$/i.test(hex)) {
      return NextResponse.json(
        { error: 'Invalid hex format. Expected #RRGGBB' },
        { status: 400 }
      );
    }

    // 限制输入长度（防止 prompt injection）
    if (colorName.length > 100) {
      return NextResponse.json(
        { error: 'Color name too long (max 100 characters)' },
        { status: 400 }
      );
    }

    // 过滤危险字符
    const sanitizedName = colorName.replace(/[<>{}]/g, '');

    // 3. 获取 API key
    let envCtx = null;
    try {
      if (typeof getRequestContext === 'function') {
        envCtx = getRequestContext()?.env;
      }
    } catch (e) {
      // Context not available in local dev
    }

    const apiKey = process.env.OPENROUTER_API_KEY || envCtx?.OPENROUTER_API_KEY;

    if (!apiKey) {
      console.error("Missing OPENROUTER_API_KEY");
      return NextResponse.json(
        { error: "API service temporarily unavailable" },
        { status: 503 }
      );
    }

    // 4. 调用 OpenRouter API（带超时和错误处理）
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30秒超时

    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://imagecolorpickerai.com",
          "X-Title": "Image Color Picker AI",
        },
        body: JSON.stringify({
          "model": "deepseek/deepseek-chat",
          "messages": [
            {
              "role": "system",
              "content": "You are an expert on Chinese Aesthetics and Color Culture."
            },
            {
              "role": "user",
              "content": `Write a 1-sentence poetic description (maximum 50 words) for the Chinese color ${sanitizedName} (${hex}). Focus on nature, history, or emotion. Do not include the color code in the output.`
            }
          ],
          "max_tokens": 100, // 限制输出长度
          "temperature": 0.7,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("OpenRouter API Error:", {
          status: response.status,
          error: errorData,
        });

        if (response.status === 429) {
          return NextResponse.json(
            { error: "AI service rate limit exceeded. Please try again later." },
            { status: 503 }
          );
        }

        return NextResponse.json(
          { error: "Failed to generate color meaning. Please try again." },
          { status: 502 }
        );
      }

      const data = await response.json();

      if (!data.choices || !data.choices[0] || !data.choices[0].message) {
        console.error("Invalid OpenRouter response:", data);
        return NextResponse.json(
          { error: "Invalid response from AI service" },
          { status: 502 }
        );
      }

      // 5. 返回成功响应（带速率限制头）
      const result = NextResponse.json({ meaning: data.choices[0].message.content.trim() });
      result.headers.set('X-RateLimit-Limit', LIMIT_CONFIG.limit.toString());
      result.headers.set('X-RateLimit-Remaining', limitCheck.remaining.toString());
      result.headers.set('X-RateLimit-Reset', new Date(limitCheck.resetTime).toISOString());
      return result;

    } catch (fetchError) {
      clearTimeout(timeoutId);

      if (fetchError.name === 'AbortError') {
        console.error("OpenRouter API timeout");
        return NextResponse.json(
          { error: "Request timeout. Please try again." },
          { status: 504 }
        );
      }

      throw fetchError;
    }

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
