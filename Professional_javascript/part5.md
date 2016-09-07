Title         : 第五章引用类型学习记录
Author        : Hyc
Logo          : True

[TITLE]

> 引用类型是一种数据结构,用于将数据和功能组织在一起.常被称为**类**,但ECMAScript不具备传统面向对象语言支持的类和接口等基本结构.

# Object类型
创建事例方式:
* 直接使用new 关键字 -> new Object();
* 对象字面量表示 -> var person={};
* 方括号表示法来访问对象的属性,这样可以通过**变量**来访问属性,这样属性名中可以 包含关键字或者保留字,乃至会导致语法错误的字符
: 
``` javascript
var propertyName="name";
alert(person[propertyName]);//
propertyName="first name";
```

# Array 类型
* 使用Array构造函数时可以省略 new 操作符
: `var colors=Array(3)`

* 创建数组字面量时,不要以**,**结尾,容易造成浏览器之间构造的不同
: `var values=[1,2,]`;//NO!

* 数组的length属性不是只读的. 控制length导致数组未赋值的位置被 **undefined**所代替;

## 检测数组
ECMAScript中新增Array.isArray()方法,其他请参考 <The good parts>笔记;

## 迭代方法

* every()和some()  相当于 用来判断是否满足特定条件的数组的与或运算;

## 缩小方法
* reduce()和reduceRight() 都会迭代数组的所有项,构建一个最终返回的值.

# Date
Date的方法返回值因浏览器而异.

# RegExp

## 构造函数属性
具体属性字段查阅MDN.这些属性适用于作用域中的所有正则表达式,并且基于所执行的最近一次正则表达式操作而变化.


# Function类型
> 函数实际上是**对象**.每个函数都是Function类型的实例,都与其他引用类型一样具有属性和方法.

## 没有重载
``` javascript
function hello() {
  return "world";
}
function hello(){
  return "hello world";
}
```
相当于
``` javascript
var hello=function () {
  return "world";
};
hello=function(){
  return "hello world";
}
```

## 函数声明与函数表达式
声明一个hello 函数
``` javascript
function hello() {
  return "world";
}
```
函数表达式
``` javascript
var hello=function () {
  return "world";
}
```
区别在于 解析器会将函数声明提升并添加到执行环境中,并使其在执行任何代码前可以访问.
而函数表达式,则必须等到解析器运行到它所在的代码航才会真正被执行.

## 函数内部属性
> 在函数内部,有两个特殊的对象 : arguments 和 this;

### arguments
有一个 **callee**属性,该属性是一个指针,指向拥有这个arguments 对象的函数;
``` javascript
function factorial(num){
  if(num<=1)return 1;
  return num*arguments.callee(num-1);
}
```

### this
引用的是函数 赖以执行的环境对象.
当全局作用与中调用函数时,this对象引用的就是window;

## 函数属性和方法
> prototype 是ECMAScript 核心定义的属性. 所有引用类型prototype都是保存它们所有实例方法的真正所在.

* apply 和call 都是将当前函数的this对象的值设置为特定的.区别在于call需要将传递的函数的参数逐个列举出来.

* bind(). 这个方法会创建一个函数的实例,其this值会被绑定到传给bind()函数的值

## 基本包装类型
> Boolean Number String
引用类型和基本包装类型的主要区别就是对象的生存期.
* 引用类型在执行流离开当前作用域之前都保存在内存中
* 自动创建的基本包装类型的对象,只存在于一行代码的执行瞬间,然后立即被销毁.
