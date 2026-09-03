'use client';

import { useState } from 'react';
import { Copy, Check, Download, Link2, RefreshCw, Share2 } from 'lucide-react';
import { findClosestTraditionalColor } from '../utils/colorUtils';
import { buildShareText, buildResultUrl } from '../lib/colorPersonality/share.mjs';

function track(name, params) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    try {
      window.gtag('event', name, params);
    } catch {
      /* analytics is best-effort */
    }
  }
}

async function copyText(text) {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    /* fall through to legacy path */
  }
  try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}

// Draw a shareable 1200x630 PNG entirely on a canvas (no dependency, no upload).
function buildPng(result, colors) {
  const W = 1200;
  const H = 630;
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#0f0f10';
  ctx.fillRect(0, 0, W, H);

  ctx.fillStyle = '#ffffff';
  ctx.font = '700 30px sans-serif';
  ctx.fillText('COLOR PERSONALITY TEST', 60, 72);

  ctx.fillStyle = '#ffffff';
  ctx.font = '800 64px sans-serif';
  ctx.fillText(result.archetype.name, 60, 168);

  ctx.fillStyle = '#cbd5e1';
  ctx.font = '600 26px sans-serif';
  ctx.fillText('Rarity: ' + result.archetype.rarityLabel, 60, 214);

  ctx.fillStyle = '#e2e8f0';
  ctx.font = '500 24px sans-serif';
  ctx.fillText(result.archetype.traits.join('  ·  '), 60, 260);

  const n = colors.length;
  const gap = 20;
  const sw = (W - 120 - gap * (n - 1)) / n;
  const sy = 318;
  const sh = 132;
  colors.forEach((c, i) => {
    const sx = 60 + i * (sw + gap);
    ctx.fillStyle = c;
    ctx.fillRect(sx, sy, sw, sh);
    ctx.strokeStyle = 'rgba(255,255,255,0.15)';
    ctx.lineWidth = 1;
    ctx.strokeRect(sx, sy, sw, sh);
    ctx.fillStyle = '#ffffff';
    ctx.font = '600 18px sans-serif';
    ctx.fillText(c.toUpperCase(), sx, sy + sh + 30);
  });

  ctx.fillStyle = '#94a3b8';
  ctx.font = '500 20px sans-serif';
  ctx.fillText('imagecolorpickerai.com', 60, H - 40);

  return canvas.toDataURL('image/png');
}

export default function ColorPersonalityResultCard({ result, colors, onReset }) {
  const [copied, setCopied] = useState(null); // 'text' | 'url' | null

  const match = findClosestTraditionalColor(result.mainColor);

  const onCopyText = async () => {
    const url = buildResultUrl(window.location.origin, colors);
    const text = buildShareText(result, url);
    const ok = await copyText(text);
    setCopied(ok ? 'text' : null);
    if (ok) track('cpt_copy_share', { archetype: result.archetypeId });
    setTimeout(() => setCopied(null), 1800);
  };

  const onCopyUrl = async () => {
    const url = buildResultUrl(window.location.origin, colors);
    const ok = await copyText(url);
    setCopied(ok ? 'url' : null);
    if (ok) track('cpt_copy_url', { archetype: result.archetypeId });
    setTimeout(() => setCopied(null), 1800);
  };

  const onDownload = () => {
    try {
      const dataUrl = buildPng(result, colors);
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = `color-personality-${result.archetypeId}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      track('cpt_download_png', { archetype: result.archetypeId });
    } catch {
      /* canvas may be unavailable in rare environments */
    }
  };

  const onShare = async () => {
    const url = buildResultUrl(window.location.origin, colors);
    const text = buildShareText(result, url);
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({ title: 'Color Personality Test', text, url });
        track('cpt_share', { archetype: result.archetypeId });
      } catch {
        /* user cancelled — non-fatal */
      }
    } else {
      onCopyText();
    }
  };

  const a = result.archetype;

  return (
    <div className="space-y-5">
      <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
          Your Color Personality
        </p>
        <h2 className="mt-1 text-3xl font-extrabold text-neutral-900 sm:text-4xl">{a.name}</h2>
        <p className="mt-1 text-sm font-medium text-neutral-500">
          Rarity: <span className="text-neutral-800">{a.rarityLabel}</span>
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {a.traits.map((t) => (
            <span
              key={t}
              className="rounded-full bg-neutral-100 px-3 py-1 text-sm font-medium text-neutral-700"
            >
              {t}
            </span>
          ))}
        </div>

        <p className="mt-4 leading-relaxed text-neutral-700">{a.description}</p>
        <p className="mt-3 leading-relaxed text-neutral-700">
          <span className="font-semibold text-neutral-900">Style tip: </span>
          {a.styleAdvice}
        </p>

        {match && (
          <p className="mt-3 text-sm text-neutral-500">
            Your main color {result.mainColor.toUpperCase()} is closest to the traditional shade{' '}
            <span className="font-medium text-neutral-700">{match.name}</span>.
          </p>
        )}
      </div>

      {/* User palette */}
      <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-7">
        <p className="mb-3 text-sm font-semibold text-neutral-700">Your palette</p>
        <div className="flex flex-wrap gap-3">
          {colors.map((c) => (
            <button
              key={c}
              type="button"
              onClick={async () => {
                const ok = await copyText(c);
                setCopied(ok ? 'text' : null);
                setTimeout(() => setCopied(null), 1200);
              }}
              title={`Copy ${c.toUpperCase()}`}
              className="group flex flex-col items-center"
            >
              <span
                className="h-16 w-16 rounded-xl border border-neutral-200 shadow-sm transition group-hover:scale-105"
                style={{ backgroundColor: c }}
              />
              <span className="mt-1 font-mono text-xs uppercase text-neutral-500">{c}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={onCopyText}
          className="inline-flex items-center gap-1.5 rounded-lg bg-neutral-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-700"
        >
          {copied === 'text' ? <Check size={16} /> : <Copy size={16} />} Copy share text
        </button>
        <button
          type="button"
          onClick={onCopyUrl}
          className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-300 px-4 py-2.5 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100"
        >
          {copied === 'url' ? <Check size={16} /> : <Link2 size={16} />} Copy result link
        </button>
        <button
          type="button"
          onClick={onDownload}
          className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-300 px-4 py-2.5 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100"
        >
          <Download size={16} /> Download card (PNG)
        </button>
        <button
          type="button"
          onClick={onShare}
          className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-300 px-4 py-2.5 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100"
        >
          <Share2 size={16} /> Share
        </button>
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-300 px-4 py-2.5 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100"
        >
          <RefreshCw size={16} /> Start over
        </button>
      </div>
    </div>
  );
}
