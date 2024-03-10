function curry(fn){
    let arr = []
    return function temp(...newArgs){
        if(newArgs.length){
            arr = arr.concat([...newArgs])
            return temp
        }else{
            return fn.apply(this,arr)
        }
    }
}

function fn_initadd(...args){
    let val = args.reduce((initvalue,cur) => {
        return initvalue + cur
    },0)
    return val
}

let add = curry(fn_initadd)

console.log(add(1,2,3)(1)(2,3)())