/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    // 拓扑排序的思想,找到叶子节点(即度为1的节点),依次往内去掉叶子节点,
    // 去掉的同时将叶子节点相邻的节点度减1,形成新的叶子节点,依次进行重复的操作
    // 直到图中剩下的节点数量小于等于2时,剩下的节点便是要找的节点
    // 问题1:为什么要依次往内找,找到的才符合我们的要求?
    // 答:一条路径上以中间的节点,形成的树高度最小
    // 问题2:为什么数量小于等于2？
    // 答:因为没有环,奇数个节点的路径中间节点唯一,偶数个节点的路径中间节点唯二
    // 本题参考算法思路
    // 1.https://leetcode.cn/problems/minimum-height-trees/solution/zui-xiao-gao-du-shu-by-leetcode-solution-6v6f/
    // 2.https://zhuanlan.zhihu.com/p/516556671
    let indeg = Array(n).fill(0) // 存每个节点的度,这里的度是入度和出度的和
    let eMap = new Map(); // 存图,邻接矩阵
    let queue = [] // 宽度搜索遍历队列
    let res = [] // 输出结果
    if(n === 1) return [0] // 只有一个节点
    for(let edge of edges){ 
        // 由于是无向边,边的两个节点的度都需要+1
        indeg[edge[0]] += 1
        indeg[edge[1]] += 1
        // 存储图结构
        if(!eMap.get(edge[0])){
            eMap.set(edge[0],[])
        }
        if(!eMap.get(edge[1])){
            eMap.set(edge[1],[])
        }      
        let value0 = eMap.get(edge[0])
        let value1 = eMap.get(edge[1])
        value0.push(edge[1])
        value1.push(edge[0])
        eMap.set(edge[0],value0)
        eMap.set(edge[1],value1)
    }
    for(let i = 0;i < indeg.length;i++){
        if(indeg[i] === 1){ // 将入读为1的入队
            queue.push(i)
        }
    }
    while(n > 2){
        let size = queue.length
        n -= size
        for(let i = 0; i < size;i++){
            let u = queue.shift();
            let vList = eMap.get(u);
            for(let v of vList){
                indeg[v] -= 1
                if(indeg[v] === 1){
                    queue.push(v)
                }
            }
        }
    }
    res = [...queue]
    return res
};