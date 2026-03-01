name: 📦 程序问题反馈
description: 报告程序运行错误或功能问题
title: "[Bug]: "
labels: ["bug", "program-issue"]
body:
  - type: markdown
    attributes:
      value: |
        ## 📦 程序问题反馈
        
        请详细描述你遇到的问题，帮助我们改进！

  - type: input
    id: program
    attributes:
      label: 程序名称
      description: 哪个程序有问题？
      placeholder: "例如：文本转大写工具"
    validations:
      required: true

  - type: dropdown
    id: os
    attributes:
      label: 操作系统
      description: 你使用的是什么操作系统？
      options:
        - Windows
        - macOS
        - Linux
        - 其他
    validations:
      required: true

  - type: input
    id: python-version
    attributes:
      label: Python 版本
      description: 运行 `python --version` 查看
      placeholder: "例如：Python 3.11.0"
    validations:
      required: true

  - type: textarea
    id: what-happened
    attributes:
      label: 问题描述
      description: 发生了什么？预期应该怎样？
      placeholder: |
        实际行为：...
        预期行为：...
    validations:
      required: true

  - type: textarea
    id: reproduction
    attributes:
      label: 复现步骤
      description: 如何复现这个问题？
      placeholder: |
        1. 运行命令：python main.py ...
        2. 输入：...
        3. 错误：...
    validations:
      required: true

  - type: textarea
    id: logs
    attributes:
      label: 错误日志
      description: 完整的错误信息
      render: shell
      placeholder: |
        粘贴完整的错误输出...

  - type: input
    id: input-data
    attributes:
      label: 输入数据（如果适用）
      description: 你输入了什么数据导致问题？
      placeholder: "例如：@test.txt"
    validations:
      required: false

  - type: checkboxes
    id: checks
    attributes:
      label: 自查清单
      description: 提交前请确认
      options:
        - label: 我已经阅读了 README
          required: true
        - label: 我已经搜索过现有 Issue
          required: true
        - label: 我确认这是程序 bug 而非使用问题
          required: true

  - type: textarea
    id: additional
    attributes:
      label: 其他信息
      description: 还有什么要补充的吗？
    validations:
      required: false
