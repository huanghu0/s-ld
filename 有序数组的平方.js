// 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let i = 0,j = nums.length - 1;
    let k = nums.length - 1;
    let result = new Array(nums.length).fill(0);
    while(i <= j){
        if(nums[i]*nums[i] < nums[j]*nums[j]){
            result[k] = nums[j]*nums[j] 
            j--
        }else{
            result[k] = nums[i]*nums[i]
            i++            
        }
        k--
    }
    return result
};