/**
 * Created by anybody on 2016/9/13.
 */

var EventUtls = {
    addHandler: function ( element, type, handler ) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    },
    removeHandler: function ( element, type, handler ) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    },
    getEvent: function ( event ) {
        return event || window.event;
    },
    getTarget: function ( event ) {
        // console.log("event.target== " + event.target +" or " + event.srcElement);
        return event.target? event.target:event.srcElement;
    },
    preventDefault: function ( event ) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.defaultValue = false;
        }
    },
    stopPropagation: function ( event ) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelable = true;
        }
    }
};