// 题目描述

// 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
// 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
// 此外，你可以假设该网格的四条边均被水包围。

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    // 深度优先搜索思路,遍历grid中的每一个数据,且对数据进行上下左右深度优先搜索,搜索时将遍历过的数据置为0,最终的结果是深度优先搜索的次数
    let res = 0
    let col = grid.length;
    let row = grid[0].length;
    if(!grid || grid.length === 0) return 0 
    const dfs = function(grid,i,j,col,row){
        if(grid[i][j] === '0' || i >= col || j >= row || i < 0 || j < 0){ // 递归结束条件 坐标跑出边界 或者 遇到水
            return
        }
        grid[i][j] = '0' // 遍历过的置为'o'
        dfs(grid,i + 1,j,col,row)
        dfs(grid,i - 1,j,col,row)
        dfs(grid,i,j + 1,col,row)
        dfs(grid,i,j - 1,col,row)
    }
    // 遍历每一个网格数据
    for(let i = 0;i < col;i++){
        for(let j = 0;j < row;j++){
            if(grid[i][j] === '1'){
                res += 1
                dfs(grid,i,j,col,row)
            }
        }
    }
    return res
};
