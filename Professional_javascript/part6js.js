/**
 * Created by anybody on 2016/9/7.
 */
"use strict";
var person = {};
Object.defineProperty(person, "name", {
    configuable: false,
    writeable: false,
    value: "Nicholas"
});
//person.name="Greg";
// console.log(person.name);
// delete person.name;
// console.log(person.name+"   name");

Object.defineProperty(person, "name", {
    configuable: true,
    writeable: false,
    value: "Nicholas"
});

var book = {
    _year: 2004,
    edition: 1,
    books: ["1", "2", "3"]
};

book.__defineGetter__("year", function () {
    return this._year;
});
book.__defineSetter__("year", function ( newValue ) {
    if (newValue > 2004) {
        this._year = newValue;
        this.edition += newValue - 2004;
    }
});
var des = Object.getOwnPropertyDescriptor(book, "_year");
var names = Object.getOwnPropertyNames(book);
// console.log(names);
// console.log(des);
// book.year=2005;
// console.log(book.year);
// console.log(book.edition);

book.prototype = {
    constructor: book,
    value: 120,
    count: 10,
    clzz: "Technology",
    sayName: function () {
        console.log(this.clzz);
    }
};
Object.defineProperty(book.prototype, "constructor", {
    enumerable: false,
    value: book
});
var keys = Object.keys(book.prototype);
// console.log(keys);
//
// console.log(book.constructor === book);
// console.log(book.prototype.clzz);

book.prototype.sayName();

function Book() {

}

var b1 = new Book();

Book.prototype = {
    constructor: Book,
    name: "die or live"
};
var b2 = new Book();
// console.log(b1.constructor==Book);
// console.log(b1.name+"____"+b2.name);

function superType( name ) {
    this.property = true;
    this.name = name;
    this.colors = ["black", "blue", "red"];
}
superType.prototype.getSupProperty = function () {
    return this.property;
};
superType.prototype.getColors = function () {
    return this.colors;
};
function subType() {
    superType.apply(this, arguments);
    this.subproperty = false;
}
subType.prototype = new superType();
subType.prototype.getSubProperty = function () {
    return this.subproperty;
};
subType.prototype.getName = function () {
    return this.name;
};
var st = new subType();
st.getColors().push("green");
var st2 = new subType("Greg");
st2.getColors().push("yellow");
// console.log(st2.getName() +"   " +st.getColors() +"          "+ st2.getColors());
// console.log(st.getSubProperty()+"____"+st.getSupProperty());

var an_book = Object.create(book);
an_book.edition = "孙悟空";
an_book.books.push("4");
var ano_book = Object.create(book);
console.log(an_book.books + "______" + ano_book.books);