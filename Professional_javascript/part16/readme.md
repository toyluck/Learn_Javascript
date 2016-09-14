Title         : HTML5脚本编程

Author        : Hyc

Bibliography  : example.bib

[INCLUDE=book]
[INCLUDE=webtoc]
[INCLUDE=webanchors]

[TITLE]

~ Begin SidePanel
[TOC]
~ End SidePanel

~ Begin MainPanel

# 跨文本消息传递
> XDM(cross-document messaging) 某个域中的页面与位于一个内嵌框架中的 xxx.域  中的页面通信.

核心是 postMessage() 方法.

```JavaScript
  var iframe=document.getElementById("myframe");
  iframe.contentwindow.postMessage("MSG","已知域")
```

触发message 事件,传递的事件包含一下三方面的重要信息:

* data: 作为postMessage() 第一个参数传入的字符串信息
* origin: 发送消息的文档所在的域
* source : 发送消息的文档的window对象的代理.

接受到消息后,向来源窗口发送回执 使用的 event.source 大多数情况下只是 window 对象的代理,不能通过这个代理对象访问**window对象的其他任何信息**.

XDM已经作为规范独立出来, Web Messaging,可查询官方文档.

# 原生拖放

> 从IE5.5 开始 页面中任何元素都可以拖放

## 拖放事件
依次触发下列事件:
1. dragstart
2. drag
3. dragend

大多数浏览器会为正被拖动的元素创建一个半透明的副本.

当某个元素被拖动到一个有效的放置目标上时:

1. dragenter
2. dragover ; 被拖动的元素还在放置目标的范围内移动时,就会持续触发
3. dragleave 或 drop ; 放置到了放置目标中触发drop,拖出放置目标,dragleave触发

## 自定义放置目标

balabala

# 媒体元素

> HTML5 新增了两个与媒体相关的标签 `<audio>` 和 `<video>`

由于并非所有浏览器都支持所有媒体格式,因此指定多种格式的媒体来源是必须的.

```html
   <video id="myVideo">
   <source src="">
   <source src="">
   <source src="">
   </video>
   <audio >
     <source src="">
     <source src="">
     </audio>
```  

## 属性
`<audio>`和`<video>` 共有的属性 ,能够提供当前媒体的状态

## 事件

## 自定义媒体播放器
组合使用 属性,事件和 play() 以及 pause()方法

## 检测编解码器的支持情况

> `<audio>`和`<video>` 都有一个 canPlayType()方法,接受一种格式/编解码器字符串,返回"probably" ,"maybe" 或"". **空字符串是假值**

`if(audio.canPlayType("audio/mpeg ; codecs=\"vorbis\"")){//处理}`

其中 codecs 为编解码器,**必须用引号**引起来才行


## Audio类型
> 原生构造函数,可以在任何时候播放音频. 与Image 相似,但不必插入文档

使用方法:
```JavaScript
  var audio=new Audio("sound.mp3");
  EventUtil.addHandler(autio,"canplaythrough",function(event){
    audio.play();
  })
```

创建新的Audio实例即可开始下载指定的文件.下载完毕后,调用play()播放.

在 onfinish() 中 处理播放完毕后的事件

# 历史状态管理
> 单页面应用中,html5 中新增history 对象 管理历史状态.配合 hashchange事件.

hashchange 可以知道URL 的参数什么时候发生了变化,pushState 接受三个参数:
1. 状态对象
2. 新状态的标题  // 没有浏览器实现,可传入空
3. 可选的相对URL

`history.pushState({name:"Hyc"},"","hyc.html")`

pushState 创建新的历史状态,按下"后退" 触发 window 的 popstate 事件

```JavaScript
  EventUtil.addHandler(window,"popstate",function(event){
    // state 就是 pushState 的 第一个参数
    var state=event.state;
    
  });
```  





~ End MainPanel