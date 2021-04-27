# 行内格式化上下文 IFC inline formating context

https://github.com/chokcoco/iCSS/issues/56

又是这个奇怪的命名，我很好奇这玩意能活多久。

IFC: inline box 内部盒子的排列规则，以及内部盒子对 inline box 本身的影响。可能会影响 inline box 本身的大小，也可能影响 inline box 本身的位置。

同一个 IFC 下，不同 line box 的 line-height 可能会不同，这样看每一行包含的盒子高度。

## IFC 触发条件

- display: inline 的 box
- 只包含 inline-level box 的 containing box

inline-level box 包括 inline / inline-block

## IFC 规则

1. 内部盒子会在水平方向，一个接一个地放置
2. 内部盒子水平方向上的 margin / padding / border 所占用的空间会被考虑在内
3. 垂直方向上，内部盒子可能会以不同形式来对齐 (vertical-align) ，可使用顶部对齐，底部对齐，基线对齐
4. 每一行都有一个 line box ，将这一行的内部盒子全部包含进去。line box 的宽度由包含块和存在的浮动来决定
5. float 元素会使得 line box 宽度缩短
6. 同一个 IFC 下面，line box 的高度可能不同，这要看 line box 包含的盒子的高度
7. 当 line box 中包含的内部盒子的总宽度较小时，其水平渲染规则由 text-align 来决定
8. 当一个内部盒子的宽度大于 line box 的宽度时，这个内部盒子会 broken 成多个 boxes，这些 boxes 被分布在多个 line box 中。如果一个内部盒子宽度很大，但是又不能被分割，那么这个内部盒子就会溢出 line box。

white-space 换行 TODO

## IFC 使用场景

- 水平居中

```html
<div style="text-align: center;">
  <div style="display: inline-block; margin: 10em; background-color: red; height: 10em;">
  </div>
</div>
```
