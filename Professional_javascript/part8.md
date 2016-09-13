Title         : 第八章 BOM
Author        : Hyc
Logo          : True

[TITLE]

# window对象

> 既是通过JavaScript访问浏览器窗口的一个接口,也是ECMAScript规定的Global对象.

## 全局作用域
直接在window对象上的定义的全局变量可以使用 delete 进行删除.但是 全局变量不可以
``` javascript
age=29;
window.color="red";

delete window.age;// 在IE<9 下抛出错误,其他的浏览器返回false
delete window.color;//在IE<9 下抛出错误,其他的浏览器返回true

```
使用var 语句添加的window属性有一个[Configurable]的特性,被设置为false,因此不能被删除.

尝试访问未申明的变量会抛出错误,但是通过查询window对象,可以知道某个可能未申明的变量是否存在.

``` javascript
var value=window.oldValue;// 这里不会抛出错误,因为这是一次属性查询
```

## 窗口关系及框架(frame)
> 如果页面中包含框架,则每个框架都有自己的window对象,并保存在frames集合中.每个window对象都有一个name属性,其中包含框架的名称.同时浏览器会存在多个Global对象,在每个框架中定义的**全局变量**会自动成为框架中window对象的属性.每个window对象都包含原生类型的构造函数,这些构造函数都一一对应,但并不相等.

## 导航和打开窗口
window.open(); 方法返回一个指向新窗口的引用,通过其可以调整大小或者移动位置.
新创建的窗口中 有一个 opener 属性指向打开它的原始窗口,但原始窗口没有指向弹出窗口的指针.
如果两个window之间要互相通信,新的标签页就不能运行在独立的进程中.要切断之间的联系 通过设置  `opener =null` 
### 弹出窗口屏蔽程序

* 浏览器内置的屏蔽程序阻止的弹出窗口
:检测window.open()返回值是否为null 来进行检测是否被阻止
* 浏览器扩展或其他程序阻止
: window.open()通常都会抛出一个错误.这是可以通过 try-catch块来进行处理
``` javascript
var blocked=false;

try{
  var w=window.open(//...);
   if(w==null)blocked=true; 
}catch(ex){
  blocked=true;
}
```

### 间歇调用和超时调用

* 超时调用 -> window.setTimeout();

* 简写调用 -> window.setInterval();

## 位置操作
>location 记录当前页面的位置,并可以对浏览功能进行细分使用.
 


