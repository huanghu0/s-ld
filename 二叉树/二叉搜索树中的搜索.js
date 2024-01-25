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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    // if(root === null || root.val === val) return root
    // let result = null
    // if(root.val > val) result = searchBST(root.left,val)
    // if(root.val < val) result = searchBST(root.right,val)
    // return result 
    while(root !== null){
        if(root.val > val){
            root = root.left
        } else if(root.val < val){
            root = root.right
        } else{
            return root
        }
    }
    return null
};