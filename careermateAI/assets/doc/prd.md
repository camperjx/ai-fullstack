是项目开发正式启动的第一节技术课。你将从零搭建 CareerMate AI 的 Landing Page 基础网页结构，完成一个可在浏览器打开、具备真实页面骨架的静态页面，为后续 CSS 布局、JavaScript 交互和 React 重构打下基础

## 本节课目标
理解 HTML 在真实产品中的作用：结构层（Structure Layer）。

能独立写出 CareerMate Landing Page 的 页面骨架与主要区块结构。

建立“先搭结构 → 再做样式 → 再加交互”的工程化开发顺序。

## 核心内容
### HTML 基础与工程化写法

HTML 文档结构：doctype / head / body

常见标签与语义化（Semantic HTML）：header / nav / section / article / footer

页面结构分层思维：每一块页面 = 一个可维护的 section

### CareerMate Landing Page 信息架构

解析 Landing Page 需要的核心模块（按真实产品信息流）：

Hero Section（产品一句话定位 + CTA）

Features Section（核心功能亮点）

How It Works / Workflow（用户使用流程）

Testimonials / Social Proof（可先留占位）

Footer（版权、链接、联系方式）

用 HTML 先把这些模块 按顺序搭成页面框架

### 从空白到可运行页面

新建项目目录与文件结构：

index.html

assets/（图片占位）

styles/（先留空，CSS 下节课做）

浏览器打开并验证页面结构正确

### 代码规范与可读性

缩进、注释、层级命名

每个 section 先写结构和占位文案（后面再逐步替换）

# Task 3
## Summary: 构建网站中常用的可复用 HTML 组件，统一类命名风格。

## Description:

编写以下组件的 HTML 标记（仅结构和 class 命名，不涉及样式）：

按钮组件：Primary / Secondary 类型

卡片组件（如 Feature Card、Testimonial Card）

徽章 Badge / Pill

头像 Avatar + 用户下拉菜单容器

所有组件需使用统一、清晰、具语义的命名，例如：

.btn, .btn-primary, .card, .section-title, .badge, .avatar-container

## Acceptance Criteria:

所有组件都有标准 HTML 结构和一致的 class 命名。

页面可插入组件实例进行测试，结构不冲突，命名不混乱。

使用占位文字/图片作为临时内容，无样式也能清楚区分结构。