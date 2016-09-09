Title         : 第六章
Author        : hyc
Logo          : True

[TITLE]

#理解对象

## 属性类型
> ECMAScript 中有两种属性 : 数据属性 和 访问器属性

### 数据属性:
* [Configurable] : 能够通过 delete 删除属性从而重新定义属性,能否修改属性的特性,能够把属性修改为访问器属性
* [Enumerable] : 能够通过 for-in 循环 返回属性
* [Writable] : 能否修改属性的值
* [Value] : 包含这个属性的数据值
要修改属性默认的特性,必须使用ECMAScript5 的 **Object.defineProperty()**方法
``` javascript
var Person={};
Object.defineProperty(Person,"name",{
  writable:false,
  value:"Nicholas"
});

Person.name="Greg";
Person.name;//"Nicholas"

```
把 Configurable 设置为false 后,就不能再对默认属性进行配置,否在在严格模式下会导致错误.

## 访问器属性
不包含数据值;它们包含一对getter和setter函数.在读取/写入访问器属性时,会调用对应的函数.
有如下4个特性:
* [Configurable]:同 数据属性
* [Enumerable]: 同 数据属性
* [Get]: 默认值为 undefined
* [Set]: 默认值为 undefined
``` javascript
Object.defineProperty(book,"property",{
  get:function(){
    return ...;
  },
  set:function(newValue){
    
    //...
    
  }
})
```
使用旧有方法:
``` javascript
book._defineGetter_("propertyName",function(){
  return ...;
});
book._defineSetter_("propertyName",function(newValue){
  //
});
```

  [这样就是提供类似于java中的set/get 方法,可以在修改属性时,可以根据需求进行其他操作]{ :red }.
 
## 读取属性的特性
通过 **Object.getOwnPropertyDescriptor()**方法,可以获得要读取其描述符的属性名称 的特有属性,非特有属性会返回undefined.

# 创建对象

## 构造函数模式
``` javascript
function Person(name,age,job){
  this.name=name;
  this.age=age;
  this.job=job;
  this.sayName=function(){
    alert(this.name);
  };
}
```
* 创建的对象既是Object的实例,也是Person的实例.使用 instanceof 可以验证.
* 不同实例上的同名函数是不相等的.

## 原型模式
> 创建的每一个函数都有一个 **prototype** 属性.这个属性是一个指针,指向一个 包含可以由特定类型的所有实例共享的属性和方法 的对象.

虽然所有实现中都无法访问到 [prototype],但可以通过[isPrototypeOf()]方法来确定对象之间是否存在这种关系.
EMACScript5 中增加了的 **Object.getPrototypeOf() **返回[Prototype]的值.

&bbox;当代码读取某个对象的某个属性时,会从实例到原型对象进行搜索.
&bbox;原型和实例中的属性及属性值是彼此独立的.
&bbox;hasOwnProperty()方法可以检测一个属性是存在于实例中,还是原型中(该方法继承自Object);
&bbox;in 操作符 配合hasOwnProperty()方法可以确定原型中是否有该属性.
&bbox;在使用for-in 循环时,返回的是对象实例和原型中 可访问 可枚举的属性.

要取得对象上所有可枚举的实例属性,可使用 Object.keys()方法.
``` javascript
obj.prototype={
  //...
}
```
使用上面的原型语法本质上重写了默认的 prototype 对象, constructor 属性不再指向 obj 函数了.此时 instanceof 操作符还能返回正确的结果,但通过 constructor 已经无法确定对象的类型了.

此时可使用下面:
``` javascript
obj.prototype={
  constructor:obj,
  //...
}
```
但这样重设 constructor 会导致 [Enumerable]特性被设置为 true,默认的为不可枚举的,此时可这样做:
``` javascript
Object.defineProperty(obj.prototype,"constructor",{
  enumerable:false,
  value:Person
})
```
### 原型的动态性
 在原型中查找值的过程试一次搜索,因此对原型对象的所做的任何修改都能够立即在 实例上反映出来.

