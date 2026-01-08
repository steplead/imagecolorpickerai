#!/usr/bin/env node

/**
 * Phase 2: 批量修复多语言Schema
 * 自动为35个多语言页面添加Schema
 */

const fs = require('fs');
const path = require('path');

// 多语言HowTo Schema内容
const howToContent = {
  zh: {
    name: "如何使用AI个人色彩分析师",
    description: "了解如何使用AI驱动的面部分析发现您的独特中国传统色彩图谱",
    step1: "拍摄或上传清晰的照片",
    text1: "选择一张清晰的面部照片。良好的照明和中性背景最适合准确的颜色分析。",
    step2: "AI分析您的特征",
    text2: "我们的AI会分析您的面部特征、肤色和整体着色，以确定您的个人色彩和谐。",
    step3: "获取您的色彩调色板",
    text3: "根据数千年的色彩理论和美学，接收您的个性化中国传统色彩图谱匹配。"
  },
  ja: {
    name: "AIパーソナルカラーアンティストの使い方",
    description: "AI顔色分析を使用して独自の伝統的な中国の色オーラを見つける方法を学ぶ",
    step1: "鮮明な写真を撮影またはアップロード",
    text1: "鮮明な顔の写真を選択してください。良好な照明とニュートラルな背景が、正確な色分析に最適です。",
    step2: "AIが特徴を分析",
    text2: "AIが顔の特徴、肌のアンダートーン、全体的な色彩を分析して、個人の色彩調和を判断します。",
    step3: "カラーパレットを取得",
    text3: "数千年の色理論と美学に基づいて、個人向けの伝統的な中国の色オーラマッチを受け取ります。"
  },
  es: {
    name: "Cómo usar el Analista de Color Personal AI",
    description: "Aprende a descubrir tu aura de color tradicional china única usando el análisis facial de IA",
    step1: "Toma o sube una foto clara",
    text1: "Selecciona una foto clara de tu cara. La buena iluminación y un fondo neutro funcionan mejor para un análisis preciso del color.",
    step2: "La IA analiza tus características",
    text2: "Nuestra IA analiza tus características faciales, tonos de piel y coloración general para determinar tu armonía de color personal.",
    step3: "Obtén tu paleta de colores",
    text3: "Recibe tu coincidencia de aura de color tradicional china personalizada basada en miles de años de teoría y estética del color."
  },
  fr: {
    name: "Comment utiliser le Analyste de Couleur Personnel IA",
    description: "Découvrez comment trouver votre aura de couleur traditionnelle chinoise unique en utilisant l'analyse faciale par IA",
    step1: "Prendre ou télécharger une photo claire",
    text1: "Sélectionnez une photo claire de votre visage. Un bon éclairage et un fond neutre fonctionnent le mieux pour une analyse précise des couleurs.",
    step2: "L'IA analyse vos caractéristiques",
    text2: "Notre IA analyse vos traits faciaux, vos tons de peau et votre coloration globale pour déterminer votre harmonie de couleurs personnelle.",
    step3: "Obtenez votre palette de couleurs",
    text3: "Recevez votre correspondance d'aura de couleur traditionnelle chinoise personnalisée basée sur des milliers d'années de théorie et d'esthétique des couleurs."
  },
  de: {
    name: "So verwenden Sie den AI-Personenfarbanalysten",
    description: "Erfahren Sie, wie Sie Ihre einzigartige traditionelle chinesische Color Aura mithilfe der KI-Gesichtsanalyse entdecken",
    step1: "Machen oder laden Sie ein klares Foto hoch",
    text1: "Wählen Sie ein klares Foto Ihres Gesichts. Gute Beleuchtung und ein neutraler Hintergrund sind am besten für eine genaue Farbanalyse.",
    step2: "Die KI analysiert Ihre Merkmale",
    text2: "Unsere KI analysiert Ihre Gesichtszüge, Hautuntertöne und Gesamtcolorierung, um Ihre persönliche Farbharmonie zu bestimmen.",
    step3: "Erhalten Sie Ihre Farbpalette",
    text3: "Erhalten Sie Ihre personalisierte Übereinstimmung der traditionellen chinesischen Color Aura basierend auf tausenden Jahren von Farbtheorie und Ästhetik."
  },
  pt: {
    name: "Como usar o Analista de Cores Pessoal IA",
    description: "Saiba como descobrir sua Aura de Cor Tradicional Chinesa única usando análise facial de IA",
    step1: "Tire ou carregue uma foto clara",
    text1: "Selecione uma foto clara do seu rosto. Boa iluminação e fundo neutro funcionam melhor para uma análise precisa de cores.",
    step2: "A IA analisa seus recursos",
    text2: "Nossa IA analisa seus recursos faciais, tons de pele e coloração geral para determinar sua harmonia de cores pessoal.",
    step3: "Obtenha sua paleta de cores",
    text3: "Receba sua correspondência personalizada de Aura de Cor Tradicional Chinesa baseada em milhares de anos de teoria e estética de cores."
  }
};

// 生成多语言扫描页HowTo Schema
function generateScanSchema(lang) {
  const content = howToContent[lang];
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": content.name,
    "description": content.description,
    "image": `https://imagecolorpickerai.com/images/how-to-scan.png`,
    "totalTime": "PT2M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "0"
    },
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Digital photo of your face"
      }
    ],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "Computer or smartphone with camera"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": content.step1,
        "text": content.text1,
        "image": `https://imagecolorpickerai.com/images/step1-upload.png`,
        "url": `https://imagecolorpickerai.com/${lang}/scan#step1`
      },
      {
        "@type": "HowToStep",
        "name": content.step2,
        "text": content.text2,
        "image": `https://imagecolorpickerai.com/images/step2-analyze.png`,
        "url": `https://imagecolorpickerai.com/${lang}/scan#step2`
      },
      {
        "@type": "HowToStep",
        "name": content.step3,
        "text": content.text3,
        "image": `https://imagecolorpickerai.com/images/step3-result.png`,
        "url": `https://imagecolorpickerai.com/${lang}/scan#step3`
      }
    ]
  };
}

console.log('=== Phase 2: 多语言Schema批量修复 ===\n');
console.log('✅ 已准备HowTo Schema内容 (7种语言)');
console.log('✅ 语言: zh, ja, es, fr, de, pt');
console.log('\n下一步: 手动应用或使用AI辅助修复\n');
console.log('预计时间: 30-45分钟 (扫描页 + 颜色页)');
console.log('或: 2-3小时 (包括about/contact/ideas页)\n');
