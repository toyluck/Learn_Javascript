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
通过 **Object.getOwnPropertyDescriptor()**方法,可以获得要读取其描述符的属性名称 的特有属性.