Title         : 高级技巧

Author        : Hyc
Email         : toylucklebo@outlook.com


[INCLUDE=book]
[INCLUDE=webtoc]
[INCLUDE=webanchors]

[TITLE]

~ Begin SidePanel
[TOC]
~ End SidePanel
# 高级函数

## 安全的类型检测
区分原生和非原生JavaScript对象

```javascript
  
  function isArray(value){
                                                             // Function
                                                             // RegExp
    return Object.prototype.toString.call(value) == "[object Array]";
  }
  
```
上面的方法的依据是: 在任何值上调用Object 原生的 toString() 方法,都会返回一个 [object NativeConstructorName] 格式的字符串.

要注意的是 IE中以COM 对象形式实现的任何函数,isFunction() 都会返回 false(它们不是原生的 JavaScript函数);

**前提是未修改 Object.prototype.toString()本身**

## 作用域安全的构造函数
当未使用 `new` 关键字生成对象时,因为该this对象是在运行时绑定的,直接调用该对象 this 会映射到 全局对象 `window` 上.

解决的办法: 添加 作用域环境检查:

```JavaScript
   function Person(name,age,job){
     if (this instanceof Person){
        this.name=name;
        this.age=age;
        this.job=job;
     }else{
       return new Person(name,age,jon);
     }
   }
```
如果不使用原型链,单纯的继承会得不到想要的属性附加.

## 惰性载入函数

> 多数JavaScript代码中都包含 若干 if 语句,帮助执行正确的代码. 优化if 语句的使用次数可以提高函数的运行速度.

## 函数绑定

```JavaScript
  function bind(fn,context){
    return function(){
      // 这里的arguments, 是闭包函数的.
      return fn.apply(context,arguments);
    }
  }
```
EMACScript 5 添加了原生的 bind() 方法,但只支持 IE9+;
且被绑定函数与普通函数相比有更多的开销,只在必要时使用..

## 函数库里化
> 与 函数绑定的区别在于 当函数被调用时,返回的函数还需要设置一些传入的参数.

```JavaScript
   function curry(fn){
     var args=Array.prototype.slice.call(arguments,1);
     return function(){
       var innerArgs=Array.prototype.slice.call(arguments);
       var finalArgs=args.concat(innerArgs);
       //这个函数并没有考虑到执行环境,所以第一个参数为 null
       return fn.apply(null,finalArgs);
     };
   }
```

函数库里化 和 数据绑定 混合使用.


# 防篡改对象
> ECMAScript5中定义的. 且无法撤销.

## 不可扩展对象

**textObject.preventExtensions(obj)**,调用后就不能再为 obj 添加属性和方法.

## 密封的对象
**Object.seal(obj)**, 不能扩展,并且已有成员的 `[Configurable]` 特性将被设置为 false.意味着不能删除属性和方法.
**Object.isSealed(obj)** 确定对象是否被密封了.

## 冻结的对象
> 最严格的防篡改级别 (frozen object)
**Object.freeze(obj)**, `[Wrtable]` 特性会被设置为 false.

# 高级定时器
> 使用 setTimeout() 和 setInterval() 创建的定时器 的执行时机是不能保证的.这是由于JavaScript是运行于单线程的环境中的,所有的代码都要等到JavaScript进程空闲之后才能执行.

## 重复的定时器

使用`setInterval()` 中 定时器代码可能在代码再次被添加到队列之前还没有完成执行,JavaScript引擎此时会检查**没有该定时器的任何其他代码实例**时,才将定时器代码添加到队列中.

```JavaScript
  setTimeout(function(){
    
    // 处理中
    setTimeout(arguments.callee,interval);
  },interval);
  
```

## Yielding Processes

> 脚本长时间运行,会弹出浏览器错误的对话框.定时器是绕开此限制的方法之一

**数组分块**
1. 该处理是否必须同步完成?
2. 数据是否必须按顺序完成?

都为否 ->

```JavaScript
  function chuck(array,process,context){
    
  
  setTimeout(function(){
    var item=array.shift();
    process(item); 
    // 处理中
    if(array.length>0)
       setTimeout(arguments.callee,interval);
  },interval);
  }
```
_Array.concat(),不传递参数,会返回一个原来数组中的copy_

## 函数节流
> 某些代码不可以在没有间断的情况下连续重复执行. eg: IE中的onresize() 事件中对DOM进行操作,高频率的更改可能会让浏览器崩溃.

```JavaScript
  // 要执行的函数 ; 作用域
  function throttle(method,context){
    var id=method.tId;
    method.tId=setTimeout(function(){
      method.call(context);
    },100);
  }
  
  function resizeDiv(){
    //修改 元素的大小等
  }
  window.onresize=function(){
    throttle(resizeDiv);
  }
  
```
**只要代码是周期性执行的,都应该使用节流**

# 自定义事件
```JavaScript
   function EventTarget(){
     this.handlers={};
   }
   
   EvetTarget.prototype={
     contructor:EventTarget,
     addHandler:function(type,handler){
       if(typeof this.handlers[type]=="undifined"){
         this.handlers[type]=[];
       }
       this.handlers[type].push(handler);
     },
     fire:function(event){
       if(!event.target){
         event.target=this;
       }
       if(this.handlers[event.type] instanceof Array){
         var handlers=this.handlers[event.type];
         for(var i=0,len=handlers.length;i<len;i++){
           //发送事件
           handlers[i](event);
         }
       }
     },
     removeHandler:function(type,handler){
       if(this.handlers[type] instanceof Array){
          var handlers=this.handlers[event.type];
           for(var i=0,len=handlers.length;i<len;i++){
           //发送事件
              if(handlers[i] ==handler){
                break;
                  }
             }
          handlers.splice(i,1);
       }
     }
   }
   
```

# 拖放


~ End MainPanel