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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    // 二叉搜索树的中序遍历结果就是一个排好序的数组,取该数组中的第k - 1个值便是第k小的元素
    // let res = null
    // let stack = [];
    // const dfs = function(root){
    //     if(!root) return
    //     dfs(root.left)
    //     stack.push(root)
    //     dfs(root.right)
    // }
    // dfs(root)
    // res = stack[k-1] ? stack[k - 1].val : null
    // return res

    // 优化上面是遍历了全部的节点,找第k小的元素只需要遍历第k个节点即可
    const stack = [];
    while (root != null || stack.length) {
        while (root != null) { // 先将每个节点的左子节点入栈
            stack.push(root);
            root = root.left;
        }
        root = stack.pop(); // 开始遍历 将后入栈的左节点弹出
        k -= 1
        if (k === 0) { // 遍历到第k个 跳出循环
            break;
        }
        root = root.right;
    }
    return root.val;
};