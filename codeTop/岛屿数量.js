// 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
// 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
// 此外，你可以假设该网格的四条边均被水包围

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let result = 0
    const backTracking = (i,j) => {
        if(i >= 0 && i < m && j >= 0 && j < n &&  grid[i][j] === '1'){
            grid[i][j] = '0' 
            backTracking(i-1,j)
            backTracking(i+1,j)
            backTracking(i,j+1)
            backTracking(i,j-1)
        }else{
            return 
        }
    }
    for(let i = 0;i < m;i++){
        for(let j = 0;j < n;j++){
            if(grid[i][j] === '1'){
                backTracking(i,j)
                result += 1
            }
        }
    }
    return result
};
var numIslands = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let result = 0
    for(let i = 0;i < m;i++){
        for(let j = 0;j < n;j++){
            if(grid[i][j] === '1'){
                result += 1
                let q = []
                q.push([i,j])
                while(q.length){
                    let cur = q.pop()
                    let r = cur[0],c = cur[1]
                    if(r - 1 >= 0 && grid[r - 1][c] === '1'){
                        grid[r - 1][c] = '0'
                        q.push([r - 1,c])
                    }
                    if(r + 1 < m && grid[r + 1][c] === '1'){
                        grid[r + 1][c] = '0'
                        q.push([r + 1,c])
                    }
                    if(c - 1 >= 0 && grid[r][c - 1] === '1'){
                        grid[r][c - 1] = '0'
                        q.push([r,c - 1])
                    }
                    if(c + 1 < n && grid[r][c+1] === '1'){
                        grid[r][c+1] = '0'
                        q.push([r,c+1])
                    }                                        
                }
            }
        }
    }
    return result
};
let grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]
  
console.log(numIslands(grid))