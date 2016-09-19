/**
 * Created by anybody on 2016/9/19.
 */

var server = require("./server");
var router = require("./router");

var requestHandlers = require("./requestHandlers");
/**
 * 通过对象传递函数
 */
var handle = {};

handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;
server.start(router.route, handle);