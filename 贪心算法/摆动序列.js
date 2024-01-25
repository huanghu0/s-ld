/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    if(nums.length === 1) return 1
    if(nums.length === 2){
        if(nums[0] !== nums[1]){
            return 2
        }else{
            return 1
        }
    }
    let res = 1 // 开头都是峰值
    let prediff = 0
    let nextdiff = 0
    for(let i = 0;i < nums.length - 1;i++){
        nextdiff = nums[i+1] - nums[i]
        if((prediff <= 0 && nextdiff > 0) || (prediff >= 0 && nextdiff < 0)){
            res++
            prediff = nextdiff
        }
    }
    return res;
};