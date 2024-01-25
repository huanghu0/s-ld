/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    // 回溯算法 + used + 剪枝
    let results = []
    let res = []
    let used = new Array(candidates.length).fill(false) // 标记同意树层是否有相同的节点使用过
    candidates.sort((a,b) => a - b) 
    const backTracking = (candidates,target,sum,startIndex,used) => { // 回溯函数
        if(target === sum){ // 结束条件
            results.push([...res])
            return
        }
        // sum + candidates[i] <= target用于剪枝
        for(let i = startIndex;i < candidates.length && sum + candidates[i] <= target;i++){
            if(i > 0 && candidates[i] === candidates[i -1] && used[i -1] === false){
                continue
            }
            sum += candidates[i]
            res.push(candidates[i])
            used[i] = true
            backTracking(candidates,target,sum,i+1,used) // 回溯
            used[i] = false
            sum -= candidates[i]
            res.pop()
        }

    }
    backTracking(candidates,target,0,0,used)
    return results
};