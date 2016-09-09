/**
 * Created by hyc on 2016/9/8.
 */
function Book() {

}
var b1 = new Book();
Book.prototype = {
    /* 要注意的是constructor 指向 */
    constructor: Book,
    name: "p_name",
    price: "p_price",
    count: "p_count",
    sayHi:function(){
        console.log(this.name+"_ "+this.price);
    }
};
var b2=new Book();
b2.sayHi();
//  重写了原型函数之后 就会切断现有原型和任何之前已经存在的对象实例之间的联系
b1.name = "book_1";
// b1.sayHi(); // toat a error
// 删除实例后 就会去 原型中找
// console.log(b1+"___ " +Object.getOwnPropertyNames(Book.prototype));
delete b1.name;
console.log(b1.constructor === Book);
//这样证明了 属于原型函数
// console.log(b1.hasOwnProperty("name")+"  __  "+("name" in b1)+"____"+hasPropertype(b1,"name"));

function hasPropertype(obj, name) {
    return (name in obj) && !obj.hasOwnProperty(name);
}
