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
var findMode = function(root) {

    let maxCount = 0
    let count = 0
    let pre = null
    let result = []
    let stack = []
    let cur = root    
    while(cur !== null || stack.length !== 0){
        if(cur !== null){
            stack.push(cur)
            cur = cur.left
        }else{
            cur = stack.pop()
            if(pre === null) {
                count = 1
            }else if (pre.val === cur.val){
                count += 1
            }else{
                count = 1
            }
            pre = cur
            if(count === maxCount){
                result.push(cur.val)
            }
            if(count > maxCount){
                maxCount = count
                result = []
                result.push(cur.val)
            }
            pre = cur
            cur = cur.right
        }
    }
    return result
};