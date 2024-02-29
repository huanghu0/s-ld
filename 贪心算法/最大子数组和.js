/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let res = Number.MIN_SAFE_INTEGER
    // let resArr = []
    let count = 0;
    // let countArr = []
    for(let i = 0;i < nums.length;i++){
        count += nums[i]
        // countArr.push(nums[i])
        if(count > res){
            res = count
            // resArr = [...countArr]
        }
        if(count <= 0) {
            count = 0
            // countArr = []
        }
    }
    return res
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))