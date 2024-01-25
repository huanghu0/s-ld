/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b) => a - b)
    let result = []
    let len = nums.length
    if(len < 3) return result
    for(let i = 0;i < len - 2;i++){
        if(i > 0 && nums[i] === nums[i - 1]) continue
        if(nums[i] > 0) break
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

console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]))