#!/bin/bash

# Phase 2: 多语言Schema快速修复脚本
# 使用方法: bash phase2-multilingual-fix.sh

echo "=== Phase 2: 多语言Schema快速修复 ==="
echo ""
echo "修复范围:"
echo "1. 多语言扫描页 (7个) - HowTo Schema"
echo "2. 多语言颜色页 (7个) - Breadcrumb Schema"
echo "3. 多语言关于页 (7个) - Organization Schema"
echo "4. 多语言联系页 (7个) - ContactPage Schema"
echo "5. 多语言Ideas页 (7个) - CollectionPage Schema"
echo ""
echo "总计: 35个文件"
echo ""
echo "=============================================="
echo "示例: 中文扫描页 HowTo Schema"
echo "=============================================="
cat <<'SCHEMA'
const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "如何使用AI个人色彩分析师",
    "description": "了解如何使用AI驱动的面部分析发现您的独特中国传统色彩图谱",
    "image": "https://imagecolorpickerai.com/images/how-to-scan.png",
    "totalTime": "PT2M",
    "step": [
        {
            "@type": "HowToStep",
            "name": "拍摄或上传清晰的照片",
            "text": "选择一张清晰的面部照片...",
            "url": "https://imagecolorpickerai.com/zh/scan#step1"
        },
        {
            "@type": "HowToStep",
            "name": "AI分析您的特征",
            "text": "我们的AI会分析您的面部特征...",
            "url": "https://imagecolorpickerai.com/zh/scan#step2"
        },
        {
            "@type": "HowToStep",
            "name": "获取您的色彩调色板",
            "text": "根据数千年的色彩理论...",
            "url": "https://imagecolorpickerai.com/zh/scan#step3"
        }
    ]
};

// 在组件中添加:
return (
    <>
        <JsonLd data={howToSchema} />
        <PersonalColorAnalyst locale="zh" />
    </>
);
SCHEMA

echo ""
echo "=============================================="
echo "快速修复指南:"
echo "=============================================="
echo ""
echo "选项1: 使用AI辅助修复 (推荐)"
echo "  - 使用Claude/GitHub Copilot逐个修复文件"
echo "  - 参考: phase2-howto-schema.js 中的模板"
echo "  - 预计时间: 30-45分钟"
echo ""
echo "选项2: 手动修复关键页面 (快速)"
echo "  - 只修复扫描页和颜色页 (14个文件)"
echo "  - 跳过about/contact/ideas页"
echo "  - 预计时间: 30分钟"
echo ""
echo "选项3: 延后修复 (可以接受)"
echo "  - 当前英文版+多语言首页已100%"
echo "  - 次级页面可以逐步修复"
echo "  - 不影响当前SEO效果"
echo ""
echo "=============================================="
echo "建议: 选项2 (手动修复关键页面)"
echo "=============================================="
