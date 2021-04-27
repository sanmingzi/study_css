# 块格式化上下文 BFC Block Formating Context

这名字取的是真的好听！！！

## BFC 是什么

个人理解: BFC 是 block 的一种属性。

## 启用 BFC 能为 block 带来什么

1. block 能够包含其内部的 float block
2. block 内部的 float block 不会影响 block 外部的布局
3. block 内部元素的 margin 不会溢出，而是会全部包含在 block 里面
4. 启用了 BFC 的 block 不会与其外面的 float box 重叠，这点可用于布局
5. BFC 的 margin 不会与其周围元素的 margin 重合，也就是说 BFC 与其他元素的距离为两者 margin 之和，而不是取最大值

总结一句话，开启 BFC 的 block 能够将其子元素统统包含在其内部，包括 float 的子元素，包括子元素的 margin 。

## 如何启用 BFC

这里只介绍最简单的一种方法。

```css
display: flow-root
```
