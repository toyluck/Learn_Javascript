/**
 * Created by anybody on 2016/9/12.
 */

var div=document.querySelector("#div");

var appid=div.dataset.appid;
div.dataset.appid="appid12345";
appid="12345appid";
console.log(appid+"___ " +div.dataset.appid+"   " +div.dataset.myname);
// div.outerHTML="Nothing here";
// div.querySelector("p").outerHTML="nothing";

document.querySelector("li").insertAdjacentHTML("" +
    "beforebegin","<li>0. :</li>");
document.querySelector("li").insertAdjacentHTML("" +
    "afterend","<li>4. :</li>");
document.querySelector("#div2").scrollIntoView();