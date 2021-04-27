# 行内元素 inline

每个元素能够生成 0 个或者多个 box ，如果 display: none ，则生成 0 个 box。常见的 li 会生成两个 box。

## 常见的行内元素

a span button code input label select

## 行内盒子

inline 元素会创建一个 inline box ，用来放置 content 。
inline 元素的 margin padding

分别给 span 和 button 设置 padding 和 margin ，发现二者的表现不同。设置了 margin 的 button 并不会堆叠在一起，而 span 的 margin 似乎没有什么用。

还有一点特别奇怪，设置两个 button 用 br 分成两行，二者的外边距好像并未折叠。并且也不与上方的 h2 发生折叠。之后，我设置两个 block 的 button ，他们的表现符合外边距折叠的情况，也与上方的 h2 进行了折叠。

## 匿名行内盒子 anonymous inline box

## 匿名块盒子 anonymouse block box

https://www.w3.org/TR/CSS2/visuren.html

行内格式化上下文 / 块格式化上下文
这名字让人异常抓狂！！！

## 行内盒子被分解 inline broken

[inline_broken.html](inline_broken.html)

我们在 inline box 中强行插入一个 block box ，这将会导致 inline broken 。

目前只能捕获到具名 inline box 的 broken 效果。
