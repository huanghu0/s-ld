// 给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：

// 0 <= a, b, c, d < n
// a、b、c 和 d 互不相同
// nums[a] + nums[b] + nums[c] + nums[d] == target
// 你可以按 任意顺序 返回答案 。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let result = []
    let len = nums.length 
    if(len < 4) return result
    nums.sort((a,b) => a - b)
    for(let i = 0;i < len - 3;i++){
        if(i > 0 && nums[i] === nums[i - 1]) continue
        if(nums[i] + nums[i+1] + nums[i+2] + nums[i + 3] > target) break
        if(nums[i] + nums[len - 3] + nums[len - 2] + nums[len - 1] < target) continue
        for(let j = i + 1;j < len - 2;j++){
            if(j > i + 1 && nums[j] === nums[j - 1]) continue
            if(nums[i] + nums[j] + nums[j+1] + nums[j+2] > target) break
            if(nums[i] + nums[j] + nums[len - 2] + nums[len -1] < target) continue
            let left = j + 1,right = len - 1;
            while(left < right){
                let sum = nums[i] + nums[j] + nums[left] + nums[right]
                if(sum === target){
                    result.push([nums[i],nums[j],nums[left],nums[right]])
                    left += 1
                    right -= 1
                    while(left < right && nums[left] === nums[left - 1]){
                        left++
                    }
                    while(left < right && nums[right] === nums[right + 1]){
                        right--
                    }                    
                }else if(sum > target){
                    right--
                }else{
                    left++
                }
            }
        }
    }
    return result
};