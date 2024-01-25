// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = []
    let len = nums.length
    let res = []
    let visited = new Array(len).fill(false)
    const backTracking = (res) => {
        if(res.length === nums.length){
            result.push([...res])
            return
        }
        for(let j = 0;j < nums.length;j++){
            if(!visited[j]){
                res.push(nums[j])
                visited[j] = true
                backTracking(res)
                res.pop()
                visited[j] = false
            }
        }
    }
    backTracking(res)
    return result
};
console.log(permute([1,2,3]))