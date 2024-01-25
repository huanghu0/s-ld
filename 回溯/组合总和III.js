/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let results = []
    let res = []
    const backTracking = (k,n,startIndex,sum) => {
        if(res.length === k && sum === n){
            results.push([...res])
            return 
        }
        for(let i = startIndex;i <= 9 && sum + i <= n;i++){
            res.push(i)
            sum += i
            backTracking(k,n,i+1,sum)
            res.pop()
            sum -= i
        }
    }
    backTracking(k,n,1,0)
    return results
};