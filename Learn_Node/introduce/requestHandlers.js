/**
 * Created by anybody on 2016/9/19.
 */

// 简单实用的非阻塞操作 exec
var exec = require("child_process").exec,
    fs = require("fs"),
    formidable=require("formidable");

/**
 * 模拟休眠
 * @param milliSeconds 毫秒值
 */
function sleep( milliSeconds ) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
}


function start( response ) {
    console.log("Request handler start was called");
    /**
     * Node 通过事件轮询(event loop) 来实现并行操作.
     * 将函数作为参数传递给其他需要花时间处理的函数.
     */
    var content = "empty";
    // exec("dir -lah", {timeout: 10000, maxBuffer: 10000 * 1024}, function ( error, stdout, stderr ) {
    //     content = stdout;
    //
    //     response.writeHead(200, {"Content-Type": "text/plain"});
    //     response.write(content);
    //     response.end();
    // });
    // sleep(10000);
    var body = '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" content="text/html; ' +
        'charset=UTF-8" />' +
        '</head>' +
        '<body>' +
        '<form action="/upload" method="post" enctype="multipart/form-data">' +
        ' <input type="file" name="upload">' +
        '<input type="submit" value="Upload file" />' +
        '</form>' +
        '</body>' +
        '</html>';
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();

}


function upload() {
    var response = arguments[0];
    var req = arguments[1];
    var form = new formidable.IncomingForm();
    form.parse(req, function ( error, fields, files ) {
        var path = files.upload.path;
        console.log(path +" ___________ " + path instanceof String);
        var name = "/Users/anybody/Pictures/" + "123"
            + ".jpg";
        fs.renameSync(path, name);
        response.file_name=name;
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("You've send a Image : <br/>");
        response.write("<img src='/show '/>")
        response.end();
    });
}

function show( response, req ) {
    console.log(response+" === response______");
    var path="/Users/anybody/Pictures/" + "123"
        + ".jpg";
    fs.readFile(path, "binary",
        function ( error, file ) {
            if (error) {
                response.writeHead(500, {"Content-Type": "text/plain"});
                response.write(error + "\n");
                response.end();
            } else {

                response.writeHead(200, {"Content-Type": "text/plain"});
                // response.write(response);
                response.write(file, "binary");
                response.end();
            }
        })
}

exports.start = start;
exports.upload = upload;
exports.show = show;