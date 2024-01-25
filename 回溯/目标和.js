/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let result = 0
    const backTracking = (nums,target,i,res) =>{
        if(i > nums.length) return 
        if(i === nums.length && res !== target){
            return
        }
        if(i === nums.length && res === target){
           result += 1
        }
        backTracking(nums,target,i+1,res+nums[i])
        backTracking(nums,target,i+1,res-nums[i])
        return         
    }
    backTracking(nums,target,0,0)
    return result
};
console.log(findTargetSumWays([1,1,1,1,1],3))