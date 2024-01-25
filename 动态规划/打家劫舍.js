/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // 动态规划
    // 思路:如果只有一间房则，最大盗窃金额为该房间的总金额
    // 如果有两间房那么,由于不能盗连续的两间房,所以最大盗窃金额为,max(nums[0],nums[1])
    // 如果房间数多余两间,那么之后的第i间房最大盗窃金额用res[i]表示,对于第i间房的最大盗窃金额,
    // 我们可以选择盗窃由于不能盗窃连续的两件房,那么金额为res[i-2]+nums[i];
    // 我们可以选择不盗窃那么最大盗窃金额就是第i-1间房的最大盗窃金额res[i-1]
    // 所以我们都动态规划方程:res[i] = max(res[i-2]+nums[i],res[i-1])
    // 边界时当只有一间房时,res[0] = nums[0];只有两间时res[1] = max(nums[0],nums[1])
    // let n = nums.length;
    // if(n === 1) return nums[0];
    // if(n === 2) return Math.max(nums[0],nums[1]);
    // let res = new Array(n).fill(0);
    // res[0] = nums[0]
    // res[1] = Math.max(nums[0],nums[1])
    // for(let i = 2;i < n;i++){
    //     res[i] = Math.max(res[i-2]+nums[i],res[i - 1])
    // }
    // return res[n - 1]
    // 优化上面的空间
    let n = nums.length;
    if(n === 1) return nums[0];
    if(n === 2) return Math.max(nums[0],nums[1]);
    let a = nums[0]
    let b = Math.max(nums[0],nums[1])
    for(let i = 2;i < n;i++){
        let temp = b
        b = Math.max(a + nums[i],b)
        a = temp
    }
    return b
};