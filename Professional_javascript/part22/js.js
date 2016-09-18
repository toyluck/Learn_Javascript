/**
 * Created by anybody on 2016/9/18.
 */

var btn = document.querySelector("#btn");
ClickHandler = {
    message: "something is happedn",
    clickHandler: function ( event ) {
        alert(this.message + "   " + event.type);
    }
};
EventUtls.addHandler(btn, "click", bind(ClickHandler.clickHandler, ClickHandler));

function bind( fn, context ) {
    return function () {
        return fn.apply(context, arguments);
    }
}

function curry( fn ) {
    // take the fn argument excep first argument.
    var args = Array.prototype.slice.call(arguments, 1);
    return function () {
        // take the newfunction argument
        var innerArgs = Array.prototype.slice.call(arguments);

        var finalArgs = args.concat(innerArgs);
        return fn.apply(this, finalArgs);
    }
}

function add( a, b ) {
    return a + b;
}
var curryAdd = curry(add, 5, 2);
// console.log(curryAdd(1));

//duplicate setinternal
setTimeout(function () {
    var div = document.querySelector("#div");
    if (!div.style.left){
        div.style.left=5+"px";
        console.log(div.style.left+"___________");
    }
    var left = parseInt(div.style.left) + 5;
    div.style.left = left + "px";
    console.log("left = " + left + "  + " + div.style.left);
    if (left < 200) {
        setTimeout(arguments.callee, 50);
    }

}, 50);