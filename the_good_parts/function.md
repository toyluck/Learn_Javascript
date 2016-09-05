Title         : 方法
Author        : hyc
Logo          : True

[TITLE]

## Array

### array.sort
  sort方法并不能正确的给一组数字排序，因为默认的所有要排序的元素都是字符串。所以需要自己来替换默认的比较函数
  
  
``` javascript
 arr.sort(function(a,b)){
   return a-b;
 }
 
```

   构造比较函数的函数
   
   
``` javascript
var by=function(name){
  return function(o,p){
    var a,b;
    if(typeof o ==='object'&&typeof p ==="object" &&o&&p){
      a=o[name];
      b=p[name];
      if(a===b){
        return  0;
      }
      
      if(typeof a=== typeof b ){
        return a<b?-1:1;
      }
      return typeof a < typeof b :-1:1;
    }else{
      throw{
        name:"Error",
        message:"Expected an object when sorting by " +name;
      }
    }
  }
}
```
如果要基于多个键值进行排序，接受第二个参数
``` javascript
var by=function(name，minor){
  return function(o,p){
    var a,b;
    if(typeof o ==='object'&&typeof p ==="object" &&o&&p){
      a=o[name];
      b=p[name];
      if(a===b){
        return typeof minor ==='function'?minor(o,p) :0;
      }
      
      if(typeof a=== typeof b ){
        return a<b?-1:1;
      }
      return typeof a < typeof b :-1:1;
    }else{
      throw{
        name:"Error",
        message:"Expected an object when sorting by " +name;
      }
    }
  }
}
```


