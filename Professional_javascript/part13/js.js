/**
 * Created by anybody on 2016/9/12.
 */

<<<<<<< HEAD
var btn = document.querySelector(".myclass");
btn.addEventListener("click", function () {
    alert("first actived");
}, false);

btn.addEventListener("click", function () {
    alert("second actived");
}, false);

btn.addEventListener("mouseenter", function ( event ) {
    console.log(event.clientX + "___" + event.clientY);
}, false);

btn.addEventListener("focusin", function ( event ) {
    console.log(event.clientX + "__focusin _" + event.clientY);
}, false);
btn.addEventListener("focusout", function ( event ) {
    console.log(event.clientX + "___" + event.clientY);
}, false);
document.addEventListener("mousewheel", function ( event ) {
    console.log(event.wheelDelta);
}, false);

document.querySelector("#btn_show_menu").addEventListener("contextmenu", function ( event ) {
    console.log("bbbb");
    event.preventDefault();//camcle default menu show
    var menu = document.querySelector("#myMenu");
    menu.style.left = event.clientX + "px";
    menu.style.top = event.clientY + "px";
    menu.style.visibility = "visible";
    console.log(menu);
}, false);

window.addEventListener("beforeunloaad", function ( event ) {
    event.returnValue = "nishuo shenme ?";
    return "sasdfa";
}, false);

(function () {
    var showCount = 0;
    console.log("showCount= " + showCount);
    EventUtls.addHandler(window, "pageCount", function () {
        showCount++;
        console.log("Show has been fired " + showCount);
    })
})();

EventUtls.addHandler(window, "load", function ( event ) {
    console.log("load finished");
    location.assign("http://www.baidu.com");
    var script = document.createElement("script");
    EventUtls.addHandler(script, "readystatechange", function ( event ) {
        event = EventUtls.getEvent(event);
        var target = EventUtls.getTarget(event);
        console.log(event + "  ____" + target);
        if (target.readyState == "loaded" || target.readyState == "complete") {
            EventUtls.removeHandler(target, "readystatechange", arguments.callee);
            console.log("Script Loaded");
        }
    });
    script.src = "test.js";
    document.body.appendChild(script);
});
// DOMContentLoaded
EventUtls.addHandler(document, "DOMContentLoaded", function ( event ) {
    console.log("content loaded   " + event.target + "  ")
});

EventUtls.addHandler(document, "click", function ( event ) {
    event = EventUtls.getEvent(event);
    var target = EventUtls.getTarget(event);
    switch (target.id){
        case "btn":
            console.log("document catch btn");
            break;
        case "btn_show_menu":
            alert("document catch btn_menu");
            break;
    }
});

var mock_event=document.createEvent("MouseEvents");
mock_event.initMouseEvent()
=======
document.body.addEventListener("click",function (event) {
    console.log(event.target+"___" +event.currentTarget+"____" +this);
},false);

document.querySelector("button").addEventListener("click",function (event) {
    console.log("button catch!!!");
    event.stopPropagation();
},false);
>>>>>>> 6e27439d8b1ac5b1b9bddec99c6371436ed18d26
