// 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
// 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
// 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // let low = Number.MAX_SAFE_INTEGER;
    // let result = 0;
    // for(let i = 0; i < prices.length;i++){
    //     low = Math.min(prices[i],low)
    //     result = Math.max(result,prices[i] - low)
    // }
    // return result
    
    let len = prices.length;
    let dp = new Array(len).fill([0,0])
    dp[0] = [-prices[0],0]
    for(let i = 1;i < len;i++){
        dp[i][0] = Math.max(dp[i - 1][0],-prices[i])
        dp[i][1] = Math.max(dp[i -1][1],dp[i - 1][0]+prices[i])
    }
    return dp[len - 1][1]
};