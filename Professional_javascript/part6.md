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



