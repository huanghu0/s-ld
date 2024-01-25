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
var preorderTraversal = function(root) {
    let stack = []
    let result = []
    if(!root) return result
    stack.push(root)
    while(stack.length !== 0){
        let node = stack.pop()
        if(node !== null){
            if(node.right) stack.push(node.right)
            if(node.left) stack.push(node.left)
            stack.push(node)
            stack.push(null)
        }else{
            node = stack.pop()
            result.push(node.val)
        }
    }
    return result
};