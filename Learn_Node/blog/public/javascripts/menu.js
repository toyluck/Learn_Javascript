/**
 * Created by anybody on 2016/9/21.
 */

const ul=document.querySelector("ul");

EventUtil.addHandler(ul,"click",function ( event ) {
    console.log(event.target);
    console.log(event);
    // var value=event.value();
    console.log(  value);
    // event.href="/"+value.toString().toLocaleLowerCase();
});