//给Object添加原型方法，返回以该对象为原型的新实例
if(typeof Object.beget!=='function'){
    Object.beget=function(n){
        var F=function(){};
        F.prototype=n;
        return new F();
    }
}
// 对象字面量构造对象
var myMammal={
    name:"original the Mammal",
    get_name:function(){
        return this.name;
    },
    says:function(){
        return this.saying||"I can't spoke!";
    }
}

var myCat=Object.beget(myMammal);
console.log(myCat.name);
myCat.name="new Cat";
console.log(myCat.says());

var o_mammal=function(spec){
    var that={};
    that.get_name=function(){
        return spec.name;
    },
    that.says=function(){
        return spec.says||"not saying";
    }
    return that;
}

var o_mymammel=o_mammal({name:"nowName"});
//console.log(o_mymammel.get_name());
//console.log(o_mammal.name +"__");

// ****************************************

var _mammal=function(spec){
    var that={};
    that.get_name=function(){
        return spec.name;
    };
    that.says=function(){
        return spec.says||"not saying anything";
    }
    return that;
}

var _myMammal=_mammal({name:"Hello"});

var _cat=function(spec){
    spec.says=spec.says||"%%%%";
    // 这里让mammal去做对象创建中的大部分工作
    var that=_mammal(spec);
    that.get_name=function(){
        return spec.says +" " +spec.name+"  " +that.says() ;
    }
    return that;

}

if(typeof Function.prototype.method!=='function'){
    Function.prototype.method=function(name,func){
        if(!this.prototype.name){
            this.prototype[name]=func;

        }
        return this;
    }
}
var _myCat=_cat({name:"Catter"});
//console.log(_myCat.get_name());
Object.method( 'superior',function(name){
    var that=this;
    var method=that[name];
    return function(){
        return method.apply(that,arguments);
    }();
});

var coolcat=function(spec){
    var that=_cat(spec);
    var super_get_name=that.superior('get_name');
    that.get_name=function(n){
        return 'like ' +super_get_name+" baby";
    }
    return that;
}

var mycoolcat=coolcat({name:"Bibox"});
console.log(mycoolcat.get_name());
