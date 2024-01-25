// 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let result = []
    let res = []
    let len = nums.length
    let visited = new Array(len).fill(false);
    nums.sort((a,b) => a - b)
    const backTracking = () => {
        if(res.length === nums.length){
            result.push([...res])
        }
        for(let i = 0;i < len;i++){
            if(visited[i]){
                continue
            }
            if(i > 0 && nums[i] === nums[i - 1] && !visited[i - 1]){
                continue
            }
            visited[i] = true
            res.push(nums[i])
            backTracking()
            visited[i] = false
            res.pop()
        }
    }
    backTracking()
    return result
};