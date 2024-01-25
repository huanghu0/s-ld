/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if(nums.length === 1) return 0;
    let curDistance = 0;
    let ans = 0;
    let nextDistance = 0;
    for(let i = 0;i < nums.length;i++){
        nextDistance = Math.max(nums[i]+i,nextDistance);
        if(i === curDistance){
            ans++;
            curDistance = nextDistance;
            if(nextDistance >= nums.length - 1) {
                break
            }
        }
    }
    return ans
};