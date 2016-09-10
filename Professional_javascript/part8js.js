/**
 * Created by anybody on 2016/9/9.
 */

var t_frame = top.frames[0];
console.log("__" + t_frame.name);
// location.assign("http://hoopchina.com");
window.onload = function () {

    var domain = document.domain;
    // console.log(domain);
    domain = "after";
    // console.log(domain);
};

var r_frame = document.getElementsByClassName("right_frame");
r_frame.color = "red";
if (r_frame == null) {
    console.log(r_frame + " is null");
} else {
    r_frame[0].count = 12;
    r_frame[0].setAttribute("I_color", "blue");
    console.log(r_frame);
    var a_color = r_frame[0].getAttribute("i_color");
    a_color = r_frame[0].getAttribute("count");
    console.log(r_frame[0]);
}

var s_right=document.querySelector(".right_frame");
s_right=document.querySelector("#l_frame");
console.log(s_right + document.body.childElementCount+"______" + document.body.childNodes.length);