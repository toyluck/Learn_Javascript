/**
 * Created by anybody on 2016/9/21.
 */

var http=require("http");
var fs=require("fs");

http.createServer(function ( req, res ) {
    // res.writeHead(200,{"Content-Type":"text/plain"});
    var readStream=fs.createReadStream(__dirname+"/fileserver.js");
    readStream.pipe(res);

}).listen(8888);