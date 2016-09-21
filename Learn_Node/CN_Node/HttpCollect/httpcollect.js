/**
 * Created by anybody on 2016/9/20.
 */

const http = require("http");
const https = require("https");
const fs = require("fs");
const bl = require("bl");

// http.createServer(function ( req, res ) {
//     (getHtml(res));
// }).listen(8888);
// function getHtml( response ) {
//
//     const html = "";
//     http.get("http://www.imooc.com/course/list", function ( res ) {
//         res.on("data", function ( data ) {
//             var message = data.toString('utf8');
//             console.log(message);
//             fs.open("main.html", "wx", function () {
//                 response.writeHead(200, {'Content-Type': "text/html"});
//                 response.write(message);
//                 response.end();
//             })
//         });
//         res.on("end", function () {
//
//         })
//     }).on("error", function ( error ) {
//         console.error(error);
//     });
//
// }

var count = 0;
/**
 * be in order
 * @param urls
 */

function orderGet( urls ) {
    if (!(urls instanceof Array)) {
        throw "urls must be Array";
    } else if (urls.length == 0) {
        console.log("is Empty");
        return;
    }
    const shift = urls.shift();
    requess(shift, function ( isSucced ) {
        console.log(isSucced);
        if (isSucced) {
            urls = urls.splice(0);
        }
        orderGet(urls);
    });
}


function requess( urls, callback ) {
    http.get(urls, function ( res ) {
        res.pipe(bl(function ( err, data ) {
            if (err) {
                callback(false);
                return;
            }
            var t_data = data.toString("utf8");
            // console.log(t_data.length + "\n" + t_data +"\n");
            console.log(count++ + "--------------------------------------------------" + urls);
            callback(true);
        }))
    }).on("error", function ( error ) {
        console.log(error);
        callback(false);
    });
};
var urls = ["http://www.imooc.com/course/list?c=fe", "http://www.imooc.com/course/list?c=mobile", "http://www.imooc.com/course/list?c=be"];
urls.forEach(function ( node ) {
    // requess(node);
});
orderGet(urls);



