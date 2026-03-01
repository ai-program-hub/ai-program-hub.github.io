name: 🌟 提交新程序
description: 向社区提交你创建的 AI 程序
title: "[New Program]: "
labels: ["new-program", "submission"]
body:
  - type: markdown
    attributes:
      value: |
        ## 🌟 提交新程序
        
        欢迎向 AI Program Hub 贡献你的 AI 创作！
        
        **提交前请确保：**
        - ✅ 程序由 AI 生成
        - ✅ 已阅读 [SECURITY.md](https://github.com/ai-program-hub/ai-program-hub.github.io/blob/master/SECURITY.md)
        - ✅ 已完成 [代码审查清单](https://github.com/ai-program-hub/ai-program-hub.github.io/blob/master/CODE_REVIEW_CHECKLIST.md)
        - ✅ 使用标准模板（README + ai-metadata.json）

  - type: input
    id: program-name
    attributes:
      label: 程序名称
      description: 给你的程序起个名字
      placeholder: "例如：智能文本摘要工具"
    validations:
      required: true

  - type: textarea
    id: description
    attributes:
      label: 程序描述
      description: 一句话描述程序功能
      placeholder: "这个程序可以..."
    validations:
      required: true

  - type: dropdown
    id: category
    attributes:
      label: 程序分类
      description: 选择最合适的分类
      options:
        - 🔧 工具
        - 🎮 游戏
        - 🤖 自动化
        - 📊 数据处理
        - 其他
    validations:
      required: true

  - type: input
    id: repo-url
    attributes:
      label: GitHub 仓库链接
      description: 程序的 GitHub 仓库地址
      placeholder: "https://github.com/ai-program-hub/..."
    validations:
      required: true

  - type: dropdown
    id: ai-model
    attributes:
      label: AI 模型
      description: 使用哪个 AI 模型生成的？
      options:
        - Kimi K2.5 (moonshotai/kimi-k2.5)
        - Qwen3.5 (bailian/qwen3.5-plus)
        - GPT-4
        - Claude
        - 其他
    validations:
      required: true

  - type: input
    id: ai-date
    attributes:
      label: 生成日期
      description: AI 生成程序的日期
      placeholder: "YYYY-MM-DD"
    validations:
      required: true

  - type: textarea
    id: prompt
    attributes:
      label: 使用的提示词（可选）
      description: 分享你用的 AI 提示词，帮助其他人学习
      placeholder: "你用了什么提示词让 AI 生成这个程序？"
    validations:
      required: false

  - type: textarea
    id: usage
    attributes:
      label: 使用示例
      description: 如何使用这个程序？
      placeholder: |
        ```bash
        python main.py [参数]
        ```
    validations:
      required: true

  - type: dropdown
    id: difficulty
    attributes:
      label: 难度等级
      description: 程序的使用难度
      options:
        - ⭐ 入门（无需编程知识）
        - ⭐⭐ 中级（需要基础编程知识）
        - ⭐⭐⭐ 高级（需要专业知识）
    validations:
      required: true

  - type: textarea
    id: dependencies
    attributes:
      label: 依赖列表
      description: 需要安装哪些依赖？
      placeholder: |
        ```
        requests==2.31.0
        numpy==1.24.3
        ```
        如果只使用标准库，写"无"
    validations:
      required: true

  - type: checkboxes
    id: checklist
    attributes:
      label: 安全审查清单
      description: 请确认以下安全事项
      options:
        - label: 无硬编码密钥/密码/Token
          required: true
        - label: 无未声明的网络请求
          required: true
        - label: 无系统命令执行（或已安全处理）
          required: true
        - label: 文件操作有权限检查
          required: true
        - label: 输入验证完整
          required: true
        - label: 依赖版本明确指定
          required: true
    validations:
      required: true

  - type: checkboxes
    id: license
    attributes:
      label: 许可证确认
      description: 关于许可证的确认
      options:
        - label: 我确认程序是原创或 AI 生成
          required: true
        - label: 我同意使用 MIT 许可证
          required: true
        - label: 程序不包含有版权问题的代码
          required: true
    validations:
      required: true

  - type: textarea
    id: additional-info
    attributes:
      label: 其他信息
      description: 还有什么要补充的吗？
    validations:
      required: false

  - type: markdown
    attributes:
      value: |
        ---
        
        **提交后流程：**
        1. ⏳ 自动安全检查（GitHub Actions）
        2. 👀 人工代码审查
        3. ✅ 合并到组织
        4. 🎉 出现在网站程序库
        
        感谢你的贡献！🙏
