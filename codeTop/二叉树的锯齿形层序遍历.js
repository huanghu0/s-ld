// 给你二叉树的根节点 root ，返回其节点值的 锯齿形层序遍历 。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
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
var zigzagLevelOrder = function(root) {
    let result = []
    if(!root){
        return result
    }
    let q = [root]
    let isLeftOrder = true
    while(q.length){
        let curLevelLength = q.length
        result.push([])
        for(let i = 0;i < curLevelLength;i++){
            let node = q.shift() 
            if(isLeftOrder){
                result[result.length - 1].push(node.val)
            }else{
                result[result.length - 1].unshift(node.val)
            }
            if(node.left) q.push(node.left)
            if(node.right) q.push(node.right)
        }
        isLeftOrder = !isLeftOrder
    }
    return result
};