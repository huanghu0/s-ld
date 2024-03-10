Function.prototype.myBind = function (context, ...args) {
    // 判断调用myBind的是否为函数
    if (typeof this !== "function") {
      throw new TypeError("Function.prototype.myBind - 被调用的对象必须是函数");
    }
      
    context = context || window;
  
    // 保存原始函数的引用，this就是要绑定的函数
    const _this = this;
  
    // 返回一个新的函数作为绑定函数
    return function fn(...innerArgs) {
      // 判断返回出去的函数有没有被new
      if (this instanceof fn) {
        return new _this(...args, ...innerArgs);
      }
      // 使用apply方法将原函数绑定到指定的上下文对象上
      return _this.apply(context,args.concat(innerArgs));
    };
};

const test = {
    name: "xxx",
    hello: function (a,b,c) {
        console.log(`hello,${this.name}!`,a+b+c);
    },
};

const obj = { name: "world" };
let hello1 = test.hello.myBind(obj,1);
let hello2 = test.hello.bind(obj,1); 
hello1(2,3)//hello,world! 6
hello2(2,3)//hello,world! 6
console.log(new hello1(2,3));
//hello,undefined! 6
// hello {}
console.log(new hello2(2,3));
//hello,undefined! 6
// hello {}
    