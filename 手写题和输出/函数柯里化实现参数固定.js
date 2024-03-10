// es6 实现
function curry(fn, ...args) { // 这种柯里化 原函数的参数必须要明确
    // fn.length 是函数对象的一个属性值，指该函数有多少个必须要传入的参数，即形参的个数
    // 形参的数量不包括剩余参数个数，仅包括第一个具有默认值之前的参数个数

    // 判断参数的长度是否已经满足函数所需参数的长度
    // 如果满足，执行函数
    // 如果不满足，递归返回科里化的函数，等待参数的传入
    return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args);
}



// 原始函数 
function Fn_init (a, b, c) {
    console.log('最终的结果：', a + b + c)
}

const add = curry(Fn_init)

add(1)(2)(3)

