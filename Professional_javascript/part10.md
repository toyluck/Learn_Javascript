Title         : 第十章 DOM

Author        : Hyc
Affiliation   :  
Email         : toylucklebo@outlook.com

Bibliography  : example.bib

[INCLUDE=book]
[INCLUDE=webtoc]
[INCLUDE=webanchors]

[TITLE]

~ Begin SidePanel
[TOC]
~ End SidePanel

~ Begin MainPanel
# 节点层次

## Node类型
> [node_class]

由于IE没有公开Node类型的构造函数,因此为了确保浏览器兼容,最好还是将nodeType属性与对应的数字值进行比较.

### nodeName 和nodeValue 属性
获取节点的具体信息.
``` javascript
if(someNode.nodeType==1){
  value=someNode.nodeName;
}
```

### 节点关系
每一个节点都有一个childNodes 属性,其中都保存着一个NodeList对象. NodeList与arguments相似,都是类数组,可以使用 

```javascript
Array.prototype.slice.call(someNode.childNodes,0);
```
来将其转换为数组.但在IE8及之前的浏览器中,这段会导致错误.修改为以下:
``` javascript
function convertToArray(nodes){
  let array=null;
  try{
    array=Array.prototype.slice.apply(someNode.childNodes,0);
  }catch(ex){
    array=[];
    for(var i =0,len=nodes.length;i<len;i++){
      array.push[node[i]];
    }
  }
  return array;
}
```
### 操作节点
任何DOM节点不能同时出现在文档中的多个位置.

#### cloneNode()
参数true||false 表示是否深复制.
并且IE会复制事件处理程序,所以在复制之前最好先移除事件处理程序

## Document 类型

* document.body
* document.doctype
* document.document.Element; // 取得对<html> 的引用
* document.title;  //文档标题
// 以下三个属性 只有domain 可以设置的.但出于安全的考虑,
* document.url;
* document.domain; 
* document.referrer;

[Node_class]: https://developer.mozilla.org/zh-CN/docs/Web/API/Node/nodeType "link title"
### 查找元素
``` html
<input type="text" name="myEle" value = "Text field">
<div id="myEle"> </div>
```
上面这段代码 在ie7中使用 document.getElementById("myEle")会返回 <input> 元素.所以最好的办法是**不让表单字段的name特性与其他元素的id相同**

### DOM 一致性检测
`document.implementation.hasFeature();`
参数为 要检测的DOM功能的名称和版本号

## Element
在HTML中标签名和在XML中的标签名会有差异,因此在比较前最好要将标签名装换为相同的大小写形式
``` javascript
if(element.tagName.toLowerCase()=="div")
{
  //...
}
```
### 设置特性

为Element添加特性时,需要通过 setAttribute()方法进行,直接使用类似这种方式添加自定义属性,该属性不会自动成为元素的特性.
``` javascript
div.color="red";
div.getAttribute("color");//return null;
```
### attributes属性
Element是使用attributes 属性的唯一一个DOM节点类型.
主要用于 遍历元素的特性.

### 创建元素
document.createElement("div"),参数为标签名,也可以直接传入完整的元素标签.

此时创建的元素并没有显示在浏览器中,必须将其添加到文档树中;

已知问题:
* 不能设置动态创建的 《iframe》元素的name特性
* 不能通过表单的reset()方法重设动态创建的 《input》元素
* 动态创建的type特性值为"reset" 的《button》元素重设不了表单
* 动态创建的一批name相同的单选按钮彼此**毫无关系**

以上都可以通过在 createElement()中指定完整的HTML标签来解决.

###元素的子节点
``` html
  <ul>
    <li>Item1</li>
    <li>Item2</li>    
    <li>Item3</li>
   </ul>
    
```
当有的浏览器解析时,会将节点之间的空白符也读取为元素,此时element.childNodes ==7.
通常都要检查一下nodeType的属性 是否为element(1) 再进行操作.

### 文本节点
在默认情况下,每个可以**包含内容**的元素最多只能有一个文本节点.
``` Html
  // 无内容，也就没有文本节点
  <div></div>
  // 有空格，一个文本节点
  <div> </div>
  // 有内容 ，一个文本节点
  <div>啊实打实的 asda是</div>
```
修改文本内容  `div.firstChild.nodeValue` 为其赋值即可。要注意的是字符串会被转义 <b>->&lt; b&gt;

* 假如一个元素有多个文本节点，通过 normalize（） 方法可将其合并为一个

# DOM操作技术

## 动态脚本
> 和操作HTML元素一样，创建动态脚本也有两种方式

* 动态加载的外部JavaScript文件能够立即运行
：`<script src="client.js"></script>`

* 通过javascript 动态添加
``` javascript
  
function loadScriptString(code){
  var script=document.createElement("script");
  script.type="text/javascript";
  try{
    // 这里IE会导致抛出错误
  script.appendChild(document.createTextNode(code));

  }catch(ex){
    
    script.text=code;
  }
  document.body.appendChild(script);
}
```

## 动态样式
* 通过《link》 引入外部的文件
：`<link rel="stylesheet" type="text/css" href="styles.css">`
* 动态添加
``` javascript
function loadStyles(url){
  var link=document.createElement("link");
  link.rel="stylesheet";
  link.type="text/css";
  link.href=url;
  // css 要添加到head中，才能保证在所有的浏览器中的行为一致
  var head=document.getElementByTagName("head")[0];
  head.applenChild(link);  
}
```

## 使用NodeList
> DOM中 NodeList、NamedNodeMap和HTMLCollection这三个集合都是“动态的”，每当文档结构发生变化，它们都会得到更新。
访问NodeList是Javascript中导致问题最多的操作。最好就是尽量减少DOM操作。

~ End MainPanel