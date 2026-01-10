#!/usr/bin/env node

/**
 * Protocol 1: 关键词审计辅助脚本
 * 用途：从colorData提取所有颜色名称，生成关键词检查列表
 */

const fs = require('fs');
const path = require('path');

// 读取颜色数据
const colorsPath = path.join(__dirname, '../src/data/chineseColors.json');
const colors = JSON.parse(fs.readFileSync(colorsPath, 'utf-8'));

// 生成关键词检查列表
const keywordAuditList = colors.map(color => {
  const slug = color.id;
  const name = color.name;
  const nativeName = color.nativeName;
  const hex = color.hex;

  // Protocol 1要求：使用Suffix Strategy生成关键词变体
  const keywordVariations = [
    `${name} color`,                    // 基础
    `${name} hex code`,                 // Suffix: hex code
    `${name} color meaning`,            // Suffix: meaning
    `${nativeName} color`,              // 中文变体
    `traditional ${color.collectionId} ${name}`,  // 传统色
    `${name} color palette`,            // Suffix: palette
  ];

  return {
    slug,
    url: `https://imagecolorpickerai.com/color/${slug}`,
    keywords: keywordVariations,
    currentTitle: `${name} (${nativeName}, ${hex}) - Contrast Checker & ${color.collectionId} | Image Color Picker AI`,
    suggestedTitle: `${name} Color - ${hex} Hex Code, ${color.collectionId} Meaning & Design Guide | ImageColorPickerAI`,
    needsAudit: true,  // 需要使用Ahrefs/Keyword Surfer检查KD
    notes: ''
  };
});

// 分类建议
const audit = {
  total: colors.length,
  needsKDAudit: colors.length,
  highPriority: [],  // KD < 15 (金矿)
  mediumPriority: [], // KD 15-30 (可竞争)
  lowPriority: [],   // KD > 50 (浪费)
  generatedAt: new Date().toISOString(),
  keywords: keywordAuditList
};

// 保存审计列表
const outputPath = path.join(__dirname, '../KEYWORD_AUDIT_LIST.json');
fs.writeFileSync(outputPath, JSON.stringify(audit, null, 2));

console.log('✅ Protocol 1 关键词审计列表已生成');
console.log(`📊 总计: ${audit.total}个颜色页面`);
console.log(`📁 输出: ${outputPath}`);
console.log(`\n下一步:`);
console.log(`1. 打开 KEYWORD_AUDIT_LIST.json`);
console.log(`2. 使用Ahrefs/Keyword Surfer检查每个关键词的KD`);
console.log(`3. 根据KD值分类：`);
console.log(`   - KD < 15: highPriority (金矿，投入更多资源)`);
console.log(`   - KD 15-30: mediumPriority (可竞争，优化)`);
console.log(`   - KD > 50: lowPriority (浪费，删除或重定向)`);
