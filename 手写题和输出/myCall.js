// call函数实现
Function.prototype.myCall = function(context) {
    // 判断调用对象
    if (typeof this !== "function") {
      console.error("type error");
    }
    // 获取参数
    let args = [...arguments].slice(1);
    // 判断 context 是否传入，如果未传入则设置为 window
    context = context || window;
    // 将调用函数设为对象的方法
    context.fn = this; // 相当于把调用的函数变成了传进来的参数的一个属性
    // 调用函数
    context.fn(...args); // 调用这个函数 这个函数里面的this 就是context 即是传进来的参数
    // 将属性删除
    delete context.fn;
};


function greet(a,b,c) {
    console.log(this.animal, "的睡眠时间一般在", this.sleepDuration, "之间",a+b+c);
}
  
const obj = {
    animal: "猫",
    sleepDuration: "12 到 16 小时",
};

greet.myCall(obj,1,2,3); // 猫 的睡眠时间一般在 12 到 16 小时 之间