/**
 *
 * Created by anybody on 2016/9/14.
 */
EventUtls.addHandler(window, "load", function ( event ) {
    var iframe = document.querySelector("#i_frame");
    iframe.contentWindow.postMessage("this is a secret","http://localhost:63342");

});
EventUtls.addHandler(window,"message",function ( event ) {
    if (event.origin=="http://localhost:63342"){
        console.log("received : " +event.data);
    }
});
var a=document.querySelector("#t_a");
EventUtls.addHandler("click",function (event) {
   history.pushState("clicked_a","justclick","click/a");
});
EventUtls.addHandler(window,"popstate",function (event) {
   console.log("something is happen"+event.state);
});
