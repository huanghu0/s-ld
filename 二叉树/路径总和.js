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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    // const backTracking = (root,targetSum) => {
    //     if(root.left === null && root.right === null) {
    //         if(targetSum === 0){
    //             return true
    //         }
    //         return false
    //     }
    //     if(root.left){           
    //         targetSum -= root.left.val
    //         if( backTracking(root.left,targetSum)) return true
    //         targetSum += root.left.val
    //     }
    //     if(root.right){
    //         targetSum -= root.right.val
    //         if(backTracking(root.right,targetSum)) return true
    //         targetSum += root.right.val
    //     }        
    //     return false
    // }
    // if(!root) return false
    // return  backTracking(root,targetSum - root.val)
    if(!root) return false
    let pathStack = [],nodeStack = []
    nodeStack.push(root)
    pathStack.push(targetSum - root.val)
    while(nodeStack.length){
        let path = pathStack.pop()
        let node = nodeStack.pop()
        if(node.left === null && node.right === null && path === 0) return true
        if(node.right){
            pathStack.push(path - node.right.val)
            nodeStack.push(node.right)
        }
        if(node.left){
            pathStack.push(path - node.left.val)
            nodeStack.push(node.left)
        }
    }
    return false
}