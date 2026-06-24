# style.scss 分析报告

## 变量定义

| 变量 | 值 | 使用情况 |
|------|----|----------|
| `$spacing-unit` | `40px` | 用于 `grid-gap` 和 `padding` |
| `$small-spacing` | `20px` | **未使用** |
| `$extra-small-spacing` | `10px` | **未使用** |

---

## 布局结构

### 全局 Reset
```scss
* { padding: 0; margin: 0; box-sizing: border-box; }
```
- 清除所有元素的内外边距，统一盒模型为 `border-box`

### `body`
```scss
background-color: #303032;
```
- 深灰色背景（接近黑色），用于衬托卡片内容

---

## Grid 布局（双层嵌套）

### 第一层：`main`（14 列布局）
```scss
grid-template-columns: 1fr repeat(12, minmax(auto, 60px)) 1fr;
```
- 共 **14 列**：两侧各 1 个 `1fr` 弹性留白，中间 12 个内容列（每列最大 60px）
- 作用：在宽屏下自动居中内容，左右留有响应式边距

### 第二层：`.cards`（12 列容器）
```scss
grid-column: 2 / span 12;    /* 占据 main 第 2~13 列 */
grid-template-columns: repeat(12, minmax(auto, 60px));
```
- 嵌套在 `main` 内，自身也是 12 列 Grid，与外层内容列对齐

### 卡片：`.card`
```scss
grid-column-end: span 4;     /* 每张卡片占 4 列 → 一行 3 张 */
```
- 使用 BEM 命名规范
- `cursor: pointer` + `transition: all 0.3s ease` — 整体过渡动画
- `:hover { transform: translateY(-8px); }` — 悬停时上浮 8px

### 卡片图片：`.card__image-container`
```scss
height: 200px;
overflow: hidden;
img { object-fit: cover; }
```
- 固定高度 200px，`overflow: hidden` 裁剪超出部分
- `object-fit: cover` 保证图片不变形地填满容器

---

## 响应式断点

| 断点 | `.card` 列宽 | 每行卡片数 |
|------|-------------|-----------|
| `> 1000px`（默认） | `span 4` | 3 张 |
| `≤ 1000px`（第一条） | `span 6` | 2 张 |
| `≤ 1000px`（第二条） | `span 12` | 1 张 |

---

## 发现的问题

### 1. 重复断点（逻辑错误）
两条 `@media` 规则使用了**相同的断点值** `max-width: 1000px`，第二条会覆盖第一条，导致 `span 6`（两列）的布局永远不会生效：
```scss
/* 这条被覆盖，死代码 */
@media screen and(max-width: 1000px) { .card { grid-column-end: span 6; } }
/* 实际生效的 */
@media screen and(max-width: 1000px) { .card { grid-column-end: span 12; } }
```
**修复建议：** 第二条应改为更小的断点，如 `max-width: 600px`

### 2. 无效媒体查询语法
`and(max-width: ...)` 缺少空格，正确写法为 `and (max-width: ...)`：
```scss
/* 错误 */
@media screen and(max-width: 1000px)
/* 正确 */
@media screen and (max-width: 1000px)
```
Live Sass Compiler 可能容错处理了此问题，但严格解析会报错。

### 3. 未使用的变量
`$small-spacing` 和 `$extra-small-spacing` 定义后从未引用，建议删除或补充使用。

---

## 整体架构图

```
main (14-col grid)
├── 1fr (左留白)
├── .cards (span 12 cols, 自身也是 12-col grid)
│   ├── .card (span 4) → .card__image-container → img
│   ├── .card (span 4) → .card__image-container → img
│   └── .card (span 4) → .card__image-container → img
└── 1fr (右留白)
```
