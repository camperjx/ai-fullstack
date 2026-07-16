# CareerMate AI — PRD（Product Requirements Document）

## 1. Background & Vision（背景与愿景）

### 1.1 Background

许多学生、毕业生和转行求职者在求职过程中面临以下问题：

- 不知道如何优化 Resume / Cover Letter
- 不清楚岗位真正需要哪些技能
- 缺少职业路径规划
- 面试准备效率低
- 求职信息分散（LinkedIn、Seek、Indeed、YouTube、课程平台）

目前用户通常需要：

- 手动修改简历
- 在多个网站搜索岗位
- 使用 ChatGPT 零散提问
- 自己整理职业学习路径

整个过程效率低、缺少结构化指导。

---

### 1.2 Vision

CareerMate AI 希望成为：

> 一个 AI 驱动的 Career Operating System（职业成长操作系统）。
> 

它不仅帮助用户“找工作”，还帮助用户：

- 提升求职竞争力
- 规划技能成长
- 获得个性化职业建议
- 用 AI 持续优化职业发展路径

长期目标：

- AI Resume Coach
- AI Career Roadmap
- AI Interview Assistant
- AI Job Matching Engine
- AI Learning Recommendation System

---

# 2. Target Users & Pain Points（目标用户与痛点）

---

## Persona 1 — University Students（大学生）

### 用户特征

- 缺少正式工作经验
- 第一次找 Internship / Graduate Role
- 不熟悉 ATS Resume

### 核心痛点

1. 不知道 Resume 怎么写
2. 不知道岗位需要什么技能
3. 面试准备缺少方向

### 当前替代方案

- Google 模板
- ChatGPT 手动提问
- YouTube 求职视频
- 学校 Career Hub

---

## Persona 2 — Career Switchers（转行人士）

### 用户特征

- 已有工作经验
- 想进入 Data / Tech / AI 行业

### 核心痛点

1. 不知道 Skill Gap
2. 不知道如何展示 transferable skills
3. 不知道应该学习哪些内容

### 当前替代方案

- LinkedIn Learning
- Coursera
- Reddit / Discord
- 自己整理学习路线

---

# 3. Value Proposition（价值主张）

> CareerMate AI 帮助用户通过 AI 快速优化求职材料、发现技能差距，并获得个性化职业成长建议。
> 

核心价值：

- 降低求职复杂度
- 提高 Resume ATS 通过率
- 提升职业规划效率
- 提供 AI 个性化指导

---

# 4. Scope & MVP（范围 & MVP）

---

## 4.1 MVP Goal

第一阶段目标：

> 构建 CareerMate AI 的 Landing Page，用于验证产品定位与用户兴趣。
> 

---

## 4.2 MVP Includes（In Scope）

当前阶段仅包含：

### Landing Page

- Navigation Bar
- Hero Section
- Product Introduction
- CTA（Call-to-Action）
- Features Overview
- FAQ Section
- Footer

---

## 4.3 MVP Excludes（Out of Scope）

当前阶段不开发：

- 用户登录系统
- Resume 上传
- AI 分析功能
- Payment System
- Dashboard
- Credits System
- Backend Database
- AI API Integration

---

# 5. Key Features（关键功能模块）

---

## 5.1 Landing Page

用于介绍产品与吸引用户注册。

---

## 5.2 Resume Builder（未来阶段）

AI Resume Review + ATS Optimization。

---

## 5.3 Job Insight

分析 Job Description 与 Skill Gap。

---

## 5.4 Learning Hub

推荐学习路径与技能成长资源。

---

## 5.5 Profile System

保存用户 Career Profile。

---

## 5.6 Credits / Subscription

未来 AI 使用额度系统。

---

# 6. Functional Requirements（功能需求）

## Landing Page — MVP Requirements

---

### FR-01 Navigation Bar

系统必须显示顶部导航栏。

包括：

- Logo
- Home
- Features
- Pricing（Placeholder）
- Login（Placeholder）
- CTA Button

