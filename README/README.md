# Learn_Javascript
学习javascript 中及框架和 其他一些遇到的问题的学习记录

## 对象
> 对象是属性的容器，属性名为任意字符串，属性值是除**undefined**值之外的任何值
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
 8. 对象字面量
一个对象字面量就是包围在一对花括号中的灵活多个‘名/值’对；
``` javascript
 var stooge={
   "first-name":"Jeremy",
   "last-name":"Lin"
 }
```

 9.  原型
> 通过对象字面量创建的对象都链接到 **Object.prototype**这个Javascript中标准的对象
 
  beget()方法创建一个使用原对象作为其原型的新对象
  ```javascript
    if(typeof Object.beget!=='function'){
       Object.beget=functio(o){
        var F=function(){};
        F.prototype=o;
        return new F();
       }
    }
  ```
  原型连接只有在检索值的时候才被用到。尝试去获取某个对象的某个属性值，如果该对象没有此属性名，那么javascript会依次沿着原型对象树中获取属性值
  ，直到Object.prototype，如果此时仍然没有则返回**undefined**。这个过程称为**委托**。
  ，原型关系是一种动态的关系，即改即得


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
* 在类库混用时,确定基本类型没有该方法时才添加他
  
``` javascript
    Function.prototype.method=function(name,func){
      if(!this.prototype[name]){
        this.prototype[name]=func;
      }
      return this;
    }
```



[关于 apply,call,bind 的妙用]: http://www.cnblogs.com/coco1s/p/4833199.html 
