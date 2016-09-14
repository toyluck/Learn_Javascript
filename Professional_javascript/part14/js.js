/**
 * Created by hyc on 2016/9/13.
 */

var form = document.querySelector("#myForm");


EventUtls.addHandler(window, "load", function (event) {

    EventUtls.addHandler(form, "submit", function (event) {
        console.log("submit!");
        event = EventUtls.getEvent(event);
        console.log(form.elements);
        var elements = form.elements;

        var colors = elements["color"];
        console.log(colors);
        EventUtls.preventDefault(event);
    });

});

var t_i1 = document.querySelector("#t_in1");
var t_i2 = document.querySelector("#t_in2");
var t_area=document.querySelector("#tare");
EventUtls.addHandler(t_i1, "blur", function (event) {
    event = EventUtls.getEvent(event);
    var target = EventUtls.getTarget(event);
    console.log(event + "  " + target);
});

EventUtls.addHandler(t_i2, "blur", function (event) {
    event = EventUtls.getEvent(event);
    var target = EventUtls.getTarget(event);
    console.log(event + "  " + target);
});


EventUtls.addHandler(t_area, "change", function (event) {
    event = EventUtls.getEvent(event);
    var target = EventUtls.getTarget(event);
    console.log(event + "  " + target);
});

EventUtls.addHandler(t_area, "blur", function (event) {
    event = EventUtls.getEvent(event);
    var target = EventUtls.getTarget(event);
    console.log(event + "  " + target);
});
