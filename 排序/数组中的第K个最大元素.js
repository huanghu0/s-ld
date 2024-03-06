/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const quickSort = function(left,right,nums,k){
      if(left >= right) return
      let povit = nums[Math.floor((left + right) / 2)]
      let i = left,j = right
      while(i < j){
        while(nums[j] > povit){
          j -= 1
        }
        while(nums[i] < povit){
          i += 1
        }
        if(i <= j){
          let temp = nums[i]
          nums[i] = nums[j]
          nums[j] = temp
          i += 1
          j -= 1
        }
      }
      if(i === k){
        return 
      }else if(i >= k){
        quickSort(left,j,nums,k)
      }else{
        quickSort(i,right,nums,k)
      }
    }
  
    quickSort(0,nums.length - 1,nums,nums.length - k)
    return nums[nums.length - k]
};