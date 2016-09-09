Title         : 第七章函数表达式
Author        : hyc
Logo          : True

[TITLE]

 定义函数的方式:
 * 函数声明
 
``` javascript
function hello(arg0,arg1,arg2) {
  //函数体
}
```
* 函数表达式
``` javascript
var hello=function hello() {
  //函数体
}
```

&bbox;区别在于前者指定了一个非标准的 name 属性,被可以 **函数声明提升**. 后者属于**匿名函数**,name属性为空字符串.

# 递归

arguments.calle 是一个指向正在执行的函数的指针.但是在严格模式下,不能通过 脚本访问到.
``` javascript
var factorial=(function f(num){
  if(num<=1)return 1;
  return num*f(num-1);
});
```
以上创建了一个名为f()的命名函数表达式,将其赋值给变量factorial. 即便把函数赋值给了另一个变量,函数的名字f 仍然有效.在严格模式和非严格模式下都行得通.

# 闭包
> 有权访问另一个函数作用域中的变量的函数.常见方式就是在一个函数内部创建另一个函数.

匿名函数在**销毁前**所持有的作用域链引用外部函数的活动对象,即便外部函数执行完毕后,其作用域链会被销毁,但该活动对象不会被销毁.

## 闭包与变量
> 闭包只能缺德包含函数中任何变量的最后一个值.


todo : 修改为返回值确定的函数数组
``` javascript
function createFunctions(){
  var result=[];
  for(var i=0;i<10;i++){
    result[i]=function(){
      return i;
    }
  }
  
  return result;
}
```
## 关于this对象
> 匿名函数的执行环境具有全局性.
**每个函数在被调用时,其活动对象都会自动取得两个特殊变量: this 和 arguments.内部函数在搜索这两个变量时,只会搜索到其活动对象为止,因此永远不可能直接访问外部函数中的这两个变量**

&bbox;this的值在某些情况下会意外的改变

``` javascript
name ="The Window";

var obj={
  name:"The object",
  getName:function(){
    return this.name;
  }
};
// 执行了一条赋值语句,然后再调用赋值后的结果.因为赋值表达式的值是**函数本身**,所以this的值得不到维持,返回的是全局的 "The Window";
(obj.getName=obj.getName)();// "The Window"
```

## 内存泄漏
> IE9 中,假如闭包的作用域链中保存着一个HTML元素,就意味着该元素无法被销毁
``` javascript
function assignHandler() {
  var element=document.getElementById("someElement");
  element.onclick=functino(){
    alert(element.id);
  }
};
```
element元素事件处理程序创建的闭包又创建了一个循环引用.导致无法减少element的引用数.

``` javascript
function assignHandler() {
  var element=document.getElementById("someElement");
  var id=element.id;
  element.onclick=functino(){
    alert(id);
  };
  // 解除对DOM对象的引用
  element=null;
 
};
```
# 模仿块级作用域
函数中多次声明同一个变量,后续声明会执行声明中的变量初始化.

* 使用匿名函数可以用来模仿块级作用域并避免这个问题

``` javascript
(function(){
  //这里是块级作用域
})();
```
函数声明中 function后面不能跟圆括号.但函数表达式的后面可以跟圆括号.要将函数声明转换成函数表达式,为期加上一对圆括号即可.
无论在什么地方,只要临时需要一些变量,就可以使用私有作用域.
``` javascript
function outputNumbers(count){
  (function(){
    //...
  })();
  
}
```
因为没有指向匿名函数的引用.只要函数执行完毕,就可以立即销毁其作用域链了.


# 私有变量
> 任何在函数中定义的变量,都可以认为是私有变量,因为不能在函数的外部访问这些变量.
**特权方法**

```javascript
function MyObject(){
  var privateVariable=10;
  function privateFunction(){
    return false;
  }
  //特权方法
  this.publicMethod=function(){
    
  }
}
```

## 静态私有变量
> 通过在私有作用域中定义私有变量或函数,同样也可以创建特权方法.
``` javascript
(function(){
  var privateVariable=10;
  
  function privateFunction(){
    return false;
  };
  
  /**
   * 构造函数使用函数表达式,是因为函数声明只能创建**局部变量**
   * 同样的理由,没有在声明MyObject时使用var关键字.
   * **初始化未经声明的变量,总是会创建一个全局变量**.
   * 因此,MyObject就成了一个全局变量,能够在私有作用域之外被访问到.
   * 但是在严格模式下,给未经声明的变量赋值会**导致错误**.
   */
  MyObject=function(){
    
  };
  //特权方法
  MyObject.prototype.publicMethod=function(){
    
    //...
  };
  
})();
```
但是使用本方法特权方法都是建立在原型链之上,导致创建的实例调用的方法都会共享内部的属性.

## 模块模式
``` javascript
var singleton=function(){
  var privateVariable=10;
  function privateFunction(){
    return false;
  }
  return {
    publicProperty:true,
    publicMethod:function(){
      
    }
  };
}();
```
这个模块模式使用了一个返回对象的匿名函数.并将一个对象字面量作为函数的值返回,其中只包含可以公开的属性和方法.

## 增强的模块模式
> 适合单例**必须是某种类型的实例**,同时还必须添加某些属性或方法对其加以增强的情况.

``` javascript
var singleton=function(){
  var privateVariable=10;
  function privateFunction(){
    return false;
  }
  var obj=new CustomType();
  obj.publicProperty=true;
  obj.publicMethod=function(){
    //...
  };
  return obj;
}();
```
