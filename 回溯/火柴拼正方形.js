/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function(matchsticks) {
    let total = 0;
    for(let i = 0;i < matchsticks.length;i++){
        total += matchsticks[i]
    }
    if(total % 4 !== 0) return false
    let eLen = total / 4;
    let edges = new Array(4).fill(0)
    matchsticks.sort((a,b) => b - a) // 从大到小排序是为了搜索次数更少
    // 回溯函数
    const backTracking = (matchsticks,curIndex,edges,eLen) =>{
        if(curIndex === matchsticks.length){
            if(edges[0] === edges[1] && edges[1] === edges[2] && edges[2] === edges[3])
                return true
            return false
        }
        for(let i = 0;i < edges.length;i++){ // 回溯遍历过程
            if(edges[i] + matchsticks[curIndex] > eLen || (i > 0 && edges[i] === edges[i - 1])) // 剪枝
                continue
            edges[i] += matchsticks[curIndex]
            if(backTracking(matchsticks,curIndex + 1,edges,eLen))
                return true
            edges[i] -= matchsticks[curIndex]
        }
        return false
    }
    return backTracking(matchsticks,0,edges,eLen)
};