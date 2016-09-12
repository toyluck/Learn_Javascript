Title         : DOM2和DOM3

Author        : HYC
Affiliation   : 
Email         : you@bar.comtoylucklebo@outlook.com

[INCLUDE=book]
[INCLUDE=webtoc]
[INCLUDE=webanchors]

[TITLE]

~ Begin SidePanel
[TOC]
~ End SidePanel

~ Begin MainPanel
> DOM1只要定义HTML和XML文档的底层结构.
> DOM2和DOM3级则在此结构基础上引入了更多的交互能力和更高级的XML特性支持

# DOM变化
> 检查浏览器是否支持 高阶属性 -> `document.implementation.hasFeature()`
# 样式
> 任何支持style特性的HTML元素在JavaScript中都有一个对应的style属性.



`float`属性为JavaScript中的保留字,因此IE支持的是 `styleFloat`,其他浏览器则是`cssFloat`

对于使用 `-` 的属性,使用style 调用时 使用驼峰格式进行调用
```Html
  <div style="background-color: red"></div>
```

``` 
   div.backgroundColor="blue";
```


如果没有为元素设置style特性,那么style中可能会包含一些默认的值,但这些值并不能准确反映该元素的样式信息.

## 计算样式

**无论在哪个浏览器中,所有计算的样式都是只读的,不能修改计算后样式对象中的css属性**

嵌入式样式表和 自身style特性. 异留相同的属性自身style会覆盖嵌入式样式表中的属性.

## 操作样式表

### css规则
`document.styleSheets` 获得样式规则.
``` javascript
var sheet=document.styleSheets[0];
var rules=sheet.cssRules||sheet.rules;//取得规则列表
var rule=rules[0];

```
### 创建规则
> DOM规定,须要通过 `insertRule()`方法向现有样式表中添加新规则.接受两个参数 : 规则文本和表示在哪里插入规则的索引
`sheet.insertRule("body {background-color:silver}",0)`;
上面的例子 会改变元素的背景颜色,插入的规则将成为样式表中的第一条规则(0 的位置);

在ie8- 的浏览器版本中支持下面这个方法
`sheet.addRule("body","background-color: silver",0)`
且最多添加4095条样式规则,超出这个上限的调用将会导致错误;

### 删除规则

> 删除规则可能会影响css层叠的效果,谨慎使用

``` javascript

function deleteRule(sheet,index){
  if(sheet.deleteRule){
    //非ie
    sheet.deleteRule(index);
  }else if(sheet.removeRule){
    //ie支持
    sheet.removeRule(index);
  }
}
```

## 元素大小

主要浏览器都已支持这些属性

### 偏移量
> 元素在屏幕上占用的所有可见的空间.
* offsetHeight
* offsetWidth
* offsetLeft
* offsetTop

要想知道某个元素在页面上的偏移量,将这个元素的offsetLeft和offsetTop与其offsetParent的相同属性相加,如此循环直至根元素.

&bbox;对于简单的css布局的页面,这样可以得到非常精确的结果.对于使用表格和内嵌框架布局的页面,由于不同浏览器实现这些元素的方式不同,获得的值就不太精确了.

### 客户区大小
> 元素内部的空间大小

### 滚动大小

* scrollHeight : 没有滚动条的情况下,元素内容的总高度
* scrollWidth : 没有滚动条的情况下,元素内容的总宽度

用来确定元素内容的实际大小. 但对于不包含滚动条的页面而言,上面两条和clientWidth,clientHeight之间的关系并不十分清晰.


* scrollLeft : 被隐藏在内容区域左侧的像素数.设置这个属性可以改变元素的滚动位置
* scrollTop : 被隐藏在内容区域上方的像素数. 设置这个属性可以改变元素的滚动位置



### 确定元素大小
> 浏览器为每个元素都提供了一个 `getBoundingClientRect()`方法.这个方法返回一个矩形对象,内部属性给出了元素在页面中相对于视口的位置.

由于IE8- 认为文档的左上角坐标为(2,2),因此要对坐标进行调整:
``` javascript
function getBoundingClientRect(element){
  if(typeof arguments.callee.offset != "number"){
    var scrollTop=document.documentElement.scrollTop;
    var temp=document.createElement("div");
    div.style.cssType="position : absolute;left:0;top:0;";
    document.body.appendChild(temp);
    arguments.callee.offset=-temp.getBoundingClientRect-scrollTop;
    document.body.removeChild(temp);
    temp=null;
  }
  
  var rect=element.getBoundingClientRect();
  var offset=arguments.callee.offset;
  return {
    left:rect.left+offset,
    right:rect.right+offset,
    top:rect.top+offset,
    bottom:rect.bottom+offset
  };
}
```

# 遍历
> "Traversal2.0" 模块定义了 : NodeIterator 和 TreeWalker 用来辅助完成顺序遍历DOM结构的类型.
> **IE不支持DOM遍历**

检查浏览器 对DOM2 级遍历能力的支持情况

``` javascript
var supportTraversals=document.implementation.hasFeature("Traversal","2.0");
var supportNodeIterator=(typeof document.createNodeIterator =="function");
...
```
## createNodeIterator
接受4个参数:

* 查询的根节点
* 查询的类型
* 过滤方法
* 是否要扩展实体引用.(这个参数在HTML页面中没有用,因为其中的实体引用不能扩展)

## TreeWalker
> 是NodeIterator 的一个更高级的版本
> 接受的参数和NodeIterator一样

TreeWalker 能够在DOM结构中沿任何方向移动.
* firstChild
* lastChild 
...
这些是提供遍历DOM结构的方法

# 范围
> IE 有自己独特的朗读方式(靠!)

## DOM中的范围
Range2.0 测试是否具有功能

`document.createRange()`

### 简单选择
* selectNode()
: 选择整个节点,包括子节点
* selectNodeContents()
: 只选择子节点

参数都为一个DOM节点





~ End MainPanel