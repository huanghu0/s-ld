// 给定一个二叉树，找出其最小深度。

// 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

// 说明：叶子节点是指没有子节点的节点。

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
var minDepth = function(root) {
    // if (root === null) return 0;
    // let queue = [root];
    // let height = 0;
    // while (queue.length) {
    //     let curLevelLength = queue.length;
    //     height++;
    //     for (let i=0; i<curLevelLength; i++) {
    //         let node = queue.shift();
    //         // 如果左右节点都是null(在遇见的第一个leaf节点上)，则该节点深度最小
    //         if (node.left === null && node.right === null) {
    //             return height;
    //         }
    //         node.left && queue.push(node.left);;
    //         node.right && queue.push(node.right);
    //     }
    // }
    // return height;
    if(root === null) return 0;
    if(root.left === null && root.right === null) return 1;
    let min_depth = Number.MAX_SAFE_INTEGER;
    if(root.left){
        min_depth = Math.min(minDepth(root.left),min_depth);
    }
    if(root.right){
        min_depth = Math.min(minDepth(root.right),min_depth);
    }
    return min_depth + 1;
};