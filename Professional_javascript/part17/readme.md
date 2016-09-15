Title         : 错误处理与调试

Author        : Hyc
Email         : toylucklebo@outlook.com


[INCLUDE=book]
[INCLUDE=webtoc]
[INCLUDE=webanchors]

[TITLE]

~ Begin SidePanel
[TOC]
~ End SidePanel

~ Begin MainPanel

# 浏览器报告的错误

不同浏览器对错误的收集和展现都不同,分别对待.

# 错误处理

## try-catch 语句

`catch(error)` 中的参数 为每个浏览器都支持的属性. 但不同的浏览器都为事件对象添加了其他相关信息.

### finally 子句

在IE7- 中 如果没有catch子句,finally中的代码永远不会执行.

只要代码中包含finally 子句,那么try-catch 中的 return 语句都将被忽略

### 错误类型

要想知道错误的类型, 可使用 instanceof 操作符.

## 抛出错误

throw 操作符.用于抛出自定义错误.

利用原型链 通过集成Error 来创建自定义错误类型
```javascript
  function CustomError(message){
    this.name="CustomError";
    this.message=message;
  }
  CustomError.prototypr=new Error();
  throw new CustomError("MSG");
  
```

IE 只有在抛出Error 对象的时候才会显示自定义错误. 其他 它都显示 `exception throw and not caught`;

### 抛出错误的时机

eg: 确定传入函数的类型

## 错误(error) 事件

> 任何没有通过try-catch 处理的错误 都会触发 window 对象的 error 事件.
> 任何Web浏览器中,onerror 事件处理程序都不会创建 event 对象,但它可以接受三个参数: 错误消息,错误所在的URL和行号.

只有下面这种DOM0级技术来指定onerror 事件处理程序
```JavaScript
  window.onerror=function(message,url,line){
    ...
    //添加这行 不会将错误报告给浏览器
    return false;
  }
```

图像也支持error 事件.当图像的src特性中的URL 不能返回可以被识别的**图像格式**就会触发error事件. 此时的error事件遵循DOM格式,返回一个以图像为目标的 event 对象.

## 处理错误的策略



## 常见的错误类型

### 类型转换错误

* 使用 全等/非全等 替代 相等/非相等  操作符
* 流控制语句. 参数作为判断值,if 之类的语句会将任何值都转换成布尔值,这极易造成出错. 0 undefined等

### 数据类型错误

使用特定类型函数时,传入的参数不具备就会产生 数据类型错误.
```JavaScript
  function test(msg){
    // 这里应该做类型检测, indexof 只有 String 类型才能使用
  var index=  msg.indexOf("?");
  }
```

### 通信错误

1. 格式不正确. 发送的数据应该使用  `encodeURIComponent()` 对数据进行编码.

// 拼接查询字符串的函数
```JavaScript
  function addQueryStringArg(url,name,value){
    if(url.indexOf("?")==-1){
      url+="?";
    }else{
      url+="&";
    }
    url+=encodeURIComponent(name)+"="+encodeURIComponent(value);
  }
```

## 区分致命错误和非致命错误
> 区分的主要依据就是看他们对用户的影响.

## 把错误记录到服务器
```JavaScript
  function logError(sev,msg){
    var img=new Image();
    img.src="log.php?sev=" + encodeURIComponent(sev)+"&msg="+encodeURIComponent(msg);
  }
```
这个错误记录系统函数 接受两个参数
1. sev ; 表示严重程度的字符串或数值
2. msg ; 错误消息

使用Image 对象来发送请求. 具有以下几方面的优势:

1. 不支持XMLHttpRequest 对象的浏览器 也支持 Image 对象
2. 可避免跨域限制.
3. 在记录错误的过程中出问题的概率比较低

# 调试技术

> 不再建议在调试中使用 alert()了

## 将消息记录到控制台

1. console.log();
2. 使用LiveConnect. 在JavaScript 中运行 Java 代码

## 将消息记录到当前页面

创建一块区域,将log 输出到该页面上.

## 抛出错误

手动抛出明确的错误.


# 常见的Ie 错误

用户量多就是要去看懂IE 给出的错误.

## 操作终止

eg: JavaScript 代码在页面尚未加载完毕时就要修改document.body

## 无效字符
> JavaScript 语法中未定义的字符

## 未找到成员
> IE中的所有DOM对象都是以COM对象,而非原生JavaScript对象的形式实现的. 这会导致一些与**垃圾收集**相关的非常奇怪的行为

如果在对象被销毁之后,又给该对象赋值,就会导致未找到成员错误.

eg: 使用 event 对象的时候. IE中的event对象是window属性,该对象在事件发生时创建,最后一个事件处理程序执行完毕后销毁.

```JavaScript
  document.onclick=function(){
    var event=window.event;
    setTimeout(function(){
      event.returnValue=false;// 未找到成员错误
    },1000);
  }
```

## 未知运行时错误
当使用innerHtml 或 outerHtml 以一下方式指定HTML时:

1. 把块元素插入到行内元素时
2. 访问表格任意部分的任意属性时

## 语法错误
这个IE会很明显


## 系统无法找到指定资源

JavaScript请求某个资源URL的长度超过了IE对URL的限制



~ End MainPanel