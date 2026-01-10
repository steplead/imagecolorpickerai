# 🎯 Ge Fei Protocol 立即行动计划

**创建时间**: 2026-01-08
**优先级**: P0（生死攸关）
**目标**: 从15/100提升到80/100 Protocol合规性

---

## 📋 Week 1-2: Protocol 1（关键词审计）+ Protocol 4（外链分析）

### Day 1: 工具准备

#### 选项A: 付费工具（推荐 - 最准确）
```bash
# Ahrefs 7天试用 - $7
1. 访问: https://ahrefs.com
2. 注册7天试用 ($7)
3. 验证网站所有权
```

#### 选项B: 免费工具（可接受 - 80%准确度）
```bash
# 免费替代方案：
1. Google Search Console (免费)
   - 验证网站
   - 导出所有查询和 impressions

2. Keyword Surfer (Chrome扩展 - 免费)
   - 安装: https://keywordsurfer.com
   - 检查Top 50页面的关键词KD

3. Ubersuggest (免费有限版)
   - https://neilpatel.com/ubersuggest
   - 每天免费3次搜索
```

---

### Day 2-3: Protocol 1 - 关键词审计

#### 步骤1: 导出当前关键词
```bash
# 使用Google Search Console
Performance → Search Results → 日期范围: 最近3个月
→ 导出为CSV

# 或使用Ahrefs
Site Explorer → Organic keywords → 导出全部
```

#### 步骤2: 筛选分类
创建电子表格，添加列：

| URL | 关键词 | KD | Volume | Impressions | Position | Action |
|-----|--------|----|----|------------|----------|---------|
| /color/cinnabar | cinnabar color | ? | ? | 150 | 25 | ? |
| /color/teawhite | tea white color | ? | ? | 80 | 18 | ? |

#### 步骤3: 使用工具检查KD
```bash
# 对Top 50页面逐个检查：

# 选项A: Keyword Surfer
1. 打开Chrome
2. 访问: https://imagecolorpickerai.com/color/cinnabar
3. 点击Keyword Surfer图标
4. 记录: KD, Volume, CPC

# 选项B: Ahrefs Keywords Explorer
1. Keywords Explorer
2. 输入: "cinnabar color"
3. 记录: KD, Volume, CPC
```

#### 步骤4: 分类行动
根据KD值分类：

**🟢 金矿页面 (KD < 15)** → 投入更多资源
```bash
Action:
- 创建更多变体页面
- 添加更多内容
- 获取更多内链
- 创建社会分享内容
```

**🟡 可竞争页面 (KD 15-30)** → 优化
```bash
Action:
- 优化Title（关键词在最左边）
- 添加FAQ内容
- 优化内部链接
- 添加图片/视频
```

**🔴 浪费页面 (KD > 50)** → 重定向或删除
```bash
Action:
- 如果有backlinks: 301重定向到相关页面
- 如果无backlinks: 410删除或noindex
- 不要浪费资源在这些页面
```

#### 步骤5: 重新定位（Suffix Strategy）
```bash
# Protocol 1要求：使用Suffix找到低竞争关键词

# 当前可能错误：
"red color" - KD 89 (太难)

# 应该使用Suffix：
"cinnabar color hex code" - KD 5 (简单)
"traditional chinese red color" - KD 12 (简单)
"chinese color for design" - KD 8 (简单)

# 重新定位Top 20 KD > 50的页面
```

---

### Day 4-5: Protocol 4 - 竞争对手外链分析

#### 步骤1: 识别竞争对手
```bash
# Top竞争对手：
1. colorhunt.co (DR 68)
2. coolors.co (DR 75)
3. paletton.com (DR 56)
4. canva.com/colors (DR 91)
5. designspiration.com (DR 74)

# 搜索方法：
Google: "chinese color encyclopedia"
Google: "traditional color palette"
Google: "ai color picker"
```

#### 步骤2: 导出竞争对手外链
```bash
# 使用Ahrefs:
Site Explorer → colorhunt.co
→ Backlinks → 筛选条件:
  - DR: > 40
  - Type: Dofollow
  - Platforms: (不选)
→ 导出Top 100

# 免费替代方案:
# 使用Small SEO Tools
https://smallseotools.com/backlink-checker/
```

