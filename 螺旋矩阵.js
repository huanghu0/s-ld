// 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let m = matrix.length
    let n = matrix[0].length
    let result = []
    let left = 0,right = n - 1,top = 0,bottom = m - 1;
    while(left <= right && top <= bottom){
        for(let col = left;col <= right;col++){
            result.push(matrix[top][col])
        }
        for(let row = top + 1;row <= bottom;row++){
            result.push(matrix[row][right])
        }
        if(left < right && top < bottom){
            for(let col = right - 1;col > left;col--){
                result.push(matrix[bottom][col])
            }
            for(let row = bottom;row > top;row--){
                result.push(matrix[row][left])
            }
        }

        left++
        top++
        right--
        bottom--
    }
    return result
};