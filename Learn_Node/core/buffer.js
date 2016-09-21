/**
 * Created by anybody on 2016/9/20.
 * Buffer 实际上有一层Array的方法实现
 */

const arr=[1,2,3];
var buf=Buffer.from(arr);
buf=Buffer.alloc(10,2);
buf=Buffer.from("nihao","utf8");
console.log(buf);

/**
 Buffer 可以用来 将 字符转化成相应的格式

 */
 buf = Buffer.from("yolo","ascii");
const buff=buf.toString("base64");
// console.log(buff);

const unbuf=Buffer.allocUnsafe(5);


unbuf.fill(0);

/**
 * 比较 Buffer.compare
 */
const buf1=Buffer.from('1234');
const buf2=Buffer.from("1235");
const arr2=[buf1,buf2];
console.log(arr2.sort(Buffer.compare));

