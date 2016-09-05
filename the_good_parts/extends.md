# 继承
> javascript是一门弱类型基于原型语言，意味着javascript不需要类型转换，对象直接从其他对象继承。

## 伪类
> 当一个函数对象被创建时，Function构造器`this.prototype={constructor:this}`
> javascript语言没有提供方法去确定哪个函数是打算用来作构造器的，每个函数都会得到一个prototype对象

```javascript
   function(){
     console.log("nizainali?")
   }
```

## 对象说明符
`var myObject=maker(f,l,m,c,s)`

==》

``` javascript
 var myObject=maker({
   first:f,
   last:l,
   state:s,
   city:c
 });
```

## 原型
> 基于原型的继承，一个新对象可以继承一个旧对象的属性。

字面量构造对象：
``` javascript
 var myMammal={
   name:"herb the mammal",
   get_name:function(){
     return this.name;
   },
   says:function(){
     return this.says||"just saying";
   }
 }
```
通过Object.beget方法构造更多的实例
``` javascript
 var myCat=Object.beget(myMammal);
 myCat.name="CatWood";
 myCat.get_name=function(){
   return this.says+""+this.name;
 }
```

## 函数化
> 目前的继承模式无法保护隐私。对象的所有属性都是可见的。
> 更好的选择： 模块模式

``` javascript
 var mammal=function(spec){
   var that={};
   that.get_name=function(){
     return spec.name;
   };
   that.says=function(){
     return spec.says||"not saying anything";
   }
   return that;
 }
 
 var myMammal=mammal({name:"Hello"});
 
 var cat=function(spec){
   spec.says=spec.says||"meow";
   // 这里让mammal去做对象创建中的大部分工作
   var that=mammal(spec);
   that.get_name=function(){
     return spec.says +" " +spec.name+"  " +that.says() ;
   }
   return that;
   
 }
 var myCat=cat({name:"Catter"});
 console.log(myCat.get_name());
 
 // 构造一个处理父类方法的方法
 Function.prototype.method=function(name,func){
   if(! this.prototype[name]){
     this.prototype=func;
   }
   return this;
 }
 
 Object.method('superior',function(name){
   var that=this;
   var method=that[name];
   return function(){
     return method.apply(that,arguments);
   }
 });
 vat coolcat=function(spec){
   var that=cat(spec);
   var super_get_name=that.superior('get_name');
   that.get_name=function(){
     return 'like' +super_get_name + " son";
   }
   return that;
 };
 
```

如果一个对象的所有状态都是私有的，该对象就是一个‘防伪’对象。
用函数化的样式创建一个对象，该对象的所有方法都不使用**this**或 **that**，该对象就是 **持久性的**

## 部件 【parts】
todo



