Title         : 事件
Cite Style  : natural

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

#事件流
* 事件冒泡流
* 事件捕获流

# 事件处理程序

## HTML 事件处理程序
eg:
```html
  <input type="button" onclick="alert(this)" />
```
`this` 等于事件的目标元素

&bbox; 存在时差,当时的事件处理程序尚不具备执行条件,会导致错误

&bbox; 在不同浏览器会导致不同结果

&bbox; Html 和 Javascript 耦合太高

## DOM0级处理程序

``` javascript
var btn=document.querySelector("#btn");
btn.onclick=function(){
  ...
};
```

## DOM2级处理程序
> "DOM2"定义了 处理指定和删除事件处理程序的操作  :  addEventListener() 和 removeEventListener()

参数

1. 处理的事件名.
2. 事件处理程序
3. true? 捕获阶段调用: 冒泡阶段调用   事件处理程序

``` javascript

var btn=document.querySelector("#btn");
btn.addEventListener("click",function(){
  ...
},false);
```
同一类型事件可以多次添加,并按顺序执行.

&ballotbox; 通过 addEventListener() 添加的事件处理程序只能使用 removeEventListener() 来移除,传入的参数和添加的参数相同.**意味着匿名事件处理函数将无法被移除**.

## IE事件处理程序

与DOM 不同的是

* 函数名
  - attachEvent()
     - 与使用DOM0级方法的主要区别在于事件处理程序的作用域.
       - DOM0 级 会在其所属元素的作用域内运行
       - attachEvent() 方法情况下,会在**全局作用域**下运行,此时 this等于 window
  - detachEvent()
* 响应事件名
  - 不是 "click" 而是 "onclick" 形式
* 只支持事件冒泡
* 添加同一事件时,执行顺序是以添加时相反的顺序出发. secondadd click -> firstadd click

处理跨浏览器 事件 : 

``` javascript
var EvenUtil={
  addHandler : function(element,type,handler){
    if(element.addEventListener){
      
    }else if(element.attachEvent){
      element.attachEvent("on"+type,handler);
    }else {
      element["on" + type]=handler;
    }
  },
  removeHandler : function(element,type,handler){
     if(element.removeEventListener){
      
    }else if(element.attachEvent){
      element.remove("on"+type,handler);
    }else {
      element["on" + type]=null;
    }
  }
}
```

# 事件对象

触发DOM上的某个事件时,会产生一个 事件对象event,它包含所有与事件有关的信息.所有浏览器都支持event对象,但支持方式不同.

## DOM种的事件对象

无论指定事件处理程序时使用什么方法(DOM0||DOM2),都会传入一个event对象
`function(event){}`

## IE中的事件对象
> 与访问DOM的event 事件不同,要访问IE中的event 对象有几种不同的方式,取决于指定事件处理程序的方法.

* DOM0级 添加事件处理程序时,event对位window对象的一个属性存在
```javascript
var btn = document.querySelector("btn")
btn.onclick=function(){
  var event=window.event;
}
```
* 通过 attachEvent()的情况下,会有一个event对象作为参数被传入事件处理函数
``` javascript
btn.attachEvent("onclick",function(event){
  ...
});
```
取消
*默认行为  -> preventDefault()
*冒泡      -> stopPropagation()

IE的事件处理程序的作用域是根据它的方式来确定的,不能认为 this 会始终等于事件目标.
最好还是使用**event.srcElement** 比较保险.

IE中阻止
* 默认行为 - >   returnValue=false;
* 事件冒泡 - >   cancleBubble = true;

## 跨浏览器的事件对象

技巧就是针对 不同的浏览器做功能过滤


# 事件类型

## UI事件

### load

* 图像元素不一定要从添加到文档后才开始下载,只要设置了src属性就会开始下载.

* script 元素也会触发load事件,但是只有在设置了 src 属性并将该元素添加到文档后,才会开始下载

### unload
该事件在文档被完全卸载后触发. 多用来 清除引用,避免内存泄漏

### resize
窗口调整高度或宽度时 触发.

## 焦点事件

> 配合 document.hasFocus 和 document.activeElement ,可以知晓用户在页面上的行踪.

* blur : 失去焦点,不会冒泡
* focus : 获得焦点,不冒泡
* focusin: 与 focus等价,但冒泡
* focusout : blur 的通用版本

检测是否支持这些事件 :   FocusEvent 3.0

## 鼠标事件

除了 mouseenter 和 mouseleave ,所有鼠标事件都会冒泡

### 客户区坐标位置
鼠标事件都是在浏览器视口中的特定位置上发生的. 这个位置信息保存在 clienX 和clientY 属性中.

### 页面坐标位置
鼠标光标在页面中的位置,坐标是从页面本身而非视口的左边和顶边计算的.
pageX 和 pageY

在页面没有滚动的情况下, 与 客户坐标相等.

&bbox; IE8- 不支持此属性,需要用到 document.body或document.documentElement 中的scroollLeft 和scrollTop 属性


### 屏幕坐标位置
screenX 和 screenY

### 修改键
event.
* shiftKey
* ctrlKey
* altKey
* metaKey

### 相关元素
在发生 mouseover 和 mouserout 事件时,会涉及更多的元素.

* DOM
  - event.realtedTarget   提供相关元素的信息

* IE8- 
  - mouseover  ->event.fromElement
  - mouseout   ->event.toElement

