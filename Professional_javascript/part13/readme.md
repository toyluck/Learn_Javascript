Title         : 事件

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

### 跨浏览器的事件处理

``` javascript
var EventUtil ={
  addHandler:function(element,type,handler){
    if(element.addEventListener){
      
    }else if(element.attachEvent){
      
    }else{
      element["on"+type]=handler;
    }
  },
  removeHandler:function(element,type,handler){
      if(element.removeEventListener){
      
    }else if(element.detachEvent){
      
    }else{
      element["on"+type]=null;
    }
  }
};
```

# 事件对象
> 触发DOM上的某个事件时,会产生一个事件对象 event.这个对象包含着所有与事件有关的信息.

## DOM中的事件对象
`event`有确定的若干个属性.

事件冒泡流 -> 当点击事件真正的目标没有捕获事件时,event中除了 target 指向 button 外,其余都随冒泡流向上传递到捕获事件的元素.

当需要在一个函数处理多个事件时,可使用 type 属性:

``` javascript
var handler=function(event){
  switch(event.type){
    case "click":
       ...
       break;
    case "mouseover":
    ...
    break;
    
  }
}
```

要阻止特定事件的默认行为,可以使用preventDefault()方法,但是只有cancelable 属性设置为true的事件,才可以使用.

要立即停止事件在DOM层次中的传播,使用 **stopPropagation()**方法;

&bbox; eventPhase　属性
* 1 : 捕获阶段
* 2 : 处于目标对象上
* 3 : 冒泡阶段调用的事件处理程序

~ End MainPanel