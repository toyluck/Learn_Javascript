Title         : 第四章学习记录
Author        : Hyc
Logo          : True

[TITLE]

# 基本类型和引用类型的值
> ECMAScript 变量可能包含: 基本类型值(**不是对象**) 和引用类型值.
* 5种基本数据类型 : Undefined Null Boolean Number String
* 引用类型的值是保存在内存中的对象.JavaScript不允许直接访问内存中的位置,在操作对象时,实际上是在操作**对象的引用而不是实际的对象**.

## 动态的属性
* 不能给基本类型的值添加属性,尽管不会导致任何错误;
``` javascript
var name="Nicholas";
name.age=27;
alert(name.age);//undefined
```
## 复制变量值

* 基本类型 -> 从一个变量向另一个变量复制基本类型的值,会在变量对象上创建一个新值
* 引用类型 -> 同java,传递的是指向存储在堆中的一个对象的指针副本.

## 传递参数
* 基本类型 -> 传递的是复制后的新值
* 引用类型 -> 指向同一堆中对象的指针副本
: 在局部作用域中修改的对象在全局作用域中反映出来,就说明参数是按引用传递的,**这是错误的**
``` javascript
functino setName(obj){
  obj.name="Nicholas";
  obj=new Object();
  obj.name="Greg";
}
var person=new Object();
setName(person);
console.log(person.name);//Nicholas
```
此时在函数内部 将一个新对象赋给变量obj,改变name属性的值,但外部的引用仍然指向"Nicholas".说明 原始的引用仍然保持不变.在函数内部重写obj时,这个变量引用就是一个函数的**局部对象了,会在函数执行完后销毁.**

## 检测类型
* 基本类型 -> typeof
: 检测函数时 会返回 "function";在ie和firefox中,对正则表达式使用会返回"object";
* 引用类型 -> instanceof 
: 使用instanceof 检测基本类型时 始终会返回 false,因为 **基本类型不是对象**

# 执行环境及作用域
> execution context. 每个执行环境都有一个与之关联的 **变量对象**,环境中定义的所有变量和对象都保存在该对象中.只有解析器处理数据时会在后台使用它.
* 环境栈 -> 执行流进入函数时,将函数的环境推入一个环境栈中,函数执行后,栈将其弹出.
* 作用域链-> 保证对执行环境有权访问的所有变量和函数的有序访问.

## 块级作用域
> 由花括号封闭的代码块没有自己的执行环境
``` javascript
if(true){
  var color="red";
}
console.log(color);//"red"
```

### 声明变量
* 不使用**var**声明的变量会自动添加到全局环境.
* 使用**var**声明的变量会自动被添加到最接近的环境中.

# 垃圾收集
> JavaScript具有自动垃圾收集机制.

## 标记清除
大部分主流浏览器的JavaScript的使用方式

## 引用计数
IE 中设计COM对象,就可能引发 循环引用的问题,解决办法是 在不使用循环引用时,手工断开原生JavaScript对象与DOM元素直接的连接 -> 将变量设置为null;

## 管理内存
优化内存占用的最佳方式,为执行中的代码只保存必要的的数据.一旦数据不再有用,将其**解除引用**(设值为null),以便垃圾收集器下次运行时将其回收.
``` javascript
function createPerson(name){
  var localPerson=new Object();
  localPerson.name=name;
  return localPerson;
}
var globalPerson=createPerson("Nicholas");
//不使用的时候 解除引用
globalPerson=null;
```
应该及时解除不再使用的:
* 全局对象
* 全局对象属性
* 循环引用变量的引用

