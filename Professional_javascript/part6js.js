/**
 * Created by anybody on 2016/9/7.
 */
 "use strict";
var person={};
Object.defineProperty(person,"name",{
    configuable:false,
    writeable:false,
    value:"Nicholas"
});
//person.name="Greg";
// console.log(person.name);
// delete person.name;
// console.log(person.name+"   name");

Object.defineProperty(person,"name",{
    configuable:true,
    writeable:false,
    value:"Nicholas"
});

var book={
    _year:2004,
    edition:1
};

book.__defineGetter__("year",function(){
    return this._year;
});
book.__defineSetter__("year",function(newValue){
   if (newValue>2004){
       this._year=newValue;
       this.edition+=newValue-2004;
   }
});
var des=Object.getOwnPropertyDescriptor(book,"_year");
var names=Object.getOwnPropertyNames(book);
// console.log(names);
// console.log(des);
// book.year=2005;
// console.log(book.year);
// console.log(book.edition);

book.prototype={
    constructor:book,
    value:120,
    count:10,
    clzz:"Technology",
    sayName:function(){
        console.log(this.clzz);
    }
};
Object.defineProperty(book.prototype,"constructor",{
    enumerable:false,
    value:book
});
var keys=Object.keys(book.prototype);
console.log(keys);

console.log(book.constructor === book);
console.log(book.prototype.clzz);
 
book.prototype.sayName();