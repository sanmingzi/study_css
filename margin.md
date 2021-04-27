# 外边距 (margin)

https://zhuanlan.zhihu.com/p/135408043

## 外边距重合

两个 div ，一个设置 margin 为 20px ，另一个设置 margin 为 10px 。他们之间垂直方向的距离以较大的 margin 为主，此时他们之间的 margin 应该为 20px 。

只有垂直方向才会产生这种情况，水平方向则不会。

## 外边距溢出

父盒子未设置边框，并且未设置 padding ，如果父元素与子元素的上边沿或者是下边沿重合时，此时给子盒子设置 10px 的 margin ，子盒子不会相对于父盒子向下移动 10 px ，而是父盒子向下移动 10px 。感觉就像是子盒子的 10px 的 margin 溢出给了父盒子一样。

五种解决方法：

1. 给父盒子添加 border ，缺点会增加父盒子的尺寸
2. 给父盒子添加 padding ，缺点会增加父盒子的尺寸
3. 设置父盒子 overflow 不为 visibly ，缺点是无法实现溢出可见
4. 在父盒子上下都添加 table 元素，缺点增加了两个无效的节点
5. 在伪元素 ::before / ::after 上添加两个 table 元素，最完美解决方案

[margin](box/margin.html)
