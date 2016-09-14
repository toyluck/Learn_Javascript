/**
 * Created by anybody on 2016/9/14.
 */

EventUtls.addHandler(window, "message", function ( event ) {
    if (event.origin == "http://localhost:63342") {
        console.log(event.data);

        event.source.postMessage("I know you secret","http://localhost:63342");

    }
});