&diams; **实例中的指针仅指向原型,而不指向构造函数**
假如实例在重写整个原型前被创建,此时原型中的所有对象不能被使用,否则会出错.

``` javascript
var amy=new Person();
Person.prototype={
  name:"amy"
};

amy.name//undefined 

```
### 原型对象的问题
> 原型模式 省略了为构造函数传递初始化参数这一环节,所有实例在默认情况下都将取得相同的属性值

当原型对象中包含引用类型的属性时,所有的实例都指向同一个引用类型,不能保证各个实例都有自己的全部属性. 


* 混成模式
实例有自己的一份实例属性的副本,共享对方法的引用.
``` javascript
function Person(name,age,job) {
  this.name=name;
  this.age=age;
  this.job=job;
  this.friends=[];
}

Person.prototype={
  constructor:Person,
  sayName:function(){
    console.log(this.name);
  }
}

```
* 动态原型模式
 避免原型方法的重定义.
** 不能使用对象字面量重写原型**
``` javascript
function Person(name,age,job) {
   this.name=name;
  this.age=age;
  this.job=job;
  if(typeof this.sayName != 'function'){
    Person.prototype.sayName=function(){
      //...
    }
  }
}
```
* 稳妥构造函数模式
> 没有公共属性,其中的方法也不引用this的对象
&bbox; 除了指定的方法,没有其他办法访问构造函数中的值.
``` javascript
function Person(name,age,job) {
   var o=new Object();
   // 定义私有变量和函数
   o.sayName=function(){
     console.log(name);
   };
   return o;
}
```

# 继承
> EMCAScript 只支持实现继承,主要是依靠原型链来实现的

## 原型链
> 构造函数都有一个原型对象(prototype),原型对象都包含一个指向构造函数的指针(constructor),实例都包含一个指向原型对象(prototype)的内部指针.

假如让原型对象等于另一个类型的实例,层层递进,就构成了原型链.

&ballotbox;实现的本质是重写原型对象

&ballotbox;默认的原型都是Object的实例

&ballotbox;确定原型和实例的关系-- instanceof  或者 isPrototypeOf()方法

&ballotbox;给原型添加方法的代码一定要放在替换原型的语句之后

&ballotbox;原型链继承时,不能使用对象字面量创建原型方法,这样相当于重写原型链

&ballotbox;使用时要考虑引用类型在原型中 同步更新到每一个实例的影响

&ballotbox; 创建子类型的实例时,不能向超类型的构造函数中传递参数

### 借用构造函数
在子类型的构造函数中,显式调用 超类型 apply()和call()方法,这样会在新的子类型对象上执行超类型函数中定义的所有对象初始化代码.

### 组合继承
> 使用原型链实现对原型属性和方法的继承,通过借用构造函数来实现对实例属性的继承.
``` javascript
function SuperObj(name) {
  this.name=name;
};
function ChildObj(name,age){
  SuperObj.call(name);  //第二次调用
  this.age=age;
};
ChildObj.prototype=new SuperObj();  // 调用一次 SuperObj
ChildObj.prototype.constructor=ChildObj;

```

### 原型式继承
只想让一个对象与另一个对象保持类似的情况下使用,要注意的是 引用类型的属性同样是共享的.
``` javascript
function object(obj){
  function f={};
  f.prototype=obj;
  return new f();
}
```

### 寄生组合式继承
> 不必为了指定子类型的原型而调用超类型的构造函数.
``` javascript
function inheritPrototype(subType,superType){
  var prototype=Object.create(superType.prototype);//创建对象
  prototype.constructor=subType;//增强对象
  subType.prototype=prototype;//指定对象
}
function SuperObj(name) {
  this.name=name;
};
function ChildObj(name,age){
  SuperObj.call(name);  //第一次调用
  this.age=age;
};
inheritPrototype(ChildObj,SuperObj);

```

