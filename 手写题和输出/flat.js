if(!Array.prototype.myFlat){
    Array.prototype.myFlat = function(depth) {
        
        let result = []

        const backTracing = (arr,depth) => {
            if(!Array.isArray(arr) || depth < 0){
                result.push(arr)
                return
            }
            for(let i = 0;i < arr.length;i++){
                backTracing(arr[i],depth - 1)
            }
        }

        backTracing(this,depth)


        return result
    }
}

console.log([1,2,3,[4,[5,6]]].myFlat(1))