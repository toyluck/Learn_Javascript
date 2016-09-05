Title         : 鸡肋
Author        : hyc
Logo          : True

[TITLE]

# 鸡肋

## ==
> javascript中的 == 运算符 在某些特例上违背了传递性
**永远使用 ===  和！ == ** 来代替
``` javascript
0=='' // true

false =='false' // false
false =='0'//true

'\t\r\n ' ==0; // true

```

## with 语句
**不使用**

## eval
> eval 函数传递一个字符串给javascript 编译器，并且执行其结果。

这会导致性能显著降低，因为它须运行编译器。

实际上 setTimeout 和 setInterval 函数，它们接受字符串参数或函数参数。当传递的是字符串参数时，会像eval那样去
处理。 字符串参数形式也应该被避免使用

## 位运算

javascript中，位运算不仅不是硬件处理，而且非常慢！

## function语句对比函数表达式
`function foo(){}`
相当于
`var foo = function foo(){};`

function 语句在解析时会发生被**提升**的情况。 
一个语句不能以一个函数表达式开头，因为官方假定以单词 function 开头的语句是一个 function 语句。
解决办法 就是把函数表达式括在一个圆括号之中。

```javascript
   (function(){
     var hidden_variable;
     // 这个函数可能对环境有一些影响，但是不会引入新的全局变量
   }();
```

## 类型的包装对象
不要使用 new Boolean 、 new Number
用 {} 和 [] 来代替 new Object 和 new Array;
  
## new
javascript 的new运算符创建一个继承与其运算数的原型的新对象，然后调用该运算数。
不去使用new；