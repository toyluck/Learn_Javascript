/**
 * Created by anybody on 2016/9/12.
 */

document.body.addEventListener("click",function (event) {
    console.log(event.target+"___" +event.currentTarget+"____" +this);
},false);

document.querySelector("button").addEventListener("click",function (event) {
    console.log("button catch!!!");
    event.stopPropagation();
},false);