/**
 * Created by anybody on 2016/9/20.
 */

const fs = require("fs");

function outdir( dirname, filefilter, callback ) {

    fs.readdir(dirname, function ( err, data ) {
        if (err) {
            callback(err, null);
            return;
        }
        var list = data.filter(function ( node ) {
            return node.endsWith(filefilter);
        })
        callback(err, list);
    });

}

exports.outdir = outdir;