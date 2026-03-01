name: 🔐 安全问题报告
description: 报告程序中的安全漏洞或隐患
title: "[Security]: "
labels: ["security", "bug"]
body:
  - type: markdown
    attributes:
      value: |
        ## 🔐 安全问题报告
        
        感谢你对社区安全的贡献！请详细描述发现的安全问题。
        
        **⚠️ 重要：** 如果是严重安全漏洞，请先私信联系管理员，不要公开披露。

  - type: dropdown
    id: severity
    attributes:
      label: 严重程度
      description: 该安全问题的严重程度
      options:
        - 🔴 严重（数据泄露、远程代码执行）
        - 🟠 高（权限提升、本地代码执行）
        - 🟡 中（信息泄露、DOS）
        - 🟢 低（最佳实践建议）
    validations:
      required: true

  - type: input
    id: program
    attributes:
      label: 涉及的程序
      description: 哪个程序存在安全问题？（提供 GitHub 仓库链接）
      placeholder: "https://github.com/ai-program-hub/..."
    validations:
      required: true

  - type: textarea
    id: description
    attributes:
      label: 问题描述
      description: 详细描述安全问题
      placeholder: |
        请描述：
        1. 这是什么类型的安全问题？
        2. 可能造成的影响
        3. 受影响的代码位置
    validations:
      required: true

  - type: textarea
    id: reproduction
    attributes:
      label: 复现步骤
      description: 如何复现这个安全问题？
      placeholder: |
        1. 运行程序...
        2. 输入...
        3. 观察到...
    validations:
      required: true

  - type: textarea
    id: code-sample
    attributes:
      label: 相关代码
      description: 存在问题的代码片段
      render: python
      placeholder: |
        # 请粘贴相关代码
        def vulnerable_function():
            ...

  - type: textarea
    id: impact
    attributes:
      label: 潜在影响
      description: 这个问题可能被如何利用？
      placeholder: |
        攻击者可以：
        - 窃取敏感数据
        - 执行恶意代码
        - ...

  - type: textarea
    id: solution
    attributes:
      label: 建议修复方案
      description: 你有修复建议吗？（可选）
      placeholder: |
        建议修改：
        ```python
        # 修复后的代码
        ```

  - type: dropdown
    id: discovered-how
    attributes:
      label: 如何发现的
      description: 你是如何发现这个问题的？
      options:
        - 代码审查
        - 实际使用中
        - 自动化扫描工具
        - 其他人报告
        - 其他
    validations:
      required: true

  - type: checkboxes
    id: ethics
    attributes:
      label: 道德承诺
      description: 请确认你遵守负责任的披露原则
      options:
        - label: 我不会利用这个漏洞
          required: true
        - label: 我会在修复前保密
          required: true
        - label: 我报告的目的是保护社区
          required: true

  - type: input
    id: contact
    attributes:
      label: 联系方式（可选）
      description: 如果需要进一步沟通，请留下联系方式
      placeholder: "email@example.com"
    validations:
      required: false

  - type: markdown
    attributes:
      value: |
        ---
        
        **感谢你的报告！** 我们会在下述时间内响应：
        - 🔴 严重：24 小时内
        - 🟠 高：48 小时内
        - 🟡 中：7 天内
        - 🟢 低：14 天内
