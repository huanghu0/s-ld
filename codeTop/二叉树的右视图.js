// 给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

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
var rightSideView = function(root) {
    let result = []
    if(!root) return result
    let q = [root]
    while(q.length){
        let curLevelLength = q.length;
        for(let i = 0;i < curLevelLength;i++){
            let node = q.shift()
            if(i === curLevelLength -1){
                result.push(node.val)
            }
            if(node.left) q.push(node.left)
            if(node.right) q.push(node.right)
        }
    }
    return result
};