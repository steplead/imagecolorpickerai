#!/usr/bin/env node

/**
 * 批量修复多语言页面的Schema标记
 * 自动为42个多语言页面添加适当的Schema
 */

const fs = require('fs');
const path = require('path');

// 多语言FAQ内容
const faqContent = {
  es: {
    title: "¿Cómo extraer colores de una imagen?",
    free: "¿Es gratis este selector de color?",
    art: "¿Puedo extraer colores para el arte japonés y chino?",
    answer1: "Simplemente sube tu imagen JPG o PNG a nuestra herramienta. Usa el ratón para pasar sobre cualquier área de la imagen y el código hex se mostrará al instante.",
    answer2: "Sí, ImageColorPickerAI es una herramienta en línea 100% gratuita con subidas y generaciones de paletas ilimitadas.",
    answer3: "Absolutamente. Nos especializamos en mapear colores digitales a paletas tradicionales, incluyendo sistemas de color japoneses de la era Heian y chinos de la era Ming."
  },
  fr: {
    title: "Comment extraire des couleurs d'une image ?",
    free: "Ce sélecteur de couleurs est-il gratuit ?",
    art: "Puis-je extraire des couleurs pour l'art japonais et chinois ?",
    answer1: "Téléchargez simplement votre image JPG ou PNG dans notre outil. Utilisez votre souris pour survoler n'importe quelle zone de l'image et le code hex s'affichera instantanément.",
    answer2: "Oui, ImageColorPickerAI est un outil en ligne 100% gratuit avec des téléchargements et générations de palettes illimités.",
    answer3: "Absolument. Nous nous spécialisons dans le mappage de couleurs numériques vers des palettes traditionnelles, y compris les systèmes de couleur japonais de l'ère Heian et chinois de l'ère Ming."
  },
  de: {
    title: "Wie extrahiere ich Farben aus einem Bild?",
    free: "Ist dieser Farbwähler kostenlos?",
    art: "Kann ich Farben für japanische und chinesische Kunst extrahieren?",
    answer1: "Laden Sie einfach Ihr JPG- oder PNG-Bild in unser Tool hoch. Verwenden Sie Ihre Maus, um einen beliebigen Bereich des Bildes zu hovered, und der Hex-Code wird sofort angezeigt.",
    answer2: "Ja, ImageColorPickerAI ist ein 100% kostenloses Online-Tool mit unbegrenzten Uploads und Palettengenerierungen.",
    answer3: "Absolut. Wir spezialisieren uns auf das Mapping von digitalen Farben zu traditionellen Paletten, einschließlich japanischer Farbsysteme der Heian-Zeit und chinesischer Farbsysteme der Ming-Zeit."
  },
  pt: {
    title: "Como extrair cores de uma imagem?",
    free: "Este seletor de cores é gratuito?",
    art: "Posso extrair cores para arte japonesa e chinesa?",
    answer1: "Basta enviar sua imagem JPG ou PNG para nossa ferramenta. Use o mouse para passar o mouse sobre qualquer área da imagem e o código hex será exibido instantaneamente.",
    answer2: "Sim, ImageColorPickerAI é uma ferramenta online 100% gratuita com uploads e gerações de paletas ilimitadas.",
    answer3: "Absolutamente. Nos especializamos em mapear cores digitais para paletas tradicionais, incluindo sistemas de cores japoneses da era Heian e chineses da era Ming."
  }
};

// 生成FAQ Schema的函数
function generateFAQSchema(lang) {
  const content = faqContent[lang];
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": content.title,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": content.answer1
        }
      },
      {
        "@type": "Question",
        "name": content.free,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": content.answer2
        }
      },
      {
        "@type": "Question",
        "name": content.art,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": content.answer3
        }
      }
    ]
  };
}

// 修复多语言首页
function fixMultilingualHomepages() {
  const languages = ['es', 'fr', 'de', 'pt'];

  languages.forEach(lang => {
    const filePath = path.join(__dirname, `src/app/${lang}/page.js`);

    if (!fs.existsSync(filePath)) {
      console.log(`❌ 文件不存在: ${filePath}`);
      return;
    }

    console.log(`📝 修复 ${lang.toUpperCase()} 首页...`);

    const faqSchema = generateFAQSchema(lang);
    const schemaJSON = JSON.stringify(faqSchema, null, 2);

    const schemaCode = `
    const faqSchema = ${schemaJSON};

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <HomeView locale="${lang}" />
        </>
    );
`;

    // 读取文件
    let content = fs.readFileSync(filePath, 'utf8');

    // 替换 return 语句
    const oldReturn = /export default function Page\(\) \{[\s\S]*?return <HomeView locale="([^"]+)" \/>;[\s\S]*?\}/;
    content = content.replace(oldReturn, `export default function Page() {${schemaCode}}`);

    // 写回文件
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ ${lang.toUpperCase()} 首页修复完成`);
  });
}

// 主函数
console.log('=== 批量修复多语言Schema ===\n');
console.log('修复语言: es, fr, de, pt');
console.log('修复文件: 4个首页');
console.log('\n开始修复...\n');

fixMultilingualHomepages();

console.log('\n=== 修复完成 ===');
console.log('下一步: 修复扫描页、关于页、联系页、Ideas页');
console.log('\n提示: 这是自动化生成的代码，请手动验证后提交');
