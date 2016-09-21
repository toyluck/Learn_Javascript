/**
 * Created by anybody on 2016/9/20.
 */

var http=require("http");
var fs= require("fs");
// 数据压缩
// var oppressor=require("oppressor");
var server=http.createServer(function ( req, res ) {
    var stream=fs.createReadStream(__dirname+"/data");
    // stream.pipe(oppressor(req)).pipe(res);
    stream.pipe(res);
});

server.listen(8000);