Title         : 表单脚本

Author        : Hyc
Affiliation   : 
Email         : toyluckelbo@outlook.com

Bibliography  : example.bib

[INCLUDE=book]
[INCLUDE=webtoc]
[INCLUDE=webanchors]

[TITLE]

~ Begin SidePanel
[TOC]
~ End SidePanel

~ Begin MainPanel
# 表单的基础知识
> html 中 表单为 `<form>`,JavaScript中 为继承自 HTMLElement 的 HTMLFormElement.拥有自己独有的属性和方法.

document.forms 获取页面中所有的表单,通过数值索引或name值来取得特定的表单.

## 提交表单
<div>
  <!--
  通用提交按钮
-->
  <input type="submit" value="Submit Form">
   
   <!--
自定义提交按钮
-->
  <button type="submit">Submit Form</button>
    <!--
图像按钮
-->
  <input type="image" src=""   
</div>
form中存在上面任一种按钮,在相应表单控件拥有焦点的情况下,按回车键就可以提交该表单.

## 重置表单

reset 作为 特性值

## 表单字段


# 文本框脚本
> textarea 和 input type="text" 

不能给 textare 设置 最大字符数

两种文本框都会将用户输入的内容保存在 value 属性中,通过该属性动态修改文本框的值.

&bbox; 不建议使用标准的DOM方法,也就是 `setAttribute` 设置. 因为对value属性的修改不一定会反映在DOM中.

## 选择文本
> select() 选择文本框的所有文本.

### 选择(select) 事件
* IE8-  只要用户选择了一个字母(不必释放鼠标) 就可触发
* 其他   要用户选择了文本(释放鼠标) 才能触发

### 取得选择的文本

*其他 - html5 中添加了 两个属性 selectionStart 和 selectionEnd

*IE8-  
  - document.selection 对象,保存着用户在整个文档范围内选择的文本信息,虽无法确定用户选择的是页面中哪个部位的文本. 不过配合select 事件,可以假定是用户选择了文本框的文本.

```javascript
function getSelectedText(textbox){
  if(typeof textbox.selectionStart=="number"){
   return textbox.value.substring(textbox.selectionStart,textbox.selectionEnd);
  }else if(document.selection){
    return document.selection.createRange().text;
  }
}
```

### 选择部分文本

跨浏览器解决方案

``` javascript
function selectText(textbox,startIndex,endIndex){
    if(textbox.setSelectionRange){
     textbox.setSelectionRange(startIndex,endIndex);
    }else if(textbox.createTextRange){
    // ie8-
       var range=textnpx.createTextRange();
       range.collapse(true);
       range.moveStart("character",startIndex);
       range.moveEnd("character",endIndex-startIndex);
       range.select();
    }
}
```

## 过滤输入

### 屏蔽字符
eg: 过滤非数字
```javascript
  EventUtil.addHandler(textbox,"keypress",function(event){
    event=EventUtil.getEvent(event);
    var target=event.getTarget(event);
    var charCode=EventUtil.getCharCode(event);
    // 数字,字符串,ctrl键
    if(!/\d/.test(String.fromCharCode(charcode))&&charCode>9 && !event.ctrlKey){
       //屏蔽
       EventUtil.preventDefault(event);
    }
    
  });
```
### 操作剪贴板
...

### 自动切换焦点
见 js.js

## HTML5约束验证API
> 在JavaScript 被禁用或者未能加载时,也可以确保基本的验证  ,部分浏览器

### 必填字段
> required
任何标注有 required 的字段,在提交表单时都不能空着

测试浏览器功能:
`var isRequiredSupported= "required " in document.createElement("input")`

### 其他输入类型
> html5 为 type 添加了 几个值

* email : 邮件模式
* url : URL 模式

测试功能-> 在JavaScript创建一个input 元素,假如不支持 这些属性 返回的值会是 text
``` javascript
var input =document.createElement("input");
input.type="email";
var isEmailSupported=(input.type=="email");

```

### 数值范围
...

### 输入模式
> html5 为文本字段 新增 pattern 属性.值为一个正则表达式.

eg:  限制只能输入数值  `<input type="text" pattern="\d+" >`

功能测试 : `"pattern" in document.createElement("input");`

### 检测有效性
checkValidity() 用来判断字段中的值是否有效,是否与 pattern 属性匹配.

validity 中包含一系列属性,表示为什么字段有效或无效

### 禁用验证
novalidate  , 告诉表单不进行验证


# 选择框脚本
在未指定value 特性的情况下,
*ie8  返回空字符串
*其他  返回与text特性相同的值

## 选择选项

selectedIndex 表示选中项的位置
多选中,修改selectedIndex 会导致取消以前的所有选项并选择指定的那一项.但读取只返回选中项中第一项的索引值

### 添加选项
最佳方案:

```JavaScript
   var newOption=new Option("Option text","Option value");
   selectbox.add(newOption,undefined);//插入到列表最后
```

### 移除选项
* selectbox.removeChild(selectbox.options[0]);
* selecbox.remove(index);

### 移动和重排选项

> DOM中如果 为 appendChild() 传入一个文档中已有的元素,那么就会先从该元素的父节点中移除它,再把它添加到指定的位置.

# 表单序列化

> 利用表单字段的type属性,连同name 和 value 属性一起实现对表单的序列化.
...

# 富文本编辑
> WYSIWYG . 本质 是在页面中嵌入一个包含空HTML 页面的iframe.通过设置 designMode 属性,这个空白的HTML 页面可以被编辑. 有效值为 "on" 和 "off"

## 使用 cotenteditable 属性
将 contenteditable 属性应用给页面中的任何元素.



~ End MainPanel