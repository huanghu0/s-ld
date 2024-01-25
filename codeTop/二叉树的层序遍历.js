// 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。
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
 * @return {number[][]}
 */

var levelOrder = function(root) {
    let result = []
    if(!root){
        return result
    }
    let q = [root]
    while(q.length){
        let curLevelLength = q.length
        result.push([])
        for(let i = 0;i < curLevelLength;i++){
            node = q.shift();
            result[result.length - 1].push(node.val)
            if(node.left) q.push(node.left)
            if(node.rigth) q.push(node.rigth)         
        }
    }

    return result
};