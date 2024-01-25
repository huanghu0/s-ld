// 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。

// 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。

// 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    // let slowIndex = 0;
    // let size = nums.length;
    // for(let i = 0;i < size;i++){
    //     if(nums[i] !== val){
    //         nums[slowIndex] = nums[i]
    //         slowIndex += 1
    //     }
    // }
    // return slowIndex
    let leftIndex = 0,rightIndex = nums.length - 1;
    while(leftIndex <= rightIndex){
        while(leftIndex <= rightIndex && nums[leftIndex] !== val){
            leftIndex++
        }
        while(leftIndex <= rightIndex && nums[rightIndex] === val){
            rightIndex--
        }
        if(leftIndex <= rightIndex){
            nums[leftIndex] = nums[rightIndex]
            leftIndex++
            rightIndex--
        }
    }
    return leftIndex
};