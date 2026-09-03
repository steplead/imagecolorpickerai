'use client';

import { useState, useRef, useEffect } from 'react';
import { Camera, Upload, RefreshCw, Share2, Sparkles, Loader2 } from 'lucide-react';
import ColorThief from 'colorthief';
import { getAllColors } from '../utils/colorData';
import EmbedWidget from './EmbedWidget';

export default function PersonalColorAnalyst({ locale = 'en' }) {
    const [image, setImage] = useState(null);
    const [analyzing, setAnalyzing] = useState(false);
    const [result, setResult] = useState(null);
    const imgRef = useRef(null);
    const fileInputRef = useRef(null);

    const labels = {
        en: {
            title: "Upload an Image",
            desc: "Good lighting helps. We'll read the colors in your image to suggest a matching palette.",
            btnSelect: "Select Photo",
            btnReveal: "Reveal My Palette",
            analyzing: "Reading colors...",
            complete: "Analysis Complete",
            yourAura: "Your Palette is",
            meaning: "Global Meaning",
            tryAgain: "Try Again",
            tip: "Choose diverse photo"
        },
        zh: {
            title: "上传一张图片",
            desc: "光线充足效果更好。我们将读取您图片中的色彩，为您推荐合适的配色。",
            btnSelect: "选择照片",
            btnReveal: "揭晓我的色彩图谱",
            analyzing: "正在读取图谱...",
            complete: "分析完成",
            yourAura: "您的色彩图谱是",
            meaning: "全球文化含义",
            tryAgain: "再试一次",
            tip: "尝试不同的光线"
        },
        ja: {
            title: "画像をアップロード",
            desc: "明るい照明があると効果的です。画像内の色を読み取り、ぴったりの伝統色を提案します。",
            btnSelect: "写真を選択",
            btnReveal: "パレットを明らかにする",
            analyzing: "色を読み取り中...",
            complete: "分析完了",
            yourAura: "あなたのパレットは",
            meaning: "グローバルな意味",
            tryAgain: "もう一度",
            tip: "別の写真を選択"
        },
        es: {
            title: "Sube una imagen",
            desc: "Buena iluminación ayuda. Leeremos los colores de tu imagen para sugerir una combinación.",
            btnSelect: "Seleccionar foto",
            btnReveal: "Revelar mi paleta",
            analyzing: "Leyendo colores...",
            complete: "Análisis completo",
            yourAura: "Tu paleta es",
            meaning: "Significado global",
            tryAgain: "Intentar de nuevo",
            tip: "Elegir foto diversa"
        },
        fr: {
            title: "Téléchargez une image",
            desc: "Un bon éclairage aide. Nous lirons les couleurs de votre image pour suggérer une palette.",
            btnSelect: "Sélectionner une photo",
            btnReveal: "Révéler ma palette",
            analyzing: "Lecture des couleurs...",
            complete: "Analyse terminée",
            yourAura: "Votre palette est",
            meaning: "Signification globale",
            tryAgain: "Réessayer",
            tip: "Choisir une autre photo"
        },
        de: {
            title: "Lade ein Bild hoch",
            desc: "Gute Beleuchtung hilft. Wir lesen die Farben deines Bildes, um eine passende Palette vorzuschlagen.",
            btnSelect: "Foto auswählen",
            btnReveal: "Meine Palette enthüllen",
            analyzing: "Farben werden gelesen...",
            complete: "Analyse abgeschlossen",
            yourAura: "Deine Palette ist",
            meaning: "Globale Bedeutung",
            tryAgain: "Erneut versuchen",
            tip: "Anderes Foto wählen"
        },
        pt: {
            title: "Carregue uma imagem",
            desc: "Boa iluminação ajuda. Leremos as cores da sua imagem para sugerir uma combinação.",
            btnSelect: "Selecionar foto",
            btnReveal: "Revelar minha paleta",
            analyzing: "Lendo cores...",
            complete: "Análise concluída",
            yourAura: "Sua paleta é",
            meaning: "Significado global",
            tryAgain: "Tentar novamente",
            tip: "Escolher outra foto"
        }
    };

    const t = labels[locale] || labels.en;

    // 1. Handle File Upload
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImage(e.target.result);
                setResult(null);
            };
            reader.readAsDataURL(file);
        }
    };

    // 2. The Color Palette Algorithm
    const analyzeAura = () => {
        if (!imgRef.current) return;
        setAnalyzing(true);

        // Brief delay for UX feedback
        setTimeout(() => {
            try {
                const colorThief = new ColorThief();
                const dominantColor = colorThief.getColor(imgRef.current); // [r, g, b]

                // Convert to simplistic "Season" (Warm vs Cool)
                // R > B usually indicates warm-leaning palettes
                const [r, g, b] = dominantColor;
                const isWarm = r > b;

                // Find Matches from our DB
                const allColors = getAllColors();
                let match;

                // Simple Heuristic:
                // If Warm -> Suggest "Royal/Imperial" colors (Red/Gold) or "Nature" (Green)
                // If Cool -> Suggest "Ethereal" colors (Blue/White/Purple)

                if (isWarm) {
                    // Filter for Red/Yellow/Green collections
                    const warmPool = allColors.filter(c => ['red', 'yellow', 'green', 'warm'].includes(c.tags?.[0]));
                    match = warmPool[Math.floor(Math.random() * warmPool.length)];
                } else {
                    // Filter for Blue/Purple/White/Cool collections
                    const coolPool = allColors.filter(c => ['blue', 'purple', 'white', 'cool'].includes(c.tags?.[0]));
                    match = coolPool[Math.floor(Math.random() * coolPool.length)];
                }

                // Fallback
                if (!match) match = allColors[0];

                setResult({
                    skinTone: `rgb(${r},${g},${b})`,
                    aura: match,
                    season: isWarm ? 'Autumn/Spring (Warm)' : 'Winter/Summer (Cool)',
                    desc: isWarm
                    ? "Your palette leans warm and vibrant, echoing earth and sun."
                    : "Your palette leans cool and serene, echoing water and moon."
                });

            } catch (err) {
                console.error("Analysis failed", err);
            } finally {
                setAnalyzing(false);
            }
        }, 1500);
    };

    return (
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-neutral-100">
            {/* Viewport */}
            <div className="relative aspect-[3/4] bg-neutral-900 flex flex-col items-center justify-center overflow-hidden">
                {!image ? (
                    <div className="text-center p-6 space-y-6 animate-in fade-in zoom-in duration-500">
                        <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-md border border-white/20">
                            <Sparkles className="w-10 h-10 text-amber-200" />
                        </div>
                        <h3 className="text-white text-xl font-bold">{t.title}</h3>
                        <p className="text-white/60 text-sm max-w-xs mx-auto">
                            {t.desc}
                        </p>

                        <div className="grid gap-3 w-full max-w-[200px] mx-auto">
                            <button
                                onClick={() => fileInputRef.current.click()}
                                className="w-full py-3 bg-white text-neutral-900 rounded-xl font-bold text-sm hover:bg-neutral-100 transition flex items-center justify-center gap-2"
                            >
                                <Upload className="w-4 h-4" />
                                {t.btnSelect}
                            </button>
                            <input
                                type="file"
                                ref={fileInputRef}
                                className="hidden"
                                accept="image/*"
                                onChange={handleFileUpload}
                            />
                        </div>
                    </div>
                ) : (
                    <>
                        <img
                            ref={imgRef}
                            src={image}
                            alt="Analysis Subject"
                            className={`w-full h-full object-cover transition-all duration-1000 ${analyzing ? 'scale-110 blur-sm grayscale' : 'scale-100'}`}
                            loading="eager"
                            width="1024"
                            height="1024"
                        />

                        {/* Scanning Overlay */}
                        {analyzing && (
                            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
                                <div className="text-center">
                                    <Loader2 className="w-12 h-12 text-white animate-spin mx-auto mb-4" />
                                    <p className="text-white font-mono text-sm tracking-widest uppercase animate-pulse">{t.analyzing}</p>
                                </div>
                            </div>
                        )}

                        {/* Result Overlay */}
                        {!analyzing && result && (
                            <div className="absolute inset-0 z-20 bg-black/60 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center animate-in slide-in-from-bottom duration-700">
                                <span className="text-amber-300 text-xs font-bold tracking-[0.2em] uppercase mb-2">{t.complete}</span>
                                <h2 className="text-3xl font-bold text-white mb-1">{t.yourAura}</h2>
                                <h1 id="color-aura" className="text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-400 mb-6" style={{ textShadow: `0 0 20px ${result.aura.hex}66` }}>
                                    {result.aura.names?.[0] || result.aura.name}
                                </h1>

                                <div className="w-24 h-24 rounded-full border-4 border-white/20 shadow-2xl mb-6 relative group">
                                    <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ backgroundColor: result.aura.hex }}></div>
                                    <div className="w-full h-full rounded-full bg-cover bg-center" style={{ backgroundColor: result.aura.hex }}></div>
                                </div>

                                <p className="text-white/80 text-sm italic font-serif max-w-xs mb-8">
                                    "{result.aura.meaning.substring(0, 100)}..."
                                </p>

                                <div className="flex gap-3 w-full">
                                    <a
                                        href={`${locale === 'en' ? '' : `/${locale}`}/color/${result.aura.id}`}
                                        className="flex-1 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-medium text-sm transition backdrop-blur border border-white/10"
                                    >
                                        {t.meaning}
                                    </a>
                                    <button
                                        onClick={() => {
                                            setImage(null);
                                            setResult(null);
                                        }}
                                        className="py-3 px-4 bg-white text-neutral-900 rounded-xl font-medium text-sm hover:bg-neutral-200 transition"
                                    >
                                        {t.tryAgain}
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Analyze Trigger */}
                        {!analyzing && !result && (
                            <div className="absolute bottom-8 left-0 right-0 px-8">
                                <button
                                    onClick={analyzeAura}
                                    className="w-full py-4 bg-gradient-to-r from-red-600 to-amber-600 text-white rounded-2xl font-bold text-lg shadow-xl shadow-red-900/30 hover:scale-105 transition-all flex items-center justify-center gap-2"
                                >
                                    <Sparkles className="w-5 h-5" />
                                    {t.btnReveal}
                                </button>
                                <button
                                    onClick={() => setImage(null)}
                                    className="mt-4 text-white/50 text-xs hover:text-white transition"
                                >
                                    {t.tip}
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>

            {/* Embed Widget Section (Link Magnet Strategy) */}
            <div className="w-full max-w-2xl mt-12 px-4">
                <EmbedWidget />
            </div>
        </div>
    );
}
