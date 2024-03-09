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
    // let paths = []
    // const bfs = function(root){
    //     let node_queue = []
    //     let path_queue = []
    //     node_queue.push(root)
    //     path_queue.push(`${root.val}`)
    //     while(node_queue.length){
    //         let node = node_queue.shift();
    //         let path = path_queue.shift();
    //         if(!node.left && !node.right){
    //             paths.push(path)
    //         }else{
    //             if(node.left){
    //                 node_queue.push(node.left)
    //                 path_queue.push(`${path}->${node.left.val}`)
    //             }
    //             if(node.right){
    //                 node_queue.push(node.right)
    //                 path_queue.push(`${path}->${node.right.val}`)
    //             }
    //         }
    //     }
    // }
    // bfs(root)
    // return paths

    const result = []
    const backTracking = (root,path) => {
      if(!root) return
      if(root.left === null && root.right === null){
        path.push(root.val)
        result.push(path.join('->'))
        return
      }
      path.push(root.val)
      if(root.left){
        backTracking(root.left,path)
        path.pop()
      }
      if(root.right){
        backTracking(root.right,path)
        path.pop()
      }
    }
    backTracking(root,[])

    return result
};