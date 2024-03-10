// apply函数
Function.prototype.myApply = function(context) {
    // 判断调用对象
    if (typeof this !== "function") {
        console.error("type error");
    }

    context = context || window
    context.fn = this

    if(arguments[1]){
        context.fn(...arguments[1])
    }else{
        context.fn()
    }

    delete context.fn
}

function greet(a,b,c) {
    console.log(this.animal, "的睡眠时间一般在", this.sleepDuration, "之间",a+b+c);
}
  
const obj = {
    animal: "猫",
    sleepDuration: "12 到 16 小时",
};

greet.myApply(obj,[1,2,3]); // 猫 的睡眠时间一般在 12 到 16 小时 之间