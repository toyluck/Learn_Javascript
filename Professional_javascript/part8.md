Title         : 第八章 BOM
Author        : Hyc
Logo          : True

[TITLE]

# window对象

> 既是通过JavaScript访问浏览器窗口的一个接口,也是ECMAScript规定的Global对象.

## 全局作用域
直接在window对象上的定义的全局变量可以使用 delete 进行删除.但是 全局变量不可以
``` javascript
age=29;
window.color="red";

delete window.age;// 在IE<9 下抛出错误,其他的浏览器返回false
delete window.color;//在IE<9 下抛出错误,其他的浏览器返回true

```
使用var 语句添加的window属性有一个[Configurable]的特性,被设置为false,因此不能被删除.

尝试访问未申明的变量会抛出错误,但是通过查询window对象,可以知道某个可能未申明的变量是否存在.

``` javascript
var value=window.oldValue;// 这里不会抛出错误,因为这是一次属性查询
```

## 窗口关系及框架(frame)
> 如果页面中包含框架,则每个框架都有自己的window对象,并保存在frames集合中.每个window对象都有一个name属性,其中包含框架的名称.

