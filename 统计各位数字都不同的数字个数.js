/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
    let count = 0
    let used = new Array(10).fill(false) // 记录0~9数字是否被使用
    // 回溯函数
    const backtracking = (n,curIndex) => {
        if(curIndex > n) return 
        count += 1
        // 回溯遍历过程
        for(let i = 0 ; i < 10;i++){
            // 前面的位置使用过 则为保证各位数字不重复则不能再使用
            if(used[i]){
                continue
            }
            // 当前的位置为第一位 不能为0
            if(curIndex === 0 && i === 0){
                continue
            }
            used[i] = true
            backtracking(n,curIndex + 1)
            used[i] = false
        }
        return 
    }
    backtracking(n,0);
    return count 
};
console.log(countNumbersWithUniqueDigits(3))