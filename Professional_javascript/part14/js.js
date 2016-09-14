/**
 * Created by anybody on 2016/9/14.
 */

(function () {
    function tabForward( event ) {

        event = EventUtls.getEvent(event);
        var target = EventUtls.getTarget(event);
        // 字数达到规定值
        if (target.value.length == target.maxLength) {
            var from = target.form;

            for (var i = 0; i < from.elements.length; i++) {
                if (target == from.elements[i]) {
                    var next = from.elements[i + 1];
                    if (next) {
                        next.focus();
                        return;
                    }
                }
            }
        }

    }

    var t1 = document.querySelector("#t1");
    var t2 = document.querySelector("#t2");
    var t3 = document.querySelector("#t3");
    EventUtls.addHandler(t1, "keyup", tabForward);
    EventUtls.addHandler(t2, "keyup", tabForward);
    EventUtls.addHandler(t3, "keyup", tabForward);

})();

EventUtls.addHandler(window,"load",function ( event ) {
   frames["richHtml"].document.designMode="on";
});