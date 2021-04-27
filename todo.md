box
content-box
padding-box
border-box

# 层叠

样式冲突
- !important 样式来源
- 内联样式
- 选择器优先级
  - id 数量
  - class 数量
  - 标签数量
  - 伪类选择器 / 属性选择器
- 源码中较晚出现的声明
  - a LoVe / HAte
- 为什么不建议使用 id 选择器
- 为什么不建议使用 !important

# 继承

- inherit
- initial
- 继承与层叠，层叠会覆盖继承来的属性

# 简写属性

- 顺序 上 右 下 左 TRouBLe
- 指定两个方向的属性，x - y

# 相对单位

- em
  - em * font-size
  - em 定义 font-size
  - 其他属性 / font-size 同时用 em 来定义
  - 嵌套元素 字体缩小
- rem
  - root em

px: 边框
rem: 字体
em: 其他属性 (百分比)

- @media
- vw
- calc()

- line-height (不应该使用单位)

## box

- 等高列
- css 表格布局

外边距

- 文字外边距折叠

注意：只有上下外边距会折叠，左右外边距是不会折叠的

## float 浮动布局

使用 float 实现网格布局

- BFC 包含浮动元素 防止外边距折叠 防止文档流围绕浮动元素排列
- 双容器模式让页面居中
- 使用清除浮动来包含浮动元素 ::before ::after

## flexbox 布局

- flex 指定元素大小

flex 比较适合一维布局

## grid 网格布局

- 网格线编号
- 网格线命名
- 命名网格区域
- 隐式网格

## 定位

- 固定定位 fixed top right bottom left
  - 模态框
  - 相对浏览器窗口进行定位
- 绝对定位 absolute
  - 相对最近的祖先来定位元素
  - 定位伪元素
- 相对定位 relative
  - 下拉菜单
  对元素使用相对定位，元素的位置并不会移动。只有我们在相对定位后再继续使用 left 等，才会移动元素
- 粘性定位 sticky

## 响应式设计

根据终端尺寸自动调整 CSS 样式。

- 优先实现移动端设计
- @media
- 响应式图片

## 模块化 CSS

- .message
- .message--error .message--success 修饰符
BEM CSS 命名规范

- 工具类
  - .text-center
  - .hidden
  - .clearfix::before
  - .clearfix::after
  - !important

CSS in JS
