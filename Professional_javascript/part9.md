Title         : 第九章客户端检测

Author        : Hyc
Affiliation   : Research institute
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

![butterfly]
[butterfly]: images/butterfly.png "butterfly"  { width:4em }
# Introduction     { #sec-intro }

不同浏览器间的差异性导致浏览器都有各自的检测方法，这种差异导致的检测方法不可计数。因此不到万不得已不要使用客户端检测。

# 能力检测

> 又称特性检测。 不是用来识别特定的浏览器，**而是识别浏览器的能力**

eg: IE5.0之前的版本不支持 document.getElementsById() 这个方法.

```javascript
   function getElemetn(id){
     if(document.getElementById){
       return document.getElementById(id);
     }else if(document.all){
       return document.all[id];
     }
   }
```
## 更可靠的能力检测
考虑到例如 IE 中对ActiveX 对象与其他对象的行为差异,要在浏览器环境下测试任何对象的某个特性是否存在,使用下面这个函数 :

``` javascript
function isHostMethod(object,property){
  var t=typeof object[property];
  return t=='function'||(!!(t=='object'&&object[property]))
  || t=='unknow';
}
```
## 能力检测,不是浏览器检测
不同浏览器间可能存在相同的属性,所以不能完全靠特定功能来确定浏览器.
而是根据浏览器是否有该能力来进行下一步操作.

# 怪癖检测
> 识别浏览器的特殊行为(bug).

仅检测对程序有直接影响的"bug".

## 用户代理检测
> 通过检测用户代理字符串来确定实际使用的浏览器.
通过分析 navigator.userAgent 来进行细分检测

~ End MainPanel