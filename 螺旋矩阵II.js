// 给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let result = new Array(n).fill(0).map(() => new Array(n).fill(0))
    let left = 0,right = n - 1,top = 0,bottom = n - 1;
    let count = 1
    while(left <= right && top <= bottom){
        for(let col = left;col <= right;col++){
            result[top][col] = count
            count += 1
        }
        for(let row = top + 1;row <= bottom;row++){
            result[row][right] = count
            count++
        }
        // if(left < right && top < bottom){ // 这个判断加不加都可以
            for(let col = right - 1;col > left;col--){
                result[bottom][col] = count
                count++
            }
            for(let row = bottom;row > top;row--){
                result[row][left] = count
                count++
            }
        // }
        left++
        top++
        right--
        bottom--
    }
    return result
};