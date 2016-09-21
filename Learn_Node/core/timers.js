/**
 * Created by anybody on 2016/9/20.
 * Timers : 全局Api,不需要通过require 语句导入模块
 *
 */
function printStuff() {

    console.log(__filename);
    console.log(__dirname);
    setTimeout(printStuff, 1000);
}

// setTimeout(printStuff,1000);

setInterval(printStuff,1000);