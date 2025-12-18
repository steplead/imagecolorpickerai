'use client';

import { useState, useRef } from 'react';
import ColorThief from 'colorthief';
import { Upload, Image as ImageIcon, ArrowRight, Palette } from 'lucide-react';
import Link from 'next/link';
import { findClosestChineseColor } from '../utils/colorUtils';

export default function Home() {
  const [image, setImage] = useState(null);
  const [colors, setColors] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [match, setMatch] = useState(null);
  const imgRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImage(url);
      setColors([]);
      setSelectedColor(null);
      setMatch(null);
    }
  };

  const extractColors = () => {
    console.log("Attempting to extract colors...");
    try {
      if (imgRef.current && imgRef.current.complete) {
        const colorThief = new ColorThief();
        const palette = colorThief.getPalette(imgRef.current, 8);
        console.log("Extracted palette:", palette);
        const hexPalette = palette.map(rgb =>
          "#" + ((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16).slice(1)
        );
        setColors(hexPalette);
      } else {
        console.warn("Image not ready for extraction");
      }
    } catch (err) {
      console.error("Color extraction failed:", err);
      // Fallback: If ColorThief fails, maybe just use white/black or alert user
      alert("Could not extract colors from this image. Try another one.");
    }
  };

  const handleColorClick = (hex) => {
    setSelectedColor(hex);
    const result = findClosestChineseColor(hex);
    setMatch(result);
  };

  return (
    <main className="flex flex-col items-center min-h-screen p-4 sm:p-8 bg-neutral-50 text-neutral-800 font-sans">
      {/* Header */}
      <header className="w-full max-w-4xl flex justify-between items-center mb-12">
        <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
          <Palette className="w-6 h-6 text-red-600" />
          <span>Image Color Picker</span>
        </h1>
        <nav className="text-sm font-medium text-neutral-500 gap-4 flex">
          <Link href="/colors/red" className="hover:text-red-600 transition">Red Colors</Link>
          <Link href="/colors/blue" className="hover:text-blue-600 transition">Blue Colors</Link>
        </nav>
      </header>

      {/* Main Tool Area */}
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden border border-neutral-100">

        {/* Upload Area */}
        <div className="relative w-full min-h-[300px] bg-neutral-100 flex items-center justify-center overflow-hidden group">
          {!image ? (
            <label className="flex flex-col items-center cursor-pointer p-8 transition hover:scale-105 active:scale-95">
              <Upload className="w-12 h-12 text-neutral-400 mb-4" />
              <span className="text-lg font-medium text-neutral-600">Upload an Image</span>
              <span className="text-sm text-neutral-400 mt-2">JPG, PNG supported</span>
              <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
            </label>
          ) : (
            <>
              <img
                ref={imgRef}
                src={image}
                alt="Uploaded"
                className="w-full h-full object-contain max-h-[500px]"
                onLoad={() => setTimeout(extractColors, 100)}
              />
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button
                  onClick={extractColors}
                  className="bg-neutral-900 text-white px-4 py-2 rounded-full shadow-sm text-sm font-medium hover:bg-neutral-800 transition backdrop-blur"
                >
                  Generate Palette
                </button>
                <label className="bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-sm text-sm font-medium cursor-pointer hover:bg-white transition">
                  Change Image
                  <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                </label>
              </div>
            </>
          )}
        </div>

        {/* Palette Area */}
        {colors.length > 0 && (
          <div className="p-6 bg-white">
            <h2 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">Extracted Palette</h2>
            <div className="flex flex-wrap gap-4 mb-8">
              {colors.map((hex, i) => (
                <button
                  key={i}
                  onClick={() => handleColorClick(hex)}
                  className={`w-12 h-12 rounded-full shadow-sm border-2 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 ${selectedColor === hex ? 'border-neutral-800 scale-110 ring-2 ring-neutral-400' : 'border-transparent'}`}
                  style={{ backgroundColor: hex }}
                  aria-label={`Select color ${hex}`}
                />
              ))}
            </div>

            {/* Match Result Area */}
            {selectedColor && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 border-t pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">Closest Match</span>
                    {match ? (
                      <div>
                        <h3 className="text-3xl font-bold text-neutral-900 mt-1">{match.name}</h3>
                        <p className="text-lg text-neutral-500 font-serif italic mt-1">{match.chinese} ({match.pinyin})</p>
                        <p className="max-w-md text-sm text-neutral-600 mt-3 leading-relaxed">{match.meaning}</p>

                        <div className="flex gap-2 mt-4">
                          {match.tags && match.tags.map(tag => (
                            <Link key={tag} href={`/colors/${tag}`} className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded hover:bg-neutral-200">
                              #{tag}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <p className="text-neutral-500 mt-2">No direct Chinese color match found.</p>
                    )}
                  </div>

                  {match && (
                    <Link
                      href={`/color/${match.id}`}
                      className="flex items-center gap-2 bg-neutral-900 text-white px-5 py-3 rounded-xl font-medium hover:bg-neutral-800 transition shadow-lg hover:shadow-xl translate-y-2 group"
                    >
                      <span>Full Details</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* SEO Content (Bottom Fold) */}
      <section className="max-w-2xl mt-16 text-neutral-600 space-y-6">
        <h2 className="text-xl font-bold text-neutral-900">About Image Color Picker</h2>
        <p>
          This free tool allows you to extract precise hex codes from any image.
          Unlike generic pickers, we map your colors to traditional Chinese aesthetics, providing cultural context, poem meanings, and visual inspiration.
        </p>
        <p>
          Simply upload a file, click on any extracted color, and discover its name (e.g., Cinnabar, Tea White) and significance in art and history.
        </p>
      </section>
    </main>
  );
}
