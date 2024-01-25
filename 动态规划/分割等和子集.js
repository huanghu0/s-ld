/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    if(nums.length === 0 || nums === null) return false
    const sum = (nums.reduce((p, v) => p + v));
    if(sum % 2 !== 0) return false
    const dp = new Array(sum / 2 + 1).fill(0);
    for(let i = 0; i < nums.length; i++) {
        for(let j = sum / 2; j >= nums[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
            if (dp[j] === sum / 2) {
                return true;
            }
        }
    }
    return dp[sum / 2] === sum / 2;    
};

console.log(canPartition([1,2,3,5]))