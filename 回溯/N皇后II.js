/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let result = 0
    let res = new Array(n).fill([]).map(() => new Array(n).fill('.'))
    // 判断改变当前位置为皇后时,是否之前就满足摆放好的皇后不互相攻击
    const isValid = (row,col,res) => {
        for(let i = 0;i < row;i++){
            if(res[i][col] === 'Q'){
                return false
            }
        }
        for(let i = row - 1,j = col - 1; i >= 0 && j >= 0;i--,j--){
            if(res[i][j] === 'Q'){
                return false
            }
        }
        for(let i = row - 1,j = col + 1; i >= 0 && j < n;i--,j++){
            if(res[i][j] === 'Q'){
                return false
            }
        }
        return true        
    }
    const backTracking = (row,res) => {
        if(row === n){
            result += 1
            return 
        }
        for(let col = 0;col < n;col++){
           if(!isValid(row,col,res)){
            continue
           } 
           res[row][col] = 'Q'
           backTracking(row+1,res)
           res[row][col] = '.'
        }
    }
    backTracking(0,res)
    return result 
};
console.log(solveNQueens(4))