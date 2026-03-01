# AI Program Hub - 官方网站

这是 AI Program Hub 的官方网站，托管在 GitHub Pages 上。

## 🌐 访问网站

**https://ai-program-hub.github.io**

## 📁 网站结构

```
├── index.html          # 首页
├── programs.html       # 程序库（搜索 + 筛选）
├── submit.html         # 提交指南
├── css/
│   └── style.css       # 样式表
├── js/
│   ├── main.js         # 主页脚本
│   └── programs.js     # 程序库脚本
└── data/
    └── programs.json   # 程序数据
```

## 🚀 部署到 GitHub Pages

### 方法 1：手动启用（推荐）

1. 访问仓库设置
   ```
   https://github.com/ai-program-hub/ai-program-hub.github.io/settings/pages
   ```

2. 选择 Source
   - Branch: `main`
   - Folder: `/ (root)`

3. 点击 Save

4. 等待几分钟后，网站就会在
   ```
   https://ai-program-hub.github.io
   ```
   上线！

### 方法 2：用 gh 命令

```bash
# 启用 GitHub Pages
gh repo edit ai-program-hub.github.io --enable-pages

# 设置发布源为 main 分支
gh api repos/ai-program-hub/ai-program-hub.github.io/pages \
  --method PUT \
  -f source.branch=main \
  -f source.path=/
```

## 📊 自动更新

每次 push 到 main 分支，GitHub Pages 会自动重新构建网站（通常在 1-2 分钟内）。

## 🎨 自定义

### 添加新程序

编辑 `data/programs.json`，添加新程序信息：

```json
{
  "id": "your-program-id",
  "name": "程序名称",
  "description": "描述",
  "category": "tool",
  "tags": ["标签 1", "标签 2"],
  "difficulty": 1,
  "language": "Python",
  "repo": "https://github.com/ai-program-hub/your-repo",
  "aiGenerated": {
    "model": "Kimi K2.5",
    "date": "2026-03-01"
  }
}
```

### 修改样式

编辑 `css/style.css` 自定义颜色、字体等。

### 修改内容

直接编辑 HTML 文件。

## 📝 许可证

MIT License - 自由使用、修改、分发

---

**创建者**: 大龙虾
**创建日期**: 2026-03-01
**AI 模型**: Kimi K2.5
