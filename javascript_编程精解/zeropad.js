/**
 * Created by hyc on 2016/9/5.
 */
function zeroPad(number, width) {
    var num = Math.floor(number);
    var str;
    if (num.length < width) {
        str = "0" + num;
    }
    return num;
}

/**
 * 从数字 1 开始，重复执行加5或者乘3这个步骤，编写函数使其能够找出恰当的加法和乘法运算序列，产生指定的数字
 * @param goal
 * @returns {*}
 */
function findSequence(goal) {
    function find(start, history) {
        if (start == goal) {
            return history;
        }
        if (start > goal) {
            console.log("start : " + start);
            return null;
        }
        /*这里是关键，每一次其实都会递归去寻找可能性*/
        return find(start + 5, "(" + history + "+5)") ||
            find(start * 3, "(" + history + "*3)");
    }

    return find(1, "1");
}


var text = findSequence(13);
// console.log(text);

function testArgu() {
    var arr=Array.prototype.slice.apply(arguments);
    console.log(arr.shift());
}

testArgu("1",2,3);

function forEach( array, func ) {
    for (var i=0;i<array.length;i++){
        func(array[i]);
    }
}

function reduce(combine,base,array){
    forEach(array,function(number){
       base=combine(base,number);
    });
    return base;
}


function countZero( array ) {
    function counter( total, element ) {
        return total+(element===0?1:0);
    }

    //函数编程，函数编程，函数编程
    return reduce(counter,0,array);
}
console.log(countZero([0,1,2,0,2,0]));