#### 步骤3: 分类外链来源
创建电子表格：

| 网站 | DR | 类型 | 难度 | 状态 |
|-----|----|----|------|------|
| producthunt.com | 92 | Directory | 简单 | ✅ 已提交 |
| news.ycombinator.com | 89 | Social | 中等 | ❌ 未提交 |
| futurepedia.io | 64 | Directory | 简单 | ❌ 未提交 |
| thereisanai.com | 55 | Directory | 简单 | ❌ 未提交 |

#### 步骤4: 执行外链复制

**低垂果实（今天做）**:
```bash
# 1. Product Hunt
✅ 已完成（根据ge_fei_success_report.md）

# 2. Hacker News "Show HN"
访问: https://news.ycombinator.com
→ 点击 "Submit"
→ Title: "Show HN: I built an AI color picker that matches images to 500+ traditional Chinese colors"
→ URL: https://imagecolorpickerai.com
→ Text: （写一个真诚的故事）

# 3. Reddit
r/InternetIsBeautiful: 提交首页
r/Design: 提交配色工具
r/Color: 提交颜色百科
r/SideProject: 分享开发故事

# 4. AI目录（必须做）
Futurepedia: https://futurepedia.io/gadget/submit
There's An AI For That: https://theresanaiforthat.com/submit
AI Valley: https://aivalley.ai/submit
TopAI: https://topai.tools/submit
```

**中等难度（本周做）**:
```bash
# 5. 设计博客
找到Design博客，投稿guest post:
- Smashing Magazine
- CSS-Tricks
- Webdesigner Depot
- Design Shack

# 6. 工具目录
AlternativeTo: https://alternativeto.net/
Toolify: https://toolify.ai/
Product Hunt（如果还没做）
```

**困难（本月做）**:
```bash
# 7. 友情链接交换
找其他Indie Hacker站点（DR 15-30）
Email模板:
"Hi, I run imagecolorpickerai.com (DR XX).
I found your site and love your content.
Want to swap footer links? We're in non-competing niches.
Let me know!"

# 8. 付费目录（可选）
有些高质量目录值得$10-20：
- BestDesignTools.co
- AI工具合集站
```

---

## 📊 Week 3-4: Protocol 3（Title优化）+ Protocol 2（内部链接）

### Day 6-8: Protocol 3 - Title优化

#### 当前问题检查
```bash
# 检查500+颜色页的Title是否符合Protocol 3

# 当前可能的错误格式：
❌ "Cinnabar (#E34234) - Traditional Chinese Red Color | ImageColorPickerAI"
   问题: 关键词"Cinnabar"不是最左边，KD可能很高

# 正确格式：
✅ "Cinnabar Color - Hex Code, Meaning & Design Guide | ImageColorPickerAI"
   - 关键词"Cinnabar Color"在最左边 ✅
   - 包含USP: "Hex Code, Meaning & Design Guide"
   - 包含Brand: "ImageColorPickerAI"
   - 长度: 73字符 ✅ (< 80)
```

#### 批量检查脚本
```bash
# 使用check-seo-coverage.sh（已存在）
bash check-seo-coverage.sh

# 或手动检查Top 50:
for url in $(cat top50_urls.txt); do
  curl -s $url | grep -o '<title>[^<]*</title>'
done
```

#### 修复Top 50页面
```bash
# 对于Title不符合Protocol 3的页面：
1. 读取src/data/chineseColors.json
2. 找到对应颜色的slug
3. 更新generateMetadata函数
4. 格式：[Keyword] - [USP] | [Brand]

# 示例修改（src/app/color/[slug]/page.js）:
// 修改前：
title: `${color.name} (${color.nativeName}) - ${color.hex} - Contrast Checker & ${meta.name} | Image Color Picker AI`

// 修改后：
title: `${color.name} Color - ${color.hex} Hex Code, ${color.collectionId} Meaning & Design | ImageColorPickerAI`
```

---

### Day 9-10: Protocol 2 - 内部链接审计

#### 检查Orphan Pages
```bash
# 使用工具（需要安装）:
# 选项A: Screaming Frog SEO Spider (免费500页)
# 选项B: Website Auditor (免费)

# 或使用简单脚本：
grep -r "href.*color/cinnabar" src/
```

