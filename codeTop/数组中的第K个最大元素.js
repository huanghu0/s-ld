/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    // const quickSort = function(left,right,nums,k){
    //     if(left >= right) return
    //     let povit = nums[Math.floor((left + right) / 2)]
    //     let i = left,j = right
    //     while(i < j){
    //       while(nums[j] > povit){
    //         j -= 1
    //       }
    //       while(nums[i] < povit){
    //         i += 1
    //       }
    //       if(i <= j){
    //         let temp = nums[i]
    //         nums[i] = nums[j]
    //         nums[j] = temp
    //         i += 1
    //         j -= 1
    //       }
    //     }
    //     quickSort(left,j,nums,k)  
    //     quickSort(i,right,nums,k) 
    //   }
    
    //   quickSort(0,nums.length - 1,nums,k)
    //   return nums[nums.length - k]
    const quickSort = (left,right,nums,k) => {
        if(left >= right) return
        let i = left,j = right
        let pivot = nums[left]
        while(i < j){
            while(i < j && nums[j] >= pivot){
                j -= 1
            }

            while(i < j && nums[i] <= pivot){
                i += 1 
            }
            if(i < j){
                let temp = nums[i]
                nums[i] = nums[j]
                nums[j] = temp
            }
        }
        nums[left] = nums[i]
        nums[i] = pivot
        if(i === k){
            return
        }else if(i > k){
            quickSort(left,i - 1,nums,k)
        }else{
            quickSort(i+1,right,nums,k)
        }
    }
    quickSort(0,nums.length - 1,nums,nums.length - k)
    return nums[nums.length - k]
};
console.log(findKthLargest([5,2,4,1,3,6,0],4))