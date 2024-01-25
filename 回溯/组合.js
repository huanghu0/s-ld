/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let res = []
    let path = [];
    const backTracking = (startIndex,n,k) => { // 回溯函数
        if(path.length === k){
            res.push([...path])
            return
        }
        // 剪枝,剩余的数必须多余k - path.length个;所以开始取数的位置要小于等于n - (k - path.length) + 1
        for(let i = startIndex;i <= n - (k - path.length) + 1;i++){ 
            path.push(i)
            backTracking(i+1,n,k) // 回溯
            path.pop()
        }
    }
    backTracking(1,n,k)
    return res
};