#### 修复Orphan Pages
```bash
# 对于0个incoming links的页面：
1. 在首页添加链接（FryingBeansFooter已做✅）
2. 在相关Category页添加链接
3. 在相关Tag页添加链接
4. 确保"Related Colors"链接存在
```

#### 优化锚文本
```bash
# 错误的锚文本：
❌ <a href="/color/cinnabar">点击这里</a>
❌ <a href="/color/cinnabar">read more</a>

# 正确的锚文本：
✅ <a href="/color/cinnabar">Cinnabar Color</a>
✅ <a href="/color/cinnabar">traditional Chinese red color</a>
✅ <a href="/color/cinnabar">cinnabar (#E34234)</a>
```

---

## 📅 Month 2-3: Protocol 5（扩展）+ Protocol 6（流量）

### Protocol 5: 生态系统优化
```bash
# 1. 修剪死页面
Google Search Console → Coverage
→ 找出0 Impression的页面（6个月+）
→ 301重定向或410删除

# 2. 创建多路径
确保每个高价值页面可以通过：
- 首页 → 直接链接
- 首页 → Category → 页面
- 首页 → Tag → 页面
- "本周流行" → 页面

# 3. 动态内部链接
确保FryingBeansFooter随机旋转（已实现✅）
```

### Protocol 6: 价值交换策略
```bash
# 1. 创建"反向链接诱饵"
- "2024年最佳中国传统色彩"榜单
- "品牌配色指南"ebook
- "色彩搭配模板"下载
- "设计师色彩工具包"

# 2. 社区价值交换
- Reddit r/Design: 提供免费配色建议
- Twitter: 分享每日色彩
- Pinterest: 发布壁纸（已有✅）

# 3. 合作伙伴价值交换
- 联系设计博客：提供guest post
- 联系工具站：互换链接
- 联系YouTuber：提供素材
```

---

## ✅ 执行检查清单

### Week 1-2（生死攸关）:
- [ ] Day 1: 注册Ahrefs或设置免费工具
- [ ] Day 2-3: 导出并分析所有关键词
- [ ] Day 2-3: 分类页面（金矿/可竞争/浪费）
- [ ] Day 2-3: 删除或重定向KD > 50的页面
- [ ] Day 4-5: 分析竞争对手外链
- [ ] Day 4-5: 提交Product Hunt（已有✅）
- [ ] Day 4-5: 提交Hacker News "Show HN"
- [ ] Day 4-5: 提交Reddit相关subreddit
- [ ] Day 4-5: 提交5个AI目录

### Week 3-4（重要）:
- [ ] Day 6-8: 检查所有500+页面Title
- [ ] Day 6-8: 修复Top 50不符合Protocol 3的Title
- [ ] Day 9-10: 检查所有Orphan Pages
- [ ] Day 9-10: 为Orphan Pages添加内链
- [ ] Day 9-10: 优化所有锚文本

### Month 2-3（扩展）:
- [ ] 修剪所有0 Impression的页面
- [ ] 创建多路径到高价值页面
- [ ] 创建"反向链接诱饵"内容
- [ ] 执行价值交换策略

---

## 🎯 成功指标

### Week 1-2后:
- ✅ 所有页面关键词KD < 30
- ✅ 获得至少10个高质量外链（DR > 30）
- ✅ 提交到20个目录/社区

### Week 3-4后:
- ✅ 所有Title符合Protocol 3格式
- ✅ 0个Orphan Pages
- ✅ 所有锚文本描述性

### Month 2-3后:
- ✅ 删除所有死页面
- ✅ 获得50+高质量外链
- ✅ Protocol合规性 > 80%

---

## 💡 关键提醒

### ❌ 不要做:
- 不要再优化Schema（已100%）
- 不要再修复小bug
- 不要添加更多功能
- 不要猜测关键词数据

### ✅ 必须做:
- **立即执行Protocol 1**（关键词审计）
- **立即执行Protocol 4**（外链复制）
- 使用工具验证，不要猜测
- 跟踪数据，基于数据决策

---

**记住**: Ge Fei Protocol的核心是"选择战场"（Protocol 1）和"借力打力"（Protocol 4）。

**立即行动**: 从Day 1开始！
