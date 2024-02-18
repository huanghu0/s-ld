// 给定一个整数数组  nums 和一个正整数 k，找出是否有可能把这个数组分成 k 个非空子集，其总和都相等。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k) {
    if(k > nums.length) return false
    nums = nums.sort((a,b)=> b - a)
    const buckts = new Array(k).fill(0)
    const sum = nums.reduce((acc, cur) => acc + cur)
    if(sum % k !== 0) return false
    const target = sum / k
    const dfs = (nums, index, buckts, target) => {
        if (index === nums.length) {
            for(let i = 0; i < k; i++){
                if(buckts[i] !== target){
                    return false
                }
                return true
            }
            
        }
        for (let i = 0; i < k; i++) {
            if (buckts[i] + nums[index] > target || (i > 0 && buckts[i] === buckts[i - 1])) continue
            buckts[i] += nums[index]
            if (dfs(nums, index + 1, buckts, target)) {
                return true
            }
            buckts[i] -= nums[index]
        }
        return false
    }
    return dfs(nums, 0, buckts, target)
};