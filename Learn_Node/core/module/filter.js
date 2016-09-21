/**
 * Created by anybody on 2016/9/20.
 */

const outdir = require("./ourdir");

outdir.outdir(__dirname, "r.js", function ( err, data ) {
    if (err) {

    } else {
        console.log(data);
    }
});