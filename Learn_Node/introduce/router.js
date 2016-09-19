/**
 * Created by anybody on 2016/9/19.
 */

function route( handler, pathname ,response,req) {
    console.log("route a request for " + pathname);
    if (typeof handler[pathname] ==='function'){
      return   handler[pathname](response,req);
    }else{

        console.log("No request handler found for " +pathname);

        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
        response.end();
    }


}

exports.route = route;