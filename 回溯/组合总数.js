/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let results = []
    let res = []
    candidates.sort((a,b) => a - b) 
    const backTracking = (candidates,target,sum,startIndex) => { // 回溯函数
        if(target === sum){ // 回溯条件
            results.push([...res])
            return
        }
        // sum + candidates[i] <= target 为了剪枝用
        for(let i = startIndex;i < candidates.length && sum + candidates[i] <= target;i++){// 回溯遍历过程
            res.push(candidates[i])
            sum += candidates[i]
            backTracking(candidates,target,sum,i) 
            // 回溯
            sum -= candidates[i]
            res.pop()
        }
    }
    backTracking(candidates,target,0,0)
    return results
};