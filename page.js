'use client';

import { useState, useRef } from 'react';
import { Upload, Download, Sparkles, Palette } from 'lucide-react';
import ColorThief from 'colorthief';// Make sure to npm install this
import { findClosestChineseColor } from '../utils/colorUtils';

export default function Home() {
    const [image, setImage] = useState(null);
    const [extractedHex, setExtractedHex] = useState(null);
    const [chineseMatch, setChineseMatch] = useState(null);
    const [loadingMeaning, setLoadingMeaning] = useState(false);
    const [aiMeaning, setAiMeaning] = useState("");
    const [loadingWallpaper, setLoadingWallpaper] = useState(false);
    const [wallpaperUrl, setWallpaperUrl] = useState("");

    const imgRef = useRef(null);

    // 1. Handle Image Upload
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setImage(event.target.result);
                // Reset states
                setExtractedHex(null);
                setChineseMatch(null);
                setAiMeaning("");
                setWallpaperUrl("");
            };
            reader.readAsDataURL(file);
        }
    };

    // 2. Extract Color when Image Loads
    const onImageLoad = () => {
        const colorThief = new ColorThief();
        const rgb = colorThief.getColor(imgRef.current);
        // Convert RGB to Hex
        const hex = "#" + ((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16).slice(1);

        setExtractedHex(hex);

        // 3. Find Chinese Match (The Math)
        const match = findClosestChineseColor(hex);
        setChineseMatch(match);
    };

    // 4. Call AI for Meaning
    const getMeaning = async () => {
        if (!chineseMatch) return;
        setLoadingMeaning(true);
        try {
            const res = await fetch('/api/analyze-color', {
                method: 'POST',
                body: JSON.stringify({ colorName: chineseMatch.name, hex: chineseMatch.hex })
            });
            const data = await res.json();
            setAiMeaning(data.meaning);
        } catch (e) {
            console.error(e);
        }
        setLoadingMeaning(false);
    };

    // 5. Generate Wallpaper
    const generateWallpaper = async () => {
        if (!chineseMatch) return;
        setLoadingWallpaper(true);
        try {
            const prompt = `Macro close-up texture of high-quality silk, solid color ${chineseMatch.name} hex code ${chineseMatch.hex}, aesthetic, soft lighting, 8k`;
            const res = await fetch('/api/generate-wallpaper', {
                method: 'POST',
                body: JSON.stringify({ prompt })
            });
            const data = await res.json();
            // Fal.ai returns images in various formats, adjust based on actual response
            if (data.images && data.images[0]) {
                setWallpaperUrl(data.images[0].url);
            }
        } catch (e) {
            console.error(e);
        }
        setLoadingWallpaper(false);
    };

    return (
        <main className="min-h-screen bg-stone-50 text-stone-800 p-8 font-sans">
            <div className="max-w-4xl mx-auto space-y-12">

                {/* Header */}
                <div className="text-center space-y-4">
                    <h1 className="text-5xl font-bold tracking-tight text-stone-900">
                        AI Image <span className="text-red-600">Color Picker</span>
                    </h1>
                    <p className="text-xl text-stone-500">
                        Extract the aesthetic soul of your photos.
                    </p>
                </div>

                {/* Upload Zone */}
                {!image && (
                    <div className="border-4 border-dashed border-stone-200 rounded-3xl p-20 text-center hover:bg-stone-100 transition cursor-pointer relative">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                        <Upload className="w-16 h-16 mx-auto text-stone-400 mb-4" />
                        <p className="text-xl font-medium text-stone-600">Drop your image here</p>
                    </div>
                )}

                {/* Results Section */}
                {image && (
                    <div className="grid md:grid-cols-2 gap-12">

                        {/* Left: Image */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                ref={imgRef}
                                src={image}
                                alt="Uploaded"
                                onLoad={onImageLoad}
                                className="w-full object-cover"
                            />
                        </div>

                        {/* Right: The Card */}
                        <div className="space-y-6">
                            {chineseMatch ? (
                                <div className="bg-white p-8 rounded-2xl shadow-xl border border-stone-100">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div
                                            className="w-16 h-16 rounded-full shadow-inner border-4 border-white"
                                            style={{ backgroundColor: extractedHex }}
                                        ></div>
                                        <div>
                                            <p className="text-sm text-stone-400 font-mono">{extractedHex}</p>
                                            <h2 className="text-3xl font-bold text-stone-800">{chineseMatch.name}</h2>
                                            <p className="text-red-600 font-serif italic text-lg">{chineseMatch.chinese} ({chineseMatch.pinyin})</p>
                                        </div>
                                    </div>

                                    {/* AI Meaning Section */}
                                    <div className="min-h-[80px]">
                                        {aiMeaning ? (
                                            <p className="text-stone-600 italic leading-relaxed">"{aiMeaning}"</p>
                                        ) : (
                                            <button
                                                onClick={getMeaning}
                                                disabled={loadingMeaning}
                                                className="flex items-center gap-2 text-stone-500 hover:text-red-600 transition"
                                            >
                                                <Sparkles size={18} />
                                                {loadingMeaning ? "Analyzing..." : "Ask AI for Meaning"}
                                            </button>
                                        )}
                                    </div>

                                    <hr className="my-6 border-stone-100" />

                                    {/* Wallpaper Section */}
                                    <div>
                                        {wallpaperUrl ? (
                                            <div>
                                                <img src={wallpaperUrl} alt="Wallpaper" className="rounded-lg mb-3 shadow-md" />
                                                <a href={wallpaperUrl} download className="block w-full text-center bg-stone-900 text-white py-3 rounded-lg hover:bg-black transition">
                                                    Download Wallpaper
                                                </a>
                                            </div>
                                        ) : (
                                            <button
                                                onClick={generateWallpaper}
                                                disabled={loadingWallpaper}
                                                className="w-full flex justify-center items-center gap-2 bg-red-50 text-red-600 py-3 rounded-lg hover:bg-red-100 transition font-medium"
                                            >
                                                <Palette size={18} />
                                                {loadingWallpaper ? "Dreaming..." : "Generate Texture Wallpaper"}
                                            </button>
                                        )}
                                    </div>

                                </div>
                            ) : (
                                <p>Analyzing colors...</p>
                            )}

                            <button
                                onClick={() => setImage(null)}
                                className="text-stone-400 hover:text-stone-600 underline text-sm"
                            >
                                Upload different photo
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}