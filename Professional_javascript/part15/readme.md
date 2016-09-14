Title         : 使用Canvas绘图

Author        : Hyc
Affiliation   : 
Email         : toylucklebo@outlook.com


[INCLUDE=book]
[INCLUDE=webtoc]
[INCLUDE=webanchors]

[TITLE]

~ Begin SidePanel
[TOC]
~ End SidePanel

~ Begin MainPanel
# introduce
> IE9+ 等主流浏览器及 移动平台的 浏览器 都支持 `<canvas>`

# 基本用法

>要使用 `<canvas>` 必须设置 width 和 height 属性,指定可以绘图的区域大小. 
>在开始和结束标签中的内容是后备信息,如果浏览器不支持 `<canvas>`,就会显示后备信息.

但是不添加任何样式或者不绘制任何图像,在页面中是看不到该元素的.

绘图需要取得绘图上下文.

```JavaScript
  var drawing=document.getElementById("drawing");
  // 确定浏览器支持 <canvas>
  if(drawing.getContext){
    var context=drawing.getContext("2d");
    ...
    
  }
```

# 2d上下文


~ End MainPanel