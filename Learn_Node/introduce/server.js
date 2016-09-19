/**
 * Created by anybody on 2016/9/19.
 */


var http = require("http");
var url = require("url");
function start( route, handler ) {
    var onRequest = function ( request, response ) {
        var pathname = url.parse(request.url).pathname;

        console.log("node online ! request for " + pathname);
        var postData = "";
        // request.addListener("data", function ( postDataChunck ) {
        //     postData += postDataChunck;
        //     console.log("Received POST data chunck " + postDataChunck);
        // });
        // request.addListener("end", function () {
        //
        //     /* 将服务器"传递" 给内容 ->
        //      *  将response 对象 传递给请求处理程序*/
        //     route(handler, pathname, response, postData);
        //
        // });
            route(handler, pathname, response, request);

    };
    /**
     *
     */
    http.createServer(onRequest).listen(8888);
    console.log("node start!");
}
exports.start = start;
