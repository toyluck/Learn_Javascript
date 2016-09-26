/**
 * Created by hyc on 2016/9/26.
 */

EventUtls.addHandler(window, "load", function () {
    var in_line = document.querySelector(".in_line");

    EventUtls.addHandler(in_line, "click", clickButton);
});

/**
 * 初始化队列
 */
var initQueue = {
    queue: [],
    leftIn: function (number) {
        this.queue.unshift(number);
        console.log(this.queue + "  this = " + this);
        showInputs();
    },
    leftOut: function () {
        this.queue.splice(this.queue.shift(), 1);
        showInputs();
    },
    rightOut: function () {
        this.queue.splice(this.queue.pop(), 1);
        showInputs();
    },
    rightIn: function (number) {
        this.queue.push(number);
        showInputs();
    }
};
var input_number = document.querySelector("#input_number");

function clickButton(event) {
    var value = input_number.value;

    var target = event.target;

    switch (target.id) {
        case "btn_left_in":
            if (!value)break;
            input_number.value = "";
            return initQueue.leftIn(value);

        case "btn_right_in":
            if (!value)break;
            input_number.value = "";
            return initQueue.rightIn(value);

        case "btn_left_out":
            return initQueue.leftOut();

        case "btn_right_out":
            return initQueue.rightOut();

    }
}

var div_show_numbers = document.querySelector("#div_show_numbers");
function showInputs() {
    div_show_numbers.innerHTML = "";
    var i;
    var queue = initQueue.queue;
    var doc = document;
    var innerHtml = '';
    //todo  第一个 div 的class 没有效果
    for (i = 0; i < queue.length; i++) {
        var span = doc.createElement("div");
        span.innerHTML = queue[i];
        span.className = "show_rec";
        span.style.height = queue[i];
        innerHtml += '<div class="show_rec" style="height:' + queue[i] + 'px;' +
            ' left:' + (i + 1) * (20 + 1) + 'px"></div>';
        // EventUtls.addHandler(span, "click", function (position) {
        //     var that = this;
        //     return function (event) {
        //         var target = event.target;
        //         // console.log(that + "____" + target + "    _   " + position);
        //         that.initQueue.queue.splice(position, 1);
        //         target.parentNode.removeChild(target);
        //     }
        // }(i));
        // div_show_numbers.appendChild(span);
    }
    div_show_numbers.innerHTML = innerHtml;
}