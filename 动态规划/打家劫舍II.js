/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // 还是动态规划的思路,本地和打家劫舍的思路一致
    // 打家劫舍思路:如果只有一间房则，最大盗窃金额为该房间的总金额
    // 如果有两间房那么,由于不能盗连续的两间房,所以最大盗窃金额为,max(nums[0],nums[1])
    // 如果房间数多余两间,那么之后的第i间房最大盗窃金额用res[i]表示,对于第i间房的最大盗窃金额,
    // 我们可以选择盗窃由于不能盗窃连续的两件房,那么金额为res[i-2]+nums[i];
    // 我们可以选择不盗窃那么最大盗窃金额就是第i-1间房的最大盗窃金额res[i-1]
    // 本题需要注意的是,由于房间围成圈,所以盗窃了第一间就不能盗窃最后一间能盗窃的范围是[0,n-2],
    // 盗窃最后一间就不能盗窃第一间能盗窃的范围是[1,n-1];所以最后盗窃金额的最大值为盗窃[0,n-2]间
    // 或者盗窃[1,n-1]间中的最大值
    // let len = nums.length;
    // if(len === 1) return nums[0]
    // if(len === 2) return Math.max(nums[0],nums[1])
    // let aRes = new Array(len).fill(0)
    // let bRes = new Array(len).fill(0)
    // // aRes为盗窃范围为[0,n-1]
    // aRes[0] = nums[0]
    // aRes[1] = Math.max(nums[0],nums[1])
    // // bRes为盗窃范围为[1,n-1]
    // bRes[0] = 0
    // bRes[1] = nums[1]
    // for(let i = 2;i < len - 1;i++){
    //     aRes[i] = Math.max(aRes[i-2]+nums[i],aRes[i - 1])
    // }
    // for(let i = 2;i < len;i++){
    //     bRes[i] = Math.max(bRes[i-2]+nums[i],bRes[i - 1])
    // }
    // return Math.max(aRes[len -2],bRes[len - 1])
    // 优化上面空间
    let len = nums.length;
    if(len === 1) return nums[0]
    if(len === 2) return Math.max(nums[0],nums[1])
    let a = nums[0] 
    let b = Math.max(nums[0],nums[1])
    for(let i = 2;i < len -1;i++){
        let temp = b;
        b = Math.max(b,a + nums[i])
        a = temp
    }    
    let c = 0
    let d = nums[1]
    for(let i = 2;i < len;i++){
        let temp = d
        d = Math.max(d,c + nums[i])
        c = temp 
    }
    return Math.max(b,d)
};