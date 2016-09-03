Title         : 数组
Author        : hyc
Logo          : True

[TITLE]

>   数组是一段线性分配的内存，通过整数去计算偏移并访问其中的元素。


## 数组字面量

> javascript允许数组包含任意混合类型的值

``` javascript
  //数组
var numbers=[
  'zero','one','two','three','four'
];
var numbers_object={
  '0':'zero','1':'one'...
}
```

## 长度
>javascript数组的length是没有上界的，如果使用大于length的下标来保存元素，那么length将增大来容纳新元素。 不会发生数组边界错误。

* length属性的值 是这个数组的最大整数属性名加上1。 **他不一定等于数组里的属性的个数**
* 设置更大的length 无需给数组分配更多的空间。
* 将length设小会导致所有下标大于等于新length的属性被删除

## 删除

`delete numbers[2]`
会在数组中 2 的位置留下空洞。 被**undefined**所代替

**splice**方法用来删除元素

## 枚举

* for in 无法保证属性的顺序
* 常规的 fori 循环

## 混淆的地方
> javascript本身对于 数组和对象的区别是混乱的。**typeof** 运算符报告数组的类型是‘object’，这没有什么意义

为了能够识别从不同窗口（window）或帧（frame）里构造的数组
``` javascript
 var is_array=function(value){
   return value&&typeof value==='object'&&typeof value.length==='number'
   
   &&typeof value.splice==='function'
   // 判断length属性是否是可枚举的。对于所有数组来说，将得到false
   &&!(value.propertyIsEnumerable('length'))
 }
```

## 方法

通过给 Array.prototype 扩充一个函数
``` javascript
Array.method('reduce',function(f,value)){
  var i;
  for(i=0;i<this.length;i++){
    value=f(this[i],value);
  }
  return value
}
``` 

因为字符串‘total’不是整数，所以给数组增加一个 total属性不会改变它的长度
``` javascript

data.total=function(){
  return this.reduce(add,0);
}
```

## 维度
> javascript的数组通常不会初始化，如果你用[]得到一个新数组，如果访问一个不存在的元素，将得到undefined
  
如果假设每个元素都从一个已知的值开始,则需要自己实现：

``` javascript
 Array.dim=function(dimension,initial){
   var a=[],i ;
   for(i=0;i<dimension;i++){
     a[i]=initial;
   }
   return a;
 }
```
### 多维数组
``` javascript
Array.matrix=function(m,n,initial){
  var a,i,j,mat=[];
  for(i=0;i<m;i++){
    a=[];
    for(j=0;j<n;j++){
      a[j]=initial;
      
    }
    mat[i]=a;
  }
}


```

  