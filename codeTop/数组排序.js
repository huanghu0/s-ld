// 给你一个整数数组 nums，请你将该数组升序排列
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    const quickSort = (left,right,nums) => {
        if(left >= right) return
        let i = left,j = right
        let povit = nums[left]
        while(i < j){  
            while(i < j && nums[j] >= povit){
                j -= 1
            }
            while(i < j && nums[i] <= povit){
                i += 1
            }
            if(i <= j){
                let temp = nums[i]
                nums[i] = nums[j]
                nums[j] = temp
            }
        }
        nums[left] = nums[i]
        nums[i] = povit
        quickSort(left,i - 1,nums)
        quickSort(i + 1,right,nums)
    }
    quickSort(0,nums.length - 1,nums)
    return nums
};