function fruits(){

}
Function.prototype.method=function(name,func){
   if(!this.prototype[name]){
        this.prototype[name]=func;
     }
     return this;

}

fruits.prototype ={
    color:"red",
    show:function(){
        console.log("color: =" +this.color);

    }
}

fruits.method("add_s",function(){
  return this.color+="---show";
});
var apple=new fruits;
//apple.show();

banana = {
  color2:"yellow",
  show : function(){
     console.log("newshow =" +this.color);
  }
}

//apple.add_s();
//apple.show();
//sapple.add_s.apply(banana);

//sbanana.show();
//banana.add_s();
//banana.show();
//apple.show.apply(banana);
//apple.show.apply();

/* 这样可以不使用new 声明字面量形式 */
var quo=function(status){
  return {
    get_status:function(){
        return status;
      }
    }
}
var myquo=quo("My Name");
console.log(myquo.get_status());

function count(){
  var arr=[];
  for(var i=1;i<=3;i++){
    arr.push(function(){
      return i*i;
    }())
   }
  return arr;
}

//console.log(count());
//console.log(count()[1]);
//console.log(count()[2]);

Function.method('curry',function(){
  var slice=Array.prototype.slice;
  // 应用数组的slice方法,产出拥有concat方法的常规数组
  var args=slice.apply(arguments);
  console.log(arguments);
  var that=this;
  return function(){
      console.log(args+"|"+arguments.length);
       return that.apply(null,args.concat(slice.apply(arguments)));
         }
       }
     );
  var curry=fruits.curry(1);
//  console.log(curry(2));

//斐波拉契数列

function fibo(n){
  if(n<2){
        return n;
   } return fibo(n-2)+fibo(n-1);
}

var memo_fibo=function (){
  var memos=[0,1];
  var fib=function (n){
    var result=memos[n];
    if(typeof result !=='number'){
          result=fib(n-1)+fib(n-2);
          memos.push(result);

    }
    return result;
  };
  return fib;
}();

// 函数式编程 wow!!
var memory_func= function(memo,func){
  var shell=function(n){
    var result=memo[n];
    if(typeof result !=='number'){

      result=func(shell,n);
      memo[n]=result;

     }
      return result;
    }
  return shell;
  };

for(var i=2;i<10;i++){
  //console.log(memo_fibo(i));
  var number=memory_func([0,1],function(shell,n){
    //console.log("n= "+ n);
    return shell(n-1)+shell(n-2);
   }
  );
  console.log(number(i));
  }
