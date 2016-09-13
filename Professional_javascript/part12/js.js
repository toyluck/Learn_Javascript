/**
 * Created by anybody on 2016/9/12.
 */
var sheets=document.querySelector("#div").styleSheets;
console.log("_________"+sheets);

var sheet=document.styleSheets[0];
var rules=sheet.cssRules||sheet.rules;
var rule=rules[0];
// console.log(rule.style.cssText);
// console.log("sheet = " + sheet.cssRules );

var div=document.querySelector("#div");
var c_w=div.clientWidth;
var c_h=div.clientHeight;

// console.log("c_w" +c_w +"____ c_h = "+c_h);

var ul=document.body;
var filterLi=function filterLi( node ) {
    return node.tagName.toLowerCase()=="li"?
        NodeFilter.FILTER_ACCEPT:NodeFilter.FIlter_SKIP;
}
var iterator=document.createNodeIterator(ul,NodeFilter.SHOW_ELEMENT,filterLi,false);

var node=iterator.nextNode();
while (node!=null){
    // console.log("node.tagName : " +node.tagName +"    node = " +node.innerHTML);
    node=iterator.nextNode();
}

var range1=document.createRange(),range2=document.createRange();


