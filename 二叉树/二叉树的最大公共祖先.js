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
    // 二叉树的最大公共祖先,
    // 将每个节点的父节点用map记录下来
    // 从p节点往回沿着父节点遍历到根节点,将遍历的节点路径保存在一个数组reverse_path_p中作为到p节点到root的路径
    // 再从q节点往回沿着父节点遍历到根节点,第一个存在于reverse_path_p中的节点便是最大公共祖先
    let map = new Map();
    let reverse_path_p = [];
    let res = null;
    const dfs = function(root){
        if(!root) return 
        if(root.left){ // 将每个节点的父节点保存起来
            map.set(root.left.val,root)
        }
        if(root.right){ // 将每个节点的父节点保存起来
            map.set(root.right.val,root)
        }
        dfs(root.left)
        dfs(root.right)
    }
    dfs(root)
    while(p){ // 寻找p 到 root 的路径
        reverse_path_p.push(p.val)
        p = map.get(p.val)
    }
    while(q){ // 从q 到 root 的路径中找第一个出现在q到root路径中的节点
        if(reverse_path_p.includes(q.val)){
            res = q
            break
        }
        q = map.get(q.val)
    }
    return res
};