Title         : 第二章学习记录
Author        : Hyc
Logo          : True

[TITLE]

# 元素 script
* type 没有指定的话 text/javascript 为默认值
* 在<script>中嵌入Javascript代码时，不能出现 </script>字符串，只能添加"/"转义符号进行解决
* 引入外部javascript文件时，下载并解析该文件时，页面的处理会**暂时停止**
  : 在XHTML中 </script> 可以被省略，但是这是不符合HTML规范的，因此得不到ie浏览器的正确解析
  ：在引入外部脚本文件时，script 标签之间的代码会被**忽略**
  ：在不存在defer和async属性，浏览器会按照从上到下的先后顺序进行解析

## 标签的位置
将全部javascript引用放在<body>元素页面内容的后面。这样做可以让页面更快的显示。

## 延迟脚本-适用于外部脚本
* defer 属性 -值 ="defer"：告诉浏览器立即下载该脚步，但是要等到页面解析完毕后（</html>后）才运行
* 现实中，延迟脚本并不按规定的顺序进行执行，因此最好只包含一个延迟脚本

## 异步脚本-适用于外部脚本
* async 属性 -值 ="async" ：没有顺序，因此最好保证两个脚本之间互不依赖
* 不要在加载期间异步修改DOM

## 文档模式
在某些情况下会影响javascript的执行。

## <noscript 元素
在以下情况下显示：
* 浏览器不支持脚本
* 浏览器禁用脚本
``` html
<noscript>
  ...
</noscript>
```

