/**
 * @param {number[]} nums
 * @return {number}
 */
// 回溯 会超时
// var lengthOfLIS = function(nums) {
//     let result = 0;
//     let path = []
//     const backTracking = (path,startIndex) => {
//         if(path.length > 0){
//             result = Math.max(result,path.length)
//         }
//         let uset = []
//         for(let i = startIndex;i < nums.length;i++){
//             if((path.length > 0 && path[path.length - 1] >= nums[i]) || uset.includes(nums[i])){
//                 continue
//             }
//             uset.push(nums[i])
//             path.push(nums[i])
//             backTracking(path,i+1)
//             path.pop()
//         }
//     } 
//     backTracking(path,0)
//     return result
// };


// 动态规划 o(n^2)
var lengthOfLIS = function(nums) {
    let len = nums.length
    if(len <= 1) return len
    let result = 0
    let dp = new Array(len).fill(1)
    for(let i = 0;i < len;i++){
        for(let j = 0;j < i;j++){
            if(nums[j] < nums[i]){
                dp[i] = Math.max(dp[i],dp[j] + 1) 
            }
        }
        result = Math.max(dp[i],result)
    }
    return result
};


console.log(lengthOfLIS([7,7,7,7,7,7,7]))