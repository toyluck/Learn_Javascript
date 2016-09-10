Title         : DOM扩展

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
# 选择符API
> querySelector()和querySelectorAll 用来代替getElementById() 和 getElementByTagName() 来取得元素的引用

## querySelector()
接受一个css选择符，返回该模式匹配的第一个元素，没有匹配的则返回null；
* body   ;// 指明
* "#id"  ； //指明id
* ".className";//返回第一个该类元素
* "img.button";//返回类为“button”的第一个图像元素

## querySelectorAll()
接受的参数 与querySelector（）方法一致，返回一个NodeList的实例。
* 返回值是带有所有属性和方法的NodeList，但不是对文档进行搜索的动态查询，这样可以避免NodeList对象通常引起的大多数性能问题
## matchesSelector（）
> 实验性功能

# 元素遍历
> 元素间的空格,IE9 及之前版本不会返回文本节点,而其他所有浏览器都会返回文本节点.为了弥补这一差异,Element Traversal 新定义了一组属性
![QQ图片20160910163427]

[QQ图片20160910163427]: images/QQ-20160910163427.png "QQ图片20160910163427" { width:auto; max-width:90% }

# HTML5
> 这里只讨论与DOM节点相关的内容.

## 与类相关的扩充

### getElementByClassName()
可以接受多个类名,返回NodeList对象,因此具有同样的性能问题
`document.getElementByClassName("class1 clazz2")`;

### classList
> 操作类名时,通过className属性添加 删除 和替换类名.对字符串的操作很繁琐. classList是新集合类型DOMTokenList的实例. **Firefox 3.6+ 和 Chrome 支持**

要删除节点的某个class
: `div.classList.remove("clazz")`;

### 焦点管理

~ End MainPanel