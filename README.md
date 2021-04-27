# Study CSS

## 样式

- 样式
  - border
  - overflow
  - 样式简写
  - 样式简写顺序
- 选择器
  - 后代选择器
  - 子选择器
  - 兄弟选择器 猫头鹰选择器 相邻同辈选择器 +
  - 一般同辈选择器 ~
  - 通用选择符 *
  - 属性选择符
  - 伪元素
    - ::before
    - ::after
    - ::first-letter
    - ::first-line
  - 伪类选择器
    - :root
    - :empty
    - :link
    - :visited
    - :focus
    - :hover
    - :active
  - 样式冲突
    - 层叠
    - 优先级
    - 继承
  - 猫头鹰选择器给所有兄弟节点添加 margin-top
  - 全局选择器
- 应用样式
  - style
  - link
  - @import
  - link vs @import
  - 加载 js

## 布局

- 盒模型
  - 宽度
  - 高度
  - margin 默认值 透明
  - padding 默认值 显示背景颜色
  - 父子元素之间的距离
  - 兄弟元素之间的距离
- 相对单位
  - px
  - em
  - rem
  - %
- line box
  - line box 是 block box 吗 ？？？
  - p vs span
  - line box 用来包裹 inline-level item
  - inline item 比 line box 更宽
    - 换行 inline item broken
    - inline item 无法换行导致溢出
      - 超长单词
      - inline-block
      - div display:inline width: biggggggggggggggg
- block box
  - 宽度 / 高度 / 位置
  - float 元素对 block box 的影响
  - 块级格式化上下文 BFC
  - 内部包含的元素
    - 仅包含 inline item
    - 仅包含 block item
    - 包含 inline / block item
  - 内部元素边距溢出
  - 内部元素溢出
  - 内部 block 溢出对其本身位置的影响
  - 内部 inline 溢出对其本身位置的影响
- 浮动
  - clearfix
  - 利用浮动实现网格布局
  - running_club
    - flot
    - float to grid
- flexbox
- 网格布局
- 定位
  - fixed
    - 模态框
  - absolute
    - 给模态框右上角添加关闭按钮
  - relative
    - 下拉菜单

## 动画

## 响应式

- 响应式设计

inline block inline-block
inline：width height 无效，line-height 有效
block：块级元素，独占一行，能够设置 width 和 height
inline-block：能够水平排列，但是其本身仍然是 block ，可以设置 width 和 height 。如果该行宽度不够，则会出现在下一行。常用于将垂直排列的 block 水平排列。

inline box
block box
line box
匿名块盒

inline 元素 margin padding 等问题

block
  - inline
  - inline-block
inline
  - inline
  - inline-block
- inline-block (BFC 包含所有)
  - inline
  - inline-block
