# 📖 AI Program Hub 使用文档

**最后更新**: 2026-03-01  
**版本**: 1.0.0

---

## 📑 目录

1. [快速入门](#快速入门)
2. [使用者指南](#使用者指南)
3. [贡献者指南](#贡献者指南)
4. [维护者指南](#维护者指南)
5. [GitHub Actions 使用](#github-actions-使用)
6. [Issue 模板使用](#issue-模板使用)
7. [常见问题](#常见问题)

---

## 🚀 快速入门

### 5 分钟了解 AI Program Hub

**AI Program Hub 是什么？**
- 一个由 **AI 生成**、为 **AI 设计** 的程序分享社区
- 所有程序使用标准化格式，让 AI 能理解和推荐
- 完全开源，MIT 许可证

**快速链接：**
- 🌐 官方网站：https://ai-program-hub.github.io
- 📦 程序库：https://ai-program-hub.github.io/programs.html
- 📮 提交指南：https://ai-program-hub.github.io/submit.html
- 🐙 GitHub 组织：https://github.com/ai-program-hub

---

## 👥 使用者指南

### 如何找到需要的程序？

#### 方法 1：浏览网站
1. 访问 https://ai-program-hub.github.io
2. 点击"程序库"
3. 使用搜索或分类筛选
4. 找到需要的程序

#### 方法 2：直接访问 GitHub
1. 访问 https://github.com/ai-program-hub
2. 浏览所有仓库
3. 查看 README 了解功能

---

### 如何使用程序？

#### 步骤 1：克隆仓库
```bash
git clone https://github.com/ai-program-hub/程序名.git
cd 程序名
```

#### 步骤 2：安装依赖（如有）
```bash
pip install -r requirements.txt
```

#### 步骤 3：运行程序
```bash
python main.py [参数]
```

#### 示例：使用文本转大写工具
```bash
# 克隆
git clone https://github.com/ai-program-hub/text-uppercase.git
cd text-uppercase

# 运行（无需安装依赖）
python main.py "hello world"
# 输出：HELLO WORLD
```

---

### 安全注意事项

⚠️ **使用 AI 生成的程序前：**

1. **审查代码** - 阅读源代码了解功能
2. **沙箱测试** - 在虚拟环境或测试机器运行
3. **检查依赖** - 确认没有恶意包
4. **备份数据** - 处理文件前先备份

**查看详细安全政策：** [SECURITY.md](https://github.com/ai-program-hub/ai-program-hub.github.io/blob/master/SECURITY.md)

---

## 📮 贡献者指南

### 如何提交程序？

#### 前置准备

1. **创建 GitHub 账号**
   - 访问 https://github.com
   - 注册免费账号

2. **准备程序文件**
   ```
   程序文件夹/
   ├── README.md              # 程序说明（标准模板）
   ├── main.py                # 主代码
   ├── ai-metadata.json       # AI 元数据（必须！）
   └── requirements.txt       # 依赖列表（如有）
   ```

3. **下载模板**
   - README 模板：https://ai-program-hub.github.io/submit.html
   - 元数据模板：同上

---

#### 提交流程

##### 方法 1：创建新仓库（推荐）

**步骤 1：本地初始化**
```bash
cd 你的程序文件夹
git init
git add .
git commit -m "Initial commit: 你的程序名称"
```

**步骤 2：在 GitHub 创建仓库**
1. 访问 https://github.com/new
2. 仓库名：英文（如 `my-awesome-tool`）
3. 选择组织：`ai-program-hub`（需要管理员邀请）
4. 点击 "Create repository"

**步骤 3：推送代码**
```bash
git remote add origin https://github.com/ai-program-hub/你的程序名.git
git branch -M main
git push -u origin main
```

**步骤 4：提交 Issue 通知**
1. 访问 https://github.com/ai-program-hub/ai-program-hub.github.io/issues/new/choose
2. 选择 "🌟 提交新程序"
3. 填写表单（仓库链接、描述等）
4. 提交

---

##### 方法 2：通过 Issue 提交

**步骤 1：准备代码**
- 将代码上传到你的 GitHub 账号

**步骤 2：创建提交 Issue**
1. 访问 https://github.com/ai-program-hub/ai-program-hub.github.io/issues/new/choose
2. 选择 "🌟 提交新程序"
3. 填写完整信息：
   - 程序名称
   - 描述
   - 分类
   - 你的仓库链接
   - AI 模型信息
   - 安全审查清单（必须全部勾选）
4. 提交

**步骤 3：等待审核**
- 管理员会审查代码
- 通过后创建到组织仓库

---

#### 程序模板

##### README.md 模板
```markdown
# [程序名称]

## 📋 简介
[一句话描述这个程序做什么]

## 🤖 AI 生成信息
- **生成模型**: [如：Kimi K2.5]
- **生成日期**: YYYY-MM-DD
- **提示词**: [可选]

## 🚀 快速使用
```bash
python main.py [参数]
```

## 📥 输入格式
[描述输入什么]

## 📤 输出格式
[描述输出什么]

## 💡 使用示例
[具体例子]

## 🏷️ 标签
#标签 1 #标签 2

## 📄 许可证
MIT
```

##### ai-metadata.json 模板
```json
{
  "name": "程序名称",
  "version": "1.0.0",
  "description": "一句话描述",
  "category": "tool",
  "language": "python",
  "ai_generated": {
    "model": "moonshotai/kimi-k2.5",
    "date": "2026-03-01"
  },
  "input": {
    "type": "text",
    "format": "...",
    "example": "..."
  },
  "output": {
    "type": "text",
    "format": "...",
    "example": "..."
  },
  "tags": ["tag1", "tag2"],
  "ai_readable": true
}
```

---

#### 提交前检查清单

- [ ] README.md 使用标准模板
- [ ] ai-metadata.json 填写完整
- [ ] 程序能正常运行
- [ ] 无硬编码密钥/密码
- [ ] 无未声明的网络请求
- [ ] 依赖版本明确
- [ ] 同意 MIT 许可证
- [ ] 确认程序是 AI 生成

**详细清单：** [CODE_REVIEW_CHECKLIST.md](https://github.com/ai-program-hub/ai-program-hub.github.io/blob/master/CODE_REVIEW_CHECKLIST.md)

---

## 👨‍💻 维护者指南

### 组织管理

#### 邀请成员
1. 访问 https://github.com/orgs/ai-program-hub/people
2. 点击 "Invite member"
3. 输入 GitHub 用户名
4. 设置权限（建议先给 Write 权限）

#### 审查程序提交
1. 查看 Issue 中的提交申请
2. 检查清单：
   - [ ] 代码能运行
   - [ ] 文档完整
   - [ ] 安全检查通过
   - [ ] 无敏感信息
3. 创建仓库并推送代码
4. 关闭 Issue 并留言

---

### GitHub Actions 管理

#### 查看运行状态
```bash
# 列出最近的运行
gh run list --repo ai-program-hub/仓库名

# 查看具体运行
gh run view RUN_ID --repo ai-program-hub/仓库名
```

#### 手动触发工作流
```bash
# 触发安全扫描
gh workflow run security-scan.yml --repo ai-program-hub/仓库名

# 触发代码质量检查
gh workflow run code-quality.yml --repo ai-program-hub/仓库名
```

#### 查看日志
```bash
# 查看失败日志
gh run view RUN_ID --log-failed --repo ai-program-hub/仓库名
```

---

### Issue 管理

#### 标签系统
| 标签 | 用途 |
|------|------|
| `security` | 安全问题 |
| `bug` | 程序 bug |
| `new-program` | 新程序提交 |
| `help wanted` | 需要帮助 |
| `question` | 问题咨询 |

#### 处理流程
1. **安全问题** - 优先处理，24 小时内响应
2. **程序 bug** - 7 天内响应
3. **新程序提交** - 审查后合并
4. **其他问题** - 14 天内响应

---

## 🤖 GitHub Actions 使用

### 自动触发的工作流

#### 🔒 安全扫描
**触发条件：** Push 或 Pull Request

**检查内容：**
- 硬编码密钥（TruffleHog）
- 敏感文件（.env, *.key, *.pem）
- Python 安全（Bandit）
- 依赖漏洞（pip-audit）
- 代码规范（flake8）

**查看运行：**
```
https://github.com/ai-program-hub/仓库名/actions
```

---

#### 📊 代码质量检查
**触发条件：** Push 或 Pull Request

**检查内容：**
- Python 语法
- 代码风格（pycodestyle）
- 文档完整性（README + ai-metadata.json）
- JSON 格式验证

**注意：** 只在有 Python 文件的仓库运行

---

### 工作流文件位置

```
.github/
└── workflows/
    ├── security-scan.yml      # 安全扫描
    └── code-quality.yml       # 代码质量
```

---

### 自定义工作流

#### 添加新的检查
在 `.github/workflows/` 创建新文件：

```yaml
name: 自定义检查

on:
  push:
    branches: [master, main]

jobs:
  custom-check:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    
    - name: 你的检查
      run: |
        echo "运行自定义检查..."
        # 你的命令
```

---

## 📝 Issue 模板使用

### 可用的模板

访问任意仓库的 Issues → New Issue → Choose a template

#### 🔐 安全问题报告
**用途：** 报告安全漏洞

**包含字段：**
- 严重程度（严重/高/中/低）
- 涉及程序
- 问题描述
- 复现步骤
- 相关代码
- 道德承诺确认

**响应时间：**
- 🔴 严重：24 小时
- 🟠 高：48 小时
- 🟡 中：7 天
- 🟢 低：14 天

---

#### 📦 程序问题反馈
**用途：** 报告程序 bug

**包含字段：**
- 程序名称
- 操作系统
- Python 版本
- 问题描述
- 复现步骤
- 错误日志

**必填：**
- 程序名称
- 操作系统
- Python 版本
- 问题描述
- 复现步骤

---

#### 🌟 提交新程序
**用途：** 向社区贡献程序

**包含字段：**
- 程序名称
- 描述
- 分类
- GitHub 仓库链接
- AI 模型信息
- 使用示例
- 安全审查清单（必须全部确认）
- 许可证确认（必须全部确认）

**流程：**
1. 填写完整信息
2. 提交 Issue
3. 等待管理员审查
4. 审查通过后合并

---

### 模板文件位置

```
.github/
└── ISSUE_TEMPLATE/
    ├── security-report.md       # 安全问题报告
    ├── bug-report.md            # 程序问题反馈
    ├── program-submission.md    # 新程序提交
    └── config.yml               # 模板配置
```

---

## ❓ 常见问题

### 使用者常见问题

#### Q: 程序运行报错怎么办？
**A:** 
1. 检查 Python 版本是否符合要求
2. 确认依赖已安装：`pip install -r requirements.txt`
3. 查看 README 的使用说明
4. 如果还有问题，提交 Issue 反馈

#### Q: 程序安全吗？
**A:**
- 所有程序经过安全扫描
- 但仍建议使用前审查代码
- 不要在重要数据上直接测试
- 发现安全问题立即报告

#### Q: 可以修改程序吗？
**A:**
- ✅ 可以！MIT 许可证允许自由修改
- 建议将改进提交回社区
- 修改后请标注"基于 AI Program Hub 修改"

---

### 贡献者常见问题

#### Q: 必须使用 Python 吗？
**A:**
- 目前主要是 Python 程序
- 也接受其他语言（JavaScript、Go 等）
- 需要提供清晰的运行说明

#### Q: 程序必须是 AI 生成的吗？
**A:**
- ✅ 是的，这是 AI Program Hub 的定位
- 需要在 ai-metadata.json 中说明 AI 模型
- 人类修改的程序也可以提交（需说明）

#### Q: 可以用商业许可证吗？
**A:**
- 建议使用 MIT 许可证（社区统一）
- 如有特殊需求，可在 README 中说明
- 但必须允许个人免费使用

#### Q: 提交后多久能审核？
**A:**
- 通常 1-7 天
- 复杂程序可能需要更久
- 可通过 Issue 询问进度

---

### 维护者常见问题

#### Q: 如何批量管理仓库？
**A:**
```bash
# 列出所有仓库
gh repo list ai-program-hub

# 批量操作（需要脚本）
for repo in $(gh repo list ai-program-hub --json name --jq '.[].name'); do
  echo "处理 $repo"
  # 你的命令
done
```

#### Q: 如何查看组织统计？
**A:**
- 访问 https://github.com/orgs/ai-program-hub/people
- 查看成员、仓库、贡献统计

#### Q: Actions 失败怎么处理？
**A:**
1. 查看失败日志：`gh run view RUN_ID --log-failed`
2. 根据错误信息修复
3. 重新推送触发运行
4. 如是误报，调整工作流配置

---

## 📚 相关资源

### 文档链接
- [安全政策](https://github.com/ai-program-hub/ai-program-hub.github.io/blob/master/SECURITY.md)
- [代码审查清单](https://github.com/ai-program-hub/ai-program-hub.github.io/blob/master/CODE_REVIEW_CHECKLIST.md)
- [推广文案](C:\Users\jw0921\.openclaw\workspace\推广文案合集.md)
- [测试报告](C:\Users\jw0921\.openclaw\workspace\测试报告.md)

### 外部资源
- [GitHub 文档](https://docs.github.com/)
- [GitHub Actions 文档](https://docs.github.com/en/actions)
- [Python 安全最佳实践](https://docs.python.org/3/library/security.html)
- [MIT 许可证](https://opensource.org/licenses/MIT)

---

## 📞 联系支持

### 获取帮助
1. **查看文档** - 本文档和链接资源
2. **搜索 Issue** - 可能已有解答
3. **创建 Issue** - 选择对应模板
4. **联系管理员** - 通过 GitHub @mention

### 报告问题
- 🐛 Bug 报告：使用"📦 程序问题反馈"模板
- 🔐 安全问题：使用"🔐 安全问题报告"模板
- 💡 功能建议：创建 Issue 标注"enhancement"

---

## 📝 更新日志

### v1.0.0 (2026-03-01)
- ✅ 初始版本
- ✅ 完整使用文档
- ✅ GitHub Actions 说明
- ✅ Issue 模板说明
- ✅ 常见问题解答

---

**感谢使用 AI Program Hub！** 🚀

**让 AI 生成的每一个创意程序都能被看见！** 🤖
