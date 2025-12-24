# 🎨 AI Image Color Picker (GeFei Protocol Edition)

### 🔗 Live Tool: [**https://imagecolorpickerai.com**](https://imagecolorpickerai.com)

A high-performance **Traditional Color Extraction Dataset** and **AI Design Tool** for matching images to historical color palettes. Built with Next.js 14, DeepSeek, and Flux-Schnell.

## 🚀 Features

### 🛠️ Core Tool
*   **Image Extraction**: Drag & drop upload to extract dominant colors using `ColorThief`.
*   **Smart Matching**: Automatically maps hex codes to the nearest **Traditional Chinese Color** (e.g., "Cinnabar", "Tea White") using Euclidean distance.
*   **Responsive UI**: Built with Tailwind CSS for mobile-first usage.

### 🧠 The "GeFei Brain" SEO Engine
Unlike a Single Page App (SPA), this project uses **Programmatic SEO** to capture long-tail traffic:
*   **500+ Landing Pages**: `/color/[slug]` (e.g., `/color/glaze-blue`).
*   **Topic Clusters**: `/colors/[group]` (e.g., `/colors/red`, `/colors/nature`).
*   **Optimized Metadata**: Left-loaded titles, self-referencing canonical tags, and dynamic sitemap.

### 🤖 AI Backend
*   **DeepSeek V3 (via OpenRouter)**: Generates 500+ unique color data points (Meaning, Poetry, Tags).
*   **Replicate (Flux-Schnell)**: Generates 8K wallpapers on-demand based on color meanings.

---

## 🛠️ Stack

*   **Framework**: Next.js 14 (App Router)
*   **Styling**: Tailwind CSS, Lucide React
*   **AI (Text)**: OpenRouter API (DeepSeek)
*   **AI (Images)**: Replicate API (Flux-Schnell)
*   **Deployment**: Vercel

---

## 📦 Data Scaling

The content database is located at `src/data/chineseColors.json`.
To scale from the initial seed to 500+ items:

```bash
# Run the generation script
node scripts/generate_colors.js
```

This script explicitly filters duplicates and enforces "Thematic Rotation" to ensure high-quality data.

---

## ☁️ Deployment

### 1. Environment Variables
Set these in your Vercel Project Settings:

```bash
OPENROUTER_API_KEY=sk-or...
REPLICATE_API_TOKEN=r8...
```

### 2. Build & Deploy
This project uses **Static Site Generation (SSG)** for maximum speed and indexability.

```bash
npm run build
# Output:
# ● /color/[slug]    89+ pages (SSG)
# ○ /colors/[group]  15+ pages (Static)
```

---

## 📝 License
MIT
