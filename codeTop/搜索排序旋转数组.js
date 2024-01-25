// 整数数组 nums 按升序排列，数组中的值 互不相同 。
// 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。
// 给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。
// 你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let len = nums.length
    if(!len) return -1
    if(len === 1) return nums[0] === target ? 0 : -1
    let l = 0,r = len - 1
    while(l <= r){
        let mid = Math.floor((r - l) / 2) + l
        if(nums[mid] === target) return mid
        if(nums[0] <= nums[mid]){ // 说明 mid 在 0 到 k 之间 这说明 l 到 mid有序
            if(nums[mid] > target && nums[l] <= target){
                r = mid - 1
            }else{
                l = mid + 1
            }
        }else{ // 说明mid 在 k 到 len 之间 说明 mid 到 r 有序
            if(nums[mid] < target && nums[r] >= target){ 
                l = mid + 1
            }else{
                r = mid - 1
            }
        }
    }
    return -1
};

console.log(search([1],0))