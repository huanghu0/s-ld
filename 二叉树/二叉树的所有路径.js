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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    // 本体思路比较简单 话不多说了直接上代码
    // dfs是深度优先 bfs 是宽度优先
    // let paths = []
    // const dfs = function(root,path){
    //     if(!root) return 
    //     if(!root.left && !root.right){
    //         paths.push(path)
    //     }else{
    //         if(root.left){
    //             dfs(root.left,`${path}->${root.left.val}`)
    //         }
    //         if(root.right){
    //             dfs(root.right,`${path}->${root.right.val}`)
    //         }
    //     }
    // }
    // dfs(root,`${root.val}`)
    let paths = []
    const bfs = function(root){
        let node_queue = []
        let path_queue = []
        node_queue.push(root)
        path_queue.push(`${root.val}`)
        while(node_queue.length){
            let node = node_queue.shift();
            let path = path_queue.shift();
            if(!node.left && !node.right){
                paths.push(path)
            }else{
                if(node.left){
                    node_queue.push(node.left)
                    path_queue.push(`${path}->${node.left.val}`)
                }
                if(node.right){
                    node_queue.push(node.right)
                    path_queue.push(`${path}->${node.right.val}`)
                }
            }
        }
    }
    bfs(root)
    return paths
};