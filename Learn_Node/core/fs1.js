/**
 * Created by anybody on 2016/9/19.
 */
const fs = require("fs");

/**
 * 删除文件,异步
 */
// fs.unlink("temp.vue",function(err){
//
//     if(err)throw {
//        message:err,
//        name:"错误"
//    }
//    console.log("delete temp");
// });
/**
 * 同步删除
 */
// fs.unlinkSync("temp",function ( err ) {
//     return;
//     console.log("this is not asunc");
// });

/**
 * 重命名
 */
fs.rename("temp2temp", "temp2temp", function ( err ) {
    if (err)throw err;
    fs.stat("temp2temp", function ( err, stats ) {
        if (err)throw err;
    });
});
/**
 *  当文件名改变时 触发
 */
fs.watch("weeee21",{encoding:'buffer'},function ( eventType, filename ) {
    if(filename){
        console.log(filename+"\n");
        console.log(eventType);

    }
});

/**
 * 回调获取该文件的状态
 */
fs.stat("weeee21",function(err,stats){
   console.log(stats.isFile()+"     ___");
});