---

### FR-02 Responsive Layout

页面必须支持：

- Desktop
- Tablet
- Mobile

导航栏在 Mobile 自动切换为 Hamburger Menu。

---

### FR-03 Hero Section

Hero Section 必须包含：

- Headline
- Subheadline
- CTA Button
- Product Mockup / Illustration

---

### FR-04 CTA Interaction

点击 CTA 后：

- 跳转到 Waitlist / Signup Placeholder
- 或弹出 Email Capture Form

---

### FR-05 Features Section

系统必须展示至少 3 个核心功能：

- AI Resume Review
- Career Roadmap
- Interview Assistant

---

### FR-06 Smooth Scrolling

点击 Navigation Menu 后：

- 页面自动滚动到对应 Section。

---

### FR-07 FAQ Section

系统必须展示至少 4 个 FAQ 问题。

---

### FR-08 Footer

Footer 必须包含：

- Product Name
- Social Links
- Privacy Policy
- Contact Email

---

### FR-09 Basic Analytics

系统必须支持：

- Page View Tracking
- CTA Click Tracking

（例如 Google Analytics / PostHog）

---

### FR-10 Loading Experience

页面首次加载时间目标：

- 小于 3 秒

---

# 7. Non-functional Requirements（非功能需求）

---

## NFR-01 Performance

Landing Page 在正常网络环境下：

- 首屏加载 ≤ 3 秒

---

## NFR-02 Responsiveness

页面必须兼容：

- Chrome
- Safari
- Edge
- Mobile Browser

---

## NFR-03 Accessibility

页面需满足基础可访问性：

- Semantic HTML
- Alt Text
- Keyboard Navigation

---

## NFR-04 SEO

页面需支持：

- Meta Title
- Meta Description
- Open Graph Tags

---

## NFR-05 Security

Email Capture Form 必须：

- 基础输入校验
- 防止明显恶意输入

---

# 8. Milestones（里程碑）

---

# Sprint 1 — Landing MVP

### Deliverables

- Navigation Bar
- Hero Section
- Responsive Layout
- CTA Button

### Goal

完成可访问的基础 Landing Page。

---

# Sprint 2 — Marketing Sections

### Deliverables

- Features Section
- FAQ
- Footer
- Smooth Scrolling

### Goal

增强产品信息展示能力。

---

# Sprint 3 — Polish & Tracking

### Deliverables

- Analytics Integration
- SEO Optimization
- Mobile Optimization
- UI Polish

### Goal

准备公开测试与用户验证。

---

# 9. Suggested Tech Stack（建议技术栈）

| Layer | Technology |
| --- | --- |
| Frontend | Next.js |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Hosting | Vercel |
| Analytics | PostHog / GA4 |
| Design | Figma |

---

# 10. Future Roadmap（未来路线）

---

## Phase 2

- Resume Upload
- AI Resume Review
- ATS Scoring

---

## Phase 3

- AI Interview Simulation
- Career Roadmap Generator
- Job Recommendation

---

## Phase 4

- Subscription System
- Team Collaboration
- AI Agent Workflow

---

# 11. Success Metrics（成功指标）

---

## Product Metrics

- Landing Page Conversion Rate
- CTA Click Rate
- Waitlist Signups
- Bounce Rate

---

## User Metrics

- Returning Users
- Session Duration
- Feature Interest Heatmap

---

# 12. AI Prompt Template（AI Prompt 模板）

```
You are an expert AI career coach and resume reviewer.

Your task is to help users improve their career readiness.

Analyze the user's resume and provide:

1. ATS compatibility score
2. Missing keywords
3. Resume improvement suggestions
4. Career growth recommendations

User Resume:
{{resume_text}}

Job Description:
{{job_description}}

Output Format:
- ATS Score
- Strengths
- Weaknesses
- Missing Skills
- Suggestions

Tone:
Professional, supportive, concise.
```