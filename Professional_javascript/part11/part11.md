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
* document.activeElement 属性. 获取当前DOM中获得焦点的元素
* item.focus()  // 获得焦点
* document.hasFocus() // 确定是否获得焦点

### HTMLDocument 的变化
> 这些功能被大部分浏览器支持

#### readyState 属性
* loading   // 正在加载文档
* complete  // 已经加载完文档
``` javascript
if(document.readyState=="complete"){
  //执行操作
  
}
```
#### 兼容模式
> 从IE6开始区分页面渲染的模式 是标准还是混杂的.

document.compatMode

#### head属性
HTML5 中新增 head属性.若不可用 使用 document.getElementsByTagName("head")[0];

## 字符集属性

document.charset // 表示文档中实际使用的字符集,也可以用来指定新字符集

## 自定义数据属性
> 当需要给元素添加一些不可见的数据以便进行其他处理时使用
> HTML5规定可以为元素添加非标准的属性,前缀为 data- 即可
```html
<div id="id1" data-appid="1234" data-myname="Nicholas"></div>
```

要访问时 通过元素的dataset 属性.
: dataset属性的值是DOMStringMap的一个实例,键值对.
``` javascript
var id1=document.querySeletor("#id1");
let appid=id1.dataset.appid;//获取
id1.dataset.appid="4321";//设置值
```

&bbox; 要注意浏览器是否支持本属性

## 插入标记
### interHtml属性

### outerHTML属性
在读模式下,outerHTML会根据指定的HTML字符串创建新的DOM子树,然后用这个DOM子树**完全替换调用元素**


~ End MainPanel