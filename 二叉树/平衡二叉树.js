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
 * @return {boolean}
 */
var isBalanced = function(root) {
    const maxDepth = function(root) {
        if(!root) return 0
        let count = 0
        const queue = [root]
        while(queue.length) {
            let size = queue.length
            /* 层数+1 */
            count++
            while(size--) {
                let node = queue.shift();
                node.left && queue.push(node.left);
                node.right && queue.push(node.right);
            }
        }
        return count
    };
    if(root === null) return true
    let stack = [root]
    while(stack.length){
        let node = stack.pop()
        if(Math.abs(maxDepth(node.left) - maxDepth(node.right)) > 1){
            return false
        }
        if(node.right) stack.push(node.right)
        if(node.left) stack.push(node.left)
    }
    return true
};