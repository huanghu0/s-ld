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
 * @return {TreeNode}
 */
var convertBST = function(root) {
    // let pre = 0
    // const traversal = (cur) => {
    //     if(cur === null) return;
    //     traversal(cur.right)
    //     cur.val += pre
    //     pre = cur.val
    //     traversal(cur.left)
    // }
    // traversal(root)
    // return root

    let pre = 0
    let stack = []
    let cur = root
    while(cur !== null || stack.length !== 0){
        if(cur !== null){
            stack.push(cur)
            cur = cur.right
        }else{
            cur = stack.pop()
            cur.val += pre
            pre = cur.val
            cur = cur.left
        }
    }
    return root
  
    
};