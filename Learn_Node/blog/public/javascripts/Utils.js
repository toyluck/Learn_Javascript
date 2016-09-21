/**
 * Created by anybody on 2016/9/21.
 */

var EventUtil = {
    addHandler: function ( target, event, handler ) {
        if (target.addEventListener){
            target.addEventListener(event, handler, false);
        } else if (target.attachEvent) {
            target.attachEvent("on" + event, handler);
        } else {
            target["on" + event] = handler;
        }
    },removeHandler: function ( target, event, handler ) {
        if (target.removeEventListener) {
            target.removeEventListener(event, handler, false);
        } else if (target.detachEvent) {
            target.detachEvent("on" + event, handler);
        } else {
            target["on" + event] = null;
        }
    }
};