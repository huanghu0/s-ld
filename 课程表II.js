// 题目描述
// 现在你总共有 numCourses 门课需要选，记为 0 到 numCourses - 1。给你一个数组 prerequisites ，其中 prerequisites[i] = [ai, bi] ，表示在选修课程 ai 前 必须 先选修 bi 。

// 例如，想要学习课程 0 ，你需要先完成课程 1 ，我们用一个匹配来表示：[0,1] 。
// 返回你为了学完所有课程所安排的学习顺序。可能会有多个正确的顺序，你只要返回 任意一种 就可以了。如果不可能完成所有课程，返回 一个空数组 。



/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var findOrder = function(numCourses, prerequisites) {
    // 求拓扑排序的思路(拓扑排序的概念自行去了解),本题和课程表方法一直,只是结果不用一个数字判断和numCourses是否相等,而是将数据保存在一个数组中。
    // 用宽度优先搜索,由于题目是用0到numCourses - 1表示每一课(即为有向图的一个节点);则用一个长度为numCourses的数组indeg来保存所有的入度,indeg数组的下标就是每课(即为有向图的一个节点),
    // 用edegs来表示保存有向图,有向图的数据接口,用对象表示,key是每一种课(即图里面的节点),对应的值是一个数组表示指向的课(及指向的节点)
    let indeg = Array(numCourses).fill(0) // 存入度
    let edegs = {}; // 存图
    let res = [] // 队列中的最终值,存放节点
    let queue = [] // 宽度搜索遍历队列
    for(let i = 0; i < prerequisites.length; i++){
        indeg[prerequisites[i][0]] += 1
        if(!edegs[prerequisites[i][1]]){
            edegs[prerequisites[i][1]] = []
        }
        edegs[prerequisites[i][1]].push(prerequisites[i][0])
    }
    for(let i = 0; i < indeg.length; i++){
        if(indeg[i] === 0){
            queue.push(i) // 找到入度为0的将其放入队列
        }
    }
    while(queue && queue.length !== 0){
        let u = queue.shift(); // 将入度为0的节点弹出 表示这个节点符合拓扑排序
        res.push(u)
        let edeg = edegs[u] // 找到所有以u为前导的节点集合
        if(edeg){ // 有可能不存在以u为前导的集合(u没有出度)
            for(let v of edeg){ // 这里的用的let ... of 注意一下
                indeg[v] -= 1
                if(indeg[v] === 0){ // 如果节点的入度为0 则入栈
                    queue.push(v)
                }
            }
        }

    }
    return res.length === numCourses ? res : []
};