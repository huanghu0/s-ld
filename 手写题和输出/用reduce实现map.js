// array 的 reduce 和 map 用法和传参需要在mdn上去自行查阅

if(!Array.prototype.myMap){
    Array.prototype.myMap = function(callback,thisArg)  {
        return this.reduce(function(initval,cur,index,array) {
            initval[index] = callback.call(thisArg,cur,index,array)
            return initval
        },[])
    }
}


[1, 2,  3].myMap(
    (currentValue, index, array) => currentValue + index + array.length
)