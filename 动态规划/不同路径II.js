/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length
    let dp = new Array(m).fill().map(() => Array(n))
    dp[0][0] = obstacleGrid[0][0] == 1 ? 0 : 1
    for(let i = 1;i < m;i++){
        if(obstacleGrid[i][0] == 1){
            dp[i][0] = 0
        }else{
            dp[i][0] = dp[i - 1][0]
        }
    }

    for(let i = 1;i < n;i++){
        if(obstacleGrid[0][i] == 1){
            dp[0][i] = 0
        }else{
            dp[0][i] = dp[0][i - 1]
        }        
    }    

    for(let i = 1;i < m;i++){
        for(let j = 1;j < n;j++){
            if(obstacleGrid[i][j] == 1){
                dp[i][j] = 0
            }else{
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
            }
            
        }
    }
    return dp[m - 1][n - 1]
};