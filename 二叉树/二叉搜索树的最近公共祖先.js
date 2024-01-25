/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // 二叉搜索树的特点是:左子树比根节点小 右子树比根节点大
    // 我们遍历这个二叉搜索树,
    // 如果当前节点比p,q都大说明p,q都在当前节点左边,
    // 如果比p,q都小则p,q在当前节点右边
    // 当遇到不满足上面的两个条件的节点时,该节点就是分叉点,及我们要找的最近公共祖先
    let now = root
    while(now){
        if(now.val > p.val && now.val > q.val){ // 当前节点比p,q都大说明p,q都在当前节点左边
            now = now.left
        }else if(now.val < p.val && now.val < q.val){ // 当前节点比p,q都小则p,q在当前节点右边
            now = now.right
        }else{ // 遇到第一个不满足上面的两个条件的节点,及我们要找的最近公共祖先
            break;
        }
    }
    return now
};