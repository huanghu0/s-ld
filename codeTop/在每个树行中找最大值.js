// 给定一棵二叉树的根节点 root ，请找出该二叉树中每一层的最大值。

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
var largestValues = function(root) {
    let result = []
    if(!root) return result
    let q = [root]
    while(q.length){
        let curLevelLength = q.length
        let max = Number.MIN_SAFE_INTEGER
        for(let i = 0; i < curLevelLength; i++){
            let node = q.shift()
            if(node.val > max){
                max = node.val
            }
            if(node.left) q.push(node.left)
            if(node.right) q.push(node.right)
        }
        result.push(max)
    }
    return result
};
 