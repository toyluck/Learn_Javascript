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
})
