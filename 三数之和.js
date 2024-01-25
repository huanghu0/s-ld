// 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请

// 你返回所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。


var threeSum = function(nums) {
    nums.sort((a,b) => a - b)
    let result = []
    let len = nums.length
    if(len < 3) return result
    for(let i = 0;i < len - 2;i++){
        if(i > 0 && nums[i] === nums[i - 1]) continue
        if(nums[i] + nums[i + 1] + nums[i+2] > 0) break
        if(nums[i] + nums[len - 2] + nums[len - 1] < 0) continue
        let j = i + 1,k = len - 1
        while(j < k){
            if(nums[i] + nums[j] + nums[k] === 0){
                result.push([nums[i] , nums[j] , nums[k]])
                j += 1
                k -= 1
                while(j < k && nums[j] === nums[j - 1]){
                    j += 1
                }
                while(j < k && nums[k] === nums[k + 1]){
                    k -= 1
                }
            }else if(nums[i] + nums[j] + nums[k] > 0){
                k -= 1
            }else{
                j += 1
            }
        }
    }
    return result
};