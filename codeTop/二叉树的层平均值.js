// 给定一个非空二叉树的根节点 root , 以数组的形式返回每一层节点的平均值。与实际答案相差 10-5 以内的答案可以被接受

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    let result = []
    if(!root) return result
    let q = [root]
    while(q.length){
        let curLevelLength = q.length
        let sum = 0
        for(let i = 0;i < curLevelLength; i++){
            let node = q.shift()
            sum += node.val
            if(node.left) q.push(node.left)
            if(node.right) q.push(node.right)
        }
        result.push(sum / curLevelLength)
    }
    return result
};