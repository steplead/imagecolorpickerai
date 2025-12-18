# 📘 Master Development Plan: AI Image Color Picker (GeFei Protocol Edition)

**Project Name:** Zen/Pro Image Color Picker
**Target Domain:** `ImageColorPickerAi.com` (or `ProImageColorPicker.com`)
**The Product:** A high-traffic "Classified Library" of colors, anchored by a core Image Color Picker tool. Users upload images to extract colors, which are matched to **Traditional Chinese Color Names**, enriched with **Cultural Meaning** (AI), and visualized with **AI Wallpapers**.

> **Adherence:** This plan strictly follows the `GeFei_Brain` Protocols (Keywords, Architecture, Config, Backlinks).

---

## 🛠️ Phase 1: Tech Stack & Architecture (Protocol 2 & 3)

**Budget Goal:** ~$0/month to start.

### 1.1 The Stack (Protocol 3)
*   **Framework:** Next.js 14+ (App Router) - *Chosen for Indexability (SSR).*
*   **Styling:** Tailwind CSS - *Fast/Utility First.*
*   **Hosting:** Vercel (Free Tier)
*   **Domain DNS:** SiteGround (Point A Record to Vercel)
*   **AI (Text):** DeepSeek-V3 via OpenRouter API
*   **AI (Image):** Flux-Schnell via Fal.ai

### 1.2 Site Architecture (Protocol 2: Classified Listing)
We will NOT build a Single Page App. We will build a **Structure of Content Hierarchy**.

1.  **Home Page (`/`)**:
    *   **Keyword:** "Image Color Picker" (Head Term).
    *   **Function:** The main upload tool functionality (BOFU).
    *   **Content:** Links down to Category pages.

2.  **Detail Pages (`/color/[slug]`)**:
    *   **Keyword:** "[Color Name] Hex Code", "Meaning of [Color Name]", "[Color Name] Wallpaper".
    *   **Function:** Programmatic SEO pages generated from the Database.
    *   **Count:** 500+ Pages (One for each color in `chineseColors.json`).

3.  **Category Pages (`/colors/[group]`)**:
    *   **Keyword:** "[Color Group] Colors" (e.g., "Red Colors", "Warm Colors").
    *   **Function:** Aggregation/Listings (MOFU). Group colors by visual or emotional attributes.

### 1.3 Initial Setup
```bash
npx create-next-app@latest image-color-picker-ai
# Select YES to: TypeScript, Tailwind, ESLint, App Router, Src Directory.
cd image-color-picker-ai
npm install color-thief-browser lucide-react @fal-ai/serverless-client
```

---

## 🏗️ Phase 2: The Core Logic & Database

**Goal:** Work instantly using Math + JSON.

### 2.1 The Database (`src/data/chineseColors.json`)
This is the "Seed" for our Programmatic SEO.
```json
[
  {
    "id": "cinnabar",
    "name": "Cinnabar",
    "chinese": "朱砂",
    "hex": "#ff461f",
    "meaning": "Symbolizes joy, life, and eternity.",
    "tags": ["red", "warm", "nature"]
  },
  // ... 500+ items
]
```

### 2.2 The Matching Algorithm (`src/utils/colorUtils.js`)
(Standard Euclidean distance logic, ensuring every user pick maps to a Landing Page entity).

---

## 🧠 Phase 3: The AI Backend (Next.js API Routes)

**Goal:** Securely enrich data.
*   **Poetry/Meaning API**: `/api/analyze-color` (Wraps OpenRouter/DeepSeek).
*   **Wallpaper API**: `/api/generate-wallpaper` (Wraps Fal.ai).

---

## 🎨 Phase 4: Frontend & Content Strategy (Protocol 2 & 4)

### 4.1 Home Page Strategy
*   **Top Fold**: The Tool Area (Drag & Drop). *Must be usable instantly.*
*   **Middle Fold**: "Recent Colors" or "Popular Chinese Colors" grid. *Links to Detail Pages.*
*   **Bottom Fold**: Text content optimized for "Image Color Picker" (FAQ, Guide).

### 4.2 Detail Page Template (`/color/[slug]/page.js`)
*   **H1**: `[Color Name] ([Chinese]) Color Code & Meaning` (Protocol 3).
*   **Content**:
    *   Large Color Block.
    *   Hex/RGB/CMYK Conversion Table (Suffix: "Converter").
    *   AI-Generated Meaning (Pre-rendered if possible).
    *   "Generate Wallpaper" Button.
    *   **Internal Links**: "See all [Red] Colors" (Links to Category).

---

## 🚀 Phase 5: SEO Configuration (Protocol 3 - Critical)

### 5.1 TDK (Title, Description, Keywords)
*   **Home Title**: `Image Color Picker - Extract Hex Codes from Images` (Left-Loaded Keyword).
*   **Detail Title**: `[Color Name] Hex Code #XXXXXX - Meaning & Wallpaper | [Brand]`
*   **Meta Keywords**: **DELETE**. Do not use.
*   **Canonical**: **MANDATORY**.
    *   Code: `<link rel="canonical" href="https://domain.com/color/cinnabar" />`

### 5.2 Sitemap
*   Auto-generate `sitemap.xml` to include all 500+ Detail URLs and Category URLs.

---

## 📈 Phase 6: Launch & Marketing (Protocol 4)

### 6.1 "Launch Tonight" Strategy
*   Deploy heavily functional MVP (Home + 50 Detail Pages).
*   **Traffic Source**:
    *   **Directories**: Submit Home URL to AI Directories.
    *   **Social**: Post generated Wallpapers to Pinterest/Twitter with links to specific **Detail Pages** (not Home).

### 6.2 Backlink Strategy (Copy Homework)
*   Identify top "Color Picker" sites.
*   Find where they are listed (using Free Backlink Checkers).
*   Replicate those specific directory submissions.

---

## 💰 Phase 7: Monetization (Protocol 3)

*   **RPM Goal**: $10+
*   **Ad Placement**:
    *   **Home**: Below the Tool.
    *   **Detail Page**: Sidebar or between Meaning and Wallpaper.
*   **Affiliate**: Link to "Pantone Guides" or "Design Courses" on Detail pages.