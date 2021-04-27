# 包含块 containing block

fixed: 视口

static / relative: 最近的块级祖先的内容边界

absolute: 最近的 fixed / relative / absolute 祖先
1. 如果祖先是行内元素，包含块是由该元素生成的第一个和最后一个行内盒的 内边距盒（padding box）形成。
2. 祖先是块元素，祖先的内边距边界

float: 最近的块级祖先 内容区域
