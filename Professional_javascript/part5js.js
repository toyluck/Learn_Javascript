/**
 * Created by anybody on 2016/9/7.
 */

var text="mom and dad and baby";
var pattern=/mom(and dad (and baby)?)?/gi;

var matcher=pattern.exec(text);

// console.log(matcher);
// console.log(RegExp.input);
// console.log(RegExp.leftContext);
// console.log(RegExp.rightContext);

function fctorial(num){
    if(num<=1)return 1;
    else {
        return num*arguments.callee(num-1);
    }
}
// console.log(fctorial(10));

var color="red";
var o ={
    color:"blue"
};

function sayColor(){
    console.log(this.color);
}
// sayColor();
// sayColor.apply(o);
// sayColor.bind(o)();

var num=12;
// console.log(num.toString(2));
// console.log(num.toString(16));
// console.log(num.toFixed(2));
var text="cat,bat,sat , fat";
var reg=/at/gi;
text=text.replace(reg,"cont");
console.log(text);