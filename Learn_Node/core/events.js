/**
 * Created by anybody on 2016/9/20.
 */

const Event=require("events");

const myEmitter=new Event.EventEmitter();

myEmitter.on("event",function(){
    var arg0=arguments[0];
    console.log("event received " + arg0);
});

/**
 * 只接受一次事件传递
 */
myEmitter.once("event",function () {
    console.log("once received  " +arguments.length);
});
myEmitter.emit("event",1);
myEmitter.emit("event",1);
