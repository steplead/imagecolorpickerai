#!/bin/bash

# SEO Coverage Check Script
# 检查所有本地能验证的SEO问题

echo "=== SEO Coverage Check ==="
echo ""

# 1. 检查Schema覆盖
echo "1. Schema覆盖检查:"
echo "   首页 (page.js):"
grep -c "schema.org\|application/ld" src/app/page.js 2>/dev/null || echo "   0"

echo "   颜色页 (color/[slug]/page.js):"
grep -c "schema.org\|application/ld" "src/app/color/[slug]/page.js" 2>/dev/null || echo "   0"

echo "   扫描页 (scan/page.js):"
grep -c "schema.org\|application/ld" src/app/scan/page.js 2>/dev/null || echo "   0"

echo "   关于页 (about/page.js):"
grep -c "schema.org\|application/ld" src/app/about/page.js 2>/dev/null || echo "   0"

echo "   联系页 (contact/page.js):"
grep -c "schema.org\|application/ld" src/app/contact/page.js 2>/dev/null || echo "   0"

echo "   Ideas页 (ideas/page.js):"
grep -c "schema.org\|application/ld" src/app/ideas/page.js 2>/dev/null || echo "   0"

# 2. 检查多语言页面Schema
echo ""
echo "2. 多语言Schema检查:"
for lang in zh ja es fr de pt; do
  echo "   $lang 首页:"
  grep -c "schema.org\|application/ld" "src/app/$lang/page.js" 2>/dev/null || echo "   0"
done

# 3. 检查Title长度
echo ""
echo "3. Title长度检查 (Protocol 3: 建议<80字符):"
echo "   首页:"
grep "title:" src/app/page.js | head -1 | sed 's/.*title: //' | sed 's/",$//' | awk '{print length($0) " 字符: " $0}'

echo "   扫描页:"
grep "title:" src/app/scan/page.js | head -1 | sed 's/.*title: //' | sed 's/",$//' | awk '{print length($0) " 字符: " $0}'

echo "   关于页:"
grep "title:" src/app/about/page.js | head -1 | sed 's/.*title: //' | sed 's/",$//' | awk '{print length($0) " 字符: " $0}'

# 4. 检查Canonical标签
echo ""
echo "4. Canonical标签检查:"
grep -r "canonical:" src/app --include="*.js" | wc -l | xargs -I {} echo "   {} 个页面有canonical"

# 5. 检查hreflang
echo ""
echo "5. hreflang国际化检查:"
grep -r "hreflang\|languages:" src/app/page.js | grep -c "en\|zh\|ja" | xargs -I {} echo "   首页有 {} 种语言配置"

# 6. 检查robots.txt
echo ""
echo "6. robots.txt检查:"
if [ -f "public/robots.txt" ]; then
  echo "   ✓ robots.txt存在"
  head -5 public/robots.txt
else
  echo "   ✗ robots.txt不存在"
fi

# 7. 检查sitemap
echo ""
echo "7. Sitemap检查:"
if [ -f "public/sitemap.xml" ] || [ -f "src/app/sitemap.js" ]; then
  echo "   ✓ Sitemap存在"
else
  echo "   ✗ Sitemap不存在"
fi

echo ""
echo "=== 检查完成 ==="
