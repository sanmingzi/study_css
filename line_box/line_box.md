# 行盒子 line box

## Reference

- [CSS 原理 - Line box](https://yachen168.github.io/article/LineBox.html)

## 什么是 line box

- line box 是自动生成的匿名 block box ，用来将一行包裹住
- 有 inline-level 元素的地方就有 line box
  1. 文本
  2. inline-level item
  3. block box 中只能包含 block box / inline box 中的一种。如果两者都有，那么会将 inline box 用一个匿名 line box 包裹住，以保证其中只有 block box

## line box 宽度

line box 的宽度取决于其包含块的宽度。line box 的包含块是其第 1 个块级祖先。

float 元素会挤压 line box ，导致 line box 的宽度变窄。这也正是文字会环绕浮动元素的原因。

## line box 高度

line box 的高度受其内部所包含元素的影响。

inline box 中的 content area 会影响 line box 的高度。inline box 垂直方向上的 margin / padding 并不会影响 line box 的高度，inline box 水平方向上的 margin / padding 推开其左右的元素。

Atomic inline-level box 的整个 box model 会影响 line box 的高度。这里将一下 atomic inline-level box 。

[w3.org inline-box](https://www.w3.org/TR/CSS21/visuren.html#inline-boxes)

Inline-level boxes that are not inline boxes (such as replaced inline-level elements, inline-block elements, and inline-table elements) are called atomic inline-level boxes because they participate in their inline formatting context as a single opaque box.

## inline vs inline-block

在 line box 中，inline 在垂直方向上的 margin / border / padding 不会影响 line box 的高度，简单理解就是不生效。而 inline-block 在垂直方向上的 margin / border / padding 会影响到 line box 的高度。

## line box 布局规则

- line box 内部盒子满足 IFC 规则
  - 如果几个 inline box 在水平方向无法放入一个 line box 内，他们可以分配在两个或多个垂直堆叠的 line box 中
- line box 是 block box ，所以会在垂直方向堆叠
- line box 的宽度由其包含块以及包含块中的浮动元素决定，高度的确定由行高度计算规则决定

- line box 内部的盒子不会影响 line box 祖先元素的布局，举个例子，line box 中有 div display:inline ，即便我们给这个 div 设置了上下 margin / padding ，这些值也不会影响 line box 祖先元素的位置
