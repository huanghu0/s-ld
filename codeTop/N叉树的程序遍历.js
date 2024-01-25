// 给定一个 N 叉树，返回其节点值的层序遍历。（即从左到右，逐层遍历）。

// 树的序列化输入是用层序遍历，每组子节点都由 null 值分隔（参见示例）。
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result = []
    if(!root) return result
    let q = [root]
    while(q.length){
        let curLevelLength = q.length
        result.push([])
        for(let i = 0;i < curLevelLength;i++){
            let node = q.shift()
            result[result.length - 1].push(node.val)
            for(let j = 0; j < node.children.length;j++){
                q.push(node.children[j])
            }
        }
    }
    return result
};