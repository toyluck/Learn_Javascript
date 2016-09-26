/**
 * Created by hyc on 2016/9/26.
 */

/**
 点击"左侧入"，将input中输入的数字从左侧插入队列中；
 点击"右侧入"，将input中输入的数字从右侧插入队列中；
 点击"左侧出"，读取并删除队列左侧第一个元素，并弹窗显示元素中数值；
 点击"右侧出"，读取并删除队列又侧第一个元素，并弹窗显示元素中数值；
 点击队列中任何一个元素，则该元素会被从队列中删除
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

    input_number.value = "";
    var target = event.target;

    switch (target.id) {
        case "btn_left_in":
            if (!value)break;
            return initQueue.leftIn(value);

        case "btn_right_in":
            if (!value)break;
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
    for (i = 0; i < queue.length; i++) {
        var span = doc.createElement("span");
        span.innerHTML = queue[i];
        EventUtls.addHandler(span, "click", function (position) {
            var that = this;
            return function (event) {
                var target = event.target;
                // console.log(that + "____" + target + "    _   " + position);
                that.initQueue.queue.splice(position, 1);
                target.parentNode.removeChild(target);
            }
        }(i));
        div_show_numbers.appendChild(span);
    }
}