### 鼠标按钮
IE8- 不支持DOM版鼠标事件,需要针对 event.button 的值进行处理

### 更多的事件信息
...

### 鼠标滚轮事件
mousewheel 根据正负值来确定方向.

&bbox; Opera9.5- 正负号是颠倒的

### 触摸设备

### 无障碍性问题

## 键盘与文本事件
### 键码
keycode

### 字符编码
charcode

## 复合事件
用处不大.

## 变动事件

> DOM2级的变动(mutation)事件能在DOM中的**某一部分发生变化**时给出提示.

使用 MutationEvents 2.0 检测浏览器是否支持

IE8- 不支持任何变动事件

### 删除节点

使用removeChild() 或者 replaceChild() 删除节点时,首先触发DOMNodeRemoved 事件.事件冒泡

如果删除的节点包含子节点,那么在这些节点上会相继触发DOMNodeRemovedFromDocuemnt 事件. 事件不冒泡.

接着触发 DOMSubtreeModified (),事件目标是被移除节点的父节点.

### 插入节点

appendChild(),replaceChild(),insertBefore()

1. DOMNodeINserted,冒泡
2. 新插入的节点上面 触发 DOMNodeInsertedIntoDocument,不冒泡
3. DOMSubtreeModified

## HTML5 事件

### contextmenu 事件

鼠标右键 具体看 js

### beforeunload 事件

> 在浏览器卸载页面之前触发,提示用户并将控制权交给用户

为了显示对话框,必须将event.returnValue 的值设置为要显示给用户的字符串,并作为函数的值返回

``` javascript
EventUtil.addHandler(window,"beforeunload",function(event){
  var message=",,.,,";
  event.returnValue=message;
  return message;
});
```
### DOMContentLoaded事件
> load会在页面一切都加载完毕时调用,但这过程会因外部资源过多而颇费周折. DOMContentLoaded 事件则会在形成完整的DOM树之后就会触发.且**支持在页面下载的早期添加事件处理程序**

除目标target属性(document)外,不提供任何额外的信息.


如果浏览器不支持 本事件,在页面加载期间设置一个事件为0毫秒的超时调用,并放在第一个超时调用.
``` javascript
setTimeout(function(){
  //添加事件处理程序
},0);
```

### readystatechange 事件
> ie 为DOM文档中的某些部分提供的事件.目的是提供与文档或元素的加载状态有关的信息.

存在下列 5 个readystate 属性

* uninitialized 
* loading
* loaded
* interactive
* complete

并非所有对象都会经历 readyState 的这几个阶段.

但交互阶段和完成阶段的出现顺序无法保证,因此要同事检测交互和完成阶段
``` javascript
EventUtils.addHandler(document,"readystatechange",function(event){
  if(document.readyState=="interactive"||document.readyState=="complete"){
    // 移除相应的事件处理程序 以免在其他阶段再执行.因为使用的是匿名函数,这里使用的是arguments.callee 来引用该函数
    EventUtils.removeHandler(document,"readystatechange,arguments.callee");
  }
});
```
动态添加 script
// 查看 js

### pageshow 和 pagehide 事件
> 这两个事件的目标是 document,但必须将其事件处理程序添加到 **window**
> back-forward cache (bfcache),这个缓存中不仅保存着页面数据,还保存了 DOM和JavaScript的状态.
> ie9- 不支持

如果要检查页面是否被保存在了bfcache中, event 中还包含一个 persisted 的 布尔值属性.

### hashchange事件
> html5 中新增事件,便于在URL 的参数列表(及URL中"#"号后面的所有字符串)发生变化时通知开发人员.
event对象在URL参数列表只要变化时会包含两个属性 oldURL 和 newURL. 分别保存 参数列表和变化前后的完整URL.

因浏览器支持问题,所以最好使用**location** 对象来确定当前的参数列表;

&bbox; 浏览器功能检测(IE8在IE7文档模式下运行,会有bug):
``` javascript
var isSupported=("onhashchange" in window)&&(document.documentMode==undefined||document.documentMode>7);

```

## 设备事件

### orientationchange 事件
移动端浏览器主流为webkit核心
*  orientationchange  
* MozOrientation : 提供屏幕的方向变化
* deviceorientation : 加速器检测
* devicemotion  : 设置什么时候移动

## 触摸与手势事件
...

# 内存和性能
> 添加到页面上的**事件处理程序数量**将直接关系到页面的整体运行性能

## 事件委托
> 鉴于事件冒泡传递特性,针对同类型事件可统一在DOM树中**尽量最高**的层次上添加一个事件处理程序.

### 移除事件处理程序
> "空事件处理程序", 也是造成内存和性能问题的主要原因

最好的做法是在页面卸载之前,通过onunload事件处理程序移除所有事件处理程序.

&ballotbox; onunload 意味着页面不会被缓存在 bfcache中


# 模拟事件
> 测试Web应用程序,极其有用!!!

## DOM中的事件模拟

在document.createEvent()方法创建event对象.接受一个参数:

&ballotbox; UIEvents: 一般化的UI事件. DOM3 中是 UIEvent

&ballotbox; MouseEvents : 鼠标事件 . DOM3 中是 MouseEvent

&ballotbox; MutationEvents : DOM变动事件. ..... MutationEvent

&ballotbox; HTMLEvents : 一般化的HTML事件

触发事件 -> dispatchEvent(),传入要触发事件的event对象

### 模拟鼠标事件





~ End MainPanel