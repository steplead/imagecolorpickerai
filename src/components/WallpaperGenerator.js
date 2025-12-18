'use client';

import { useState } from 'react';
import { Image as ImageIcon, Loader2, Sparkles } from 'lucide-react';

export default function WallpaperGenerator({ colorName, hex, chinese }) {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState(null);
    const [error, setError] = useState(null);

    const generateWallpaper = async () => {
        setLoading(true);
        setError(null);
        try {
            const prompt = `Minimalist aesthetic wallpaper, featuring the color ${colorName} (${hex}), silk texture, traditional chinese ink painting style, subtle atmosphere, high quality, 8k`;

            const res = await fetch('/api/generate-wallpaper', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt })
            });

            const data = await res.json();

            if (data.error) throw new Error(data.error);
            if (data.images && data.images[0]) {
                setImageUrl(data.images[0].url);
            }
        } catch (err) {
            setError(err.message || 'Failed to generate');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mt-8 p-6 bg-neutral-100 rounded-xl border border-neutral-200">
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-neutral-700 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    AI Wallpaper Generator
                </h3>
                <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">Pro Feature</span>
            </div>

            <p className="text-sm text-neutral-500 mb-6">
                Generate a unique, copyright-free wallpaper inspired by the essence of {chinese} ({colorName}).
            </p>

            {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

            {!imageUrl ? (
                <button
                    onClick={generateWallpaper}
                    disabled={loading}
                    className="w-full py-3 bg-neutral-900 text-white rounded-lg font-medium hover:bg-neutral-800 disabled:opacity-50 flex justify-center items-center gap-2 transition"
                >
                    {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <ImageIcon className="w-5 h-5" />}
                    {loading ? 'Generating Art...' : 'Generate 8K Wallpaper'}
                </button>
            ) : (
                <div className="space-y-4 animate-in fade-in zoom-in duration-500">
                    <img src={imageUrl} alt={`Wallpaper for ${colorName}`} className="w-full rounded-lg shadow-lg" />
                    <a
                        href={imageUrl}
                        download={`wallpaper-${colorName}.jpg`}
                        className="block w-full text-center py-2 bg-white border border-neutral-300 rounded-lg text-sm font-medium hover:bg-neutral-50"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download High-Res
                    </a>
                    <button
                        onClick={() => setImageUrl(null)}
                        className="block w-full text-center text-xs text-neutral-400 hover:text-neutral-600 mt-2"
                    >
                        Generate Another
                    </button>
                </div>
            )}
        </div>
    );
}
