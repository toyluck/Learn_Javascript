var myArr=[];
console.log(myArr.length);

myArr[10000]=10000;
console.log(myArr.length);



(
     function foo(){
        var h_time;
        return function(time){
            h_time= "time = "+ time;
            return h_time;
        }
     }

    var foo=foo();
    foo("time");
)
