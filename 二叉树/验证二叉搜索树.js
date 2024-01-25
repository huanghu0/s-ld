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
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
let root = new TreeNode(5);
let a = new TreeNode(1);
let b = new TreeNode(4);
let c = new TreeNode(3);
let d = new TreeNode(8);
root.left = a;
root.right = b;
b.left = c;
b.right = d;
var isValidBST = function(root) {
    let stack = [];
    let cur = root;
    let pre = null; // 记录前一个节点
    while (cur !== null || stack.length !== 0) {
        console.log(cur,pre,stack)
        if (cur !== null) {
          stack.push(cur);
          cur = cur.left;                // 左
        } else {                // 中
          cur = stack.pop();
          if (pre !== null && cur.val <= pre.val) return false;
          pre = cur; //保存前一个访问的结点
          cur = cur.right;               // 右
        }
    }
    return true;  
};

console.log(isValidBST(root))