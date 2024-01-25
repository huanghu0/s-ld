// 题目描述
// 你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。

// 在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [ai, bi] ，表示如果要学习课程 ai 则 必须 先学习课程  bi 。

// 例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。
// 请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。


/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    // 求拓扑排序的思路(拓扑排序的概念自行去了解),本题只是去求是否能够完成所有课程学习那么就是说是否存在一种拓扑排序,及判断是否是有向无环图。
    // 用宽度优先搜索,由于题目是用0到numCourses - 1表示每一课(即为有向图的一个节点);则用一个长度为numCourses的数组indeg来保存所有的入度,indeg数组的下标就是每课(即为有向图的一个节点),
    // 用edegs来表示保存有向图,有向图的数据接口,用对象表示,key是每一种课(即图里面的节点),对应的值是一个数组表示指向的课(及指向的节点)
    let indeg = Array(numCourses).fill(0) // 存入度
    let edegs = {}; // 存图
    let res = 0 // 队列中的最终值
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
        res += 1
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
    return res === numCourses
};