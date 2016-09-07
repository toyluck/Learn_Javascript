Title         : 第三章记录
Author        : Hyc
Logo          : True

[TITLE]

## 区分大小写
一切都区分大小写

## 严格模式
使用`use strict` 来开启
：在函数内部的上方包含这条编译指示，也可以制定函数在严格模式下执行
```javascript
  function test(){
    'use strict';
    //
  }
  ```
  
## 浮点数值
### 浮点数值的最高精度是17位小数，但是算术计算时其精度远不如整数，因此**永远不要测试某个特定的浮点数值**
``` javascript
0.1+0.2=0.30000000000004;
```
这个小误差导致无法测试特定的浮点数值

### 数值范 
超出时根据正负值 转化为 +/- Infinity

### NaN
* isNan() 会帮我们确定该这个参数"不是数值"
  ： 对象也可以作为参数，此时会首先调用对象的 **valueOf**方法，确定该方法返回的值是否剋转换为数值
* NaN !== NaN

### 数值转换 Number（）；
* undefined -> NaN

* 更倾向与使用parseInt（） 方法，非数值返回NaN
  ：指定基数 parseInt(str,2||10||16)

## 参数
arguments 与 命名参数一起使用,arguments的值永远与对应命名参数的值保持同步
``` javascript
function hello(name1,name2) {
  return "world";
}
```
## 没有重载

如果在ECMAScript 中定义了两个名字相同的函数,后定义的函数起作用