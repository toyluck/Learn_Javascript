/**
 * Created by anybody on 2016/9/20.
 */

const util=require("util");

const  debuglog=util.debuglog("foo");

debuglog("something \n");
debuglog("something is happen -> [%d] [%s]",123,"234");

var content=util.format("%s -> %s","nihao","sb","zz");
// console.log(content);

var People={
    name:"tyloo",
    age:18,
    sex:"man"
};
/**
 * util.inspect  检查 对象
 */
console.log(util.inspect(People,{showHidden:true,depth:null,colors:"red",showProxy:true}));

People[util.inspect.custom]=function(depth){
    return '{${this.name}}';
};

const arr=Array(101);
console.log(arr);
util.inspect.defaultOptions.maxArrayLength=null;
console.log(arr);