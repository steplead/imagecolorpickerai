"use client";

import { useState } from 'react';
import { Copy, Check, Code2 } from 'lucide-react';

/**
 * Embed Widget Component (Link Magnet Strategy)
 * Generates iframe embed code for passive backlinks
 *
 * Protocol 4: Backlinks - Every tool should have an "Embed this Tool" option
 * Includes a visible "Powered by" link for attribution
 */
export default function EmbedWidget() {
    const [copied, setCopied] = useState(false);

    // Generate iframe embed code with attribution
    const embedCode = `<iframe
  src="https://imagecolorpickerai.com/widget"
  width="100%"
  height="500"
  style="border: 1px solid #e5e5e5; border-radius: 12px;"
  title="Image Color Picker by ImageColorPickerAI">
</iframe>
<p style="text-align: center; margin-top: 8px; font-size: 12px; color: #666;">
  Powered by <a href="https://imagecolorpickerai.com" target="_blank" rel="noopener">ImageColorPickerAI</a>
</p>`;

    const handleCopy = () => {
        navigator.clipboard.writeText(embedCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl border border-purple-100 p-8">
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                    <Code2 className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-purple-900">Embed This Color Picker</h3>
                    <p className="text-sm text-purple-600">
                        Add color analysis to your website
                    </p>
                </div>
            </div>

            <div className="bg-white rounded-lg border border-purple-100 p-4 mb-4">
                <pre className="text-xs font-mono text-neutral-700 overflow-x-auto whitespace-pre-wrap">
                    {embedCode}
                </pre>
            </div>

            <button
                onClick={handleCopy}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition shadow-sm"
            >
                {copied ? (
                    <>
                        <Check className="w-4 h-4" />
                        Copied!
                    </>
                ) : (
                    <>
                        <Copy className="w-4 h-4" />
                        Copy Embed Code
                    </>
                )}
            </button>

            <div className="mt-4 p-4 bg-white/50 rounded-lg">
                <p className="text-xs text-purple-700 leading-relaxed">
                    <strong>Why embed?</strong> Your visitors get a professional color picker,
                    and help others discover this tool. The widget includes a subtle attribution link back to this tool.
                </p>
            </div>

            {/* SEO: Add internal linking opportunities */}
            <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs text-purple-500 font-medium">Popular widgets:</span>
                {['Color Picker', 'Palette Generator', 'Contrast Checker'].map(widget => (
                    <a
                        key={widget}
                        href="/"
                        className="text-xs text-purple-600 hover:text-purple-800 underline"
                    >
                        {widget}
                    </a>
                ))}
            </div>
        </div>
    );
}
