// 给定一个含有 n 个正整数的数组和一个正整数 target 。

// 找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。


/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let sum = 0
    let result = Number.MAX_SAFE_INTEGER
    let start = 0
    let len = nums.length
    for(let i = 0;i < len;i++){
        sum += nums[i]
        while(sum >= target){
            result = Math.min(i - start + 1,result)
            sum -= nums[start]
            start++
        }
    }
    return result === Number.MAX_SAFE_INTEGER ? 0 : result
};