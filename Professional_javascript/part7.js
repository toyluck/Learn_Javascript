/**
 *
 * Created by anybody on 2016/9/9.
 */
// 指定返回的是函数数组
function createFunctions() {
    var result = [];
    for (var i = 0; i < 10; i++) {
        result[i] = function ( k ) {
            return function () {
                return k;
            }
        }(i);
    }
    return result;
}

// console.log(createFunctions()[3]());

name = "My window";

var obj =function ()  {

    var na="My Object";
var that=this;
    return function getNameFunc() {
        // var that=this;
        var tha=that;
        return function () {
            return tha.name + "__________"+this.name;
        };
    }
};
// 通过
var o1=new obj();
// console.log(o1.na+"       "+o1().apply(obj()));

var Object={
    name:"Object",
    getName:function(){
        return this.name;
    }
};

var n=(Object.getName=Object.getName)();
console.log(n+"____"+Object.getName());
