/**
 * Created by anybody on 2016/9/24.
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
        if (element.addEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    }
};

var ElementUtils = {
    getFirstElement: function ( tag ) {
        return document.querySelector(tag);
    }
    , createElement: function ( type, innerHtml ) {
        const element = document.createElement(type);
        element.innerHTML = innerHtml;
        // console.log(element);
        return element;
    }
};