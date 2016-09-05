# Learn_Javascript
学习javascript 中及框架和 其他一些遇到的问题的学习记录

## 添加了 thegoodparts of javascript 
  1. javascript中数字没有浮点数之分，1===1.0，不会有溢出出现 ； isNaN(number) 用来检查是否是数字 
  2. 没有 character 而是以单字符的 形式出现，String 只有16位长度 是因为当时以Unicode-16为标准
  3.  检索时 检索时使用|| 来添加  默认值 'obj.item||('unknow')' ,  使用&& 来   规避undefined  的 的错误 (obj.item&&obj.item.item2)
  4.  更新： 当对象中没有该属性名时，则添加至对象中。 （item.newItem='newItem'）
  5. 枚举对象属性时,要获得特定属性 最好建立该属性名的数组,通过遍历该数组获取其在目标对象中的值
  6. delete 删除掉该属性后,如果原型链中还有该属性,则调用时浮现原型链中的属性
  7. 减少全局变量 -> 在应用中只创建唯一的全局变量,其他的全局变量都整理在该名称空间下
        ``` javascript
              var MyApp={}  
                MyApp.stooge={
                    "firstName":"Li",
                    "lastName":"Lei"
                  },
                MyApp.train={
                    station:{
                    "name":"shenzhen"
                    },
                    details:{
                    "time":"2016820",
                    "people":"huang y"
                    }
                }
        ```
## 函数
>  对象字面量 -> Object.prototype
>  函数对象   -> Function.prototype ->Object.prototype

### 闭包 
   函数被定义在其他函数中. 内部函数可以访问其自身和被嵌套在其中的那个函数的参数和变量.通过函数字面量创建的函数对象包含一个连接到外部上下文的连接.
### this
javascript 中存在四种调用模式
> 值得注意的是,JavaScript中不会对参数值进行类型检查,当实际参数>形式参数 超出的参数值将被忽略,实际参数<形式参数时 缺失的值会被替换成 undefined .**不会导致运行时错误**:

    1. 方法调用模式,  
  
      ``` javascript
      var myObj={
        value=0
        increment :function (inc) {
          this.value+=typeof inc ==='number'?inc:1;  
        }
      };
      myObj.increatement();//value==1
      myObj.increatement(2);//value==3
      ```
  
    2. 函数调用模式,当一个函数并非一个对象的属性时,它被当做一个函数来调用:
      `var sum = add(3,4)`// sum=7
       但此时该函数的内部函数的 this 绑定的并非外部函数的 this 变量,**不能共享该方法对对象的访问权**. # 待处理 不是很明白
       
       
      ``` javascript
      myObj.double=function(){
        var that=this;
        var helper = function(){
           that.value=add(that.value,that,value);
        };
        helper();
      };
      //以方法的形式调用double
      myObj.double();
      ```

    3. 构造器调用模式 
    > javscript 是一门基于原型继承的语言,可直接从其他对象继承属性.如果在一个函数前面带上new来调用,将会创建一个隐藏链接到该函数的prototype成员新对象,**this将会被绑定到那个新对象上**
       
  ``` javascript
    var Quo=function(string){
      this.status=string;
    }
    Quo.prototype.get_status=function(){
      return this.status;
    }
    var myQuo=new Quo("confused");
    myQuo.get_status();// "confused"
  ```

    4. apply调用模式
    > JavaScript是一门函数式的面向对象语言,所以函数**可以拥有方法**
    
        [关于 apply,call,bind 的妙用]
### 参数 arguments
> arguments并不是一个真正的数组,而是'like array',没有pop,push等方法
  
  arguments可以访问所有该函数被调用时传递给它的参数列表,包括多余参数.


### 异常
  
``` javascript
throw{
     name:"TypeError",
     message:"add needs numbers"
  };
  
  try{
  }catch(e){
      document.writeln(e.name +":" +e.message);
  }
```

### 给类型增加方法
* 当给 基本类型 添加方法时,即使对象实例已经被创建了,新的方法也会被立刻赋予到.
* 在类库混用时,确定基本类型没有该方法时才添加该方法
  
``` javascript
    Function.prototype.method=function(name,func){
      if(!this.prototype[name]){
        this.prototype[name]=func;
      }
      return this;
    }
```

### 递归
* 汉诺塔  todo: 学习递归的用法

### 作用域
> 函数中的参数和变量在函数外部是不可见的,在函数中的任何位置定义的变量在该函数中的任何地方都可见
``` javascript
  
function test() {
   var x=10;
   console.log(x +":" +y);
   var y=5;
}
test();// 10 : undifined 


```
实际上,JavaScript会将所有声明的变量置于函数顶部,所以此时 test()内部相当于
``` javascript
function test() {
   var x=10;
   var y;
   console.log(x +":" +y);
   y=5;
}
```
因此,我们在函数内部定义变量时,应该 **在函数内部首先声明所有变量**.
JavaScript默认有一个全局对象window,全局作用域的变量实际上被绑定到 **window**的一个属性上.

#### 局部作用域
* 由于JavaScript的变量作用域实际上是函数内部,在**for** 循环等语句块中是无法定义具有局部作用域的变量的
``` javascript
function foo() {
  for(var i =0; i<100;i++){
    
  }
  i+=100;//这里仍然可以引用变量
}
```

**ES6**中引入新的关键字 **let**,可以声明一个块级作用域的变量
``` javascript
 function foo(){
   var sum=0;
   for (let i =0;i<100;i++){
     sum+=i;
   }
   i+=1;//SyntaxError 此时i 已经不在作用域中
 }
```

#### 常量
> 由于**var**和**let**声明的是变量,通常使用大写的变量来表示 它是一个常量

`var PI=3.14`

**ES6**标准引入了新的关键字 **const**来定义常量,且 const和let 都具有块级作用域
 
``` javascript
const PI=3.14;
PI=3;// 某些浏览器不报错  但是无效果
PI;//3.14
```

### 闭包
> 携带状态的函数,它的状态可以对外完全隐藏


计算 x^y 可以使用闭包函数:
``` javascript
function make_pow(x) {
  return funtion(n){
  return Math.pow(n,x);// 目标数, 指数
  };
}
//此时返回的  Math.pow(n,2);
var pow2=make_pow(2);
var pow3=make_pow(3);
// Math.pow(5,2);
pow2(5);//25
pow3(7);//343
```

### 模块
> 一个定义了私有变量和函数的函数;利用闭包创建可以访问私有变量和函数的特权函数,最后返回这个特权函数

``` javascript
var serial_maker=function(){
  var prefix="";
  var seq=0;
  return {
    set_prefix:function(p){
      prefix=String(p);
    },
    set_seq:function(s){
      seq=s;
    },
    gensym:function(){
      var result=prefix+seq;
      seq+=1;
      return result;
    }
  }
}
var seqer=serial.marker();
seqer.set_prefix('q');
seqer.set_seq(1111);
var unique=seqer.gensym();
```

### 级联
> 让某些方法 返回this 而不是undefined ,链式结构方法

### 套用
> 允许我们将函数与传递给它的参数相结合去产生出一个新的函数

* 之前的 闭包函数的事例使用的就是套用.
 

## 继承



[关于 apply,call,bind 的妙用]: http://www.cnblogs.com/coco1s/p/4833199.html 
