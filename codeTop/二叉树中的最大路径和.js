// 二叉树中的 路径 被定义为一条节点序列，序列中每对相邻节点之间都存在一条边。同一个节点在一条路径序列中 至多出现一次 。该路径 至少包含一个 节点，且不一定经过根节点。
// 路径和 是路径中各节点值的总和。
// 给你一个二叉树的根节点 root ，返回其 最大路径和 


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
 * @return {number}
 */
var maxPathSum = function(root) {
    let max = Number.MIN_SAFE_INTEGER;
    const maxGrain = (root) => {
        if(!root) return 0;
        let leftGrain = Math.max(0,maxGrain(root.left));
        let rightGrain = Math.max(0,maxGrain(root.right));
        max = Math.max(leftGrain+rightGrain+root.val,max)
        return root.val + Math.max(leftGrain,rightGrain)
    }
    maxGrain(root)
    return max
};