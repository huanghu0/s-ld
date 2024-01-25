/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }
// let root = new TreeNode(1)
// let a = new TreeNode(2)
// let b = new TreeNode(3)
// let c = new TreeNode(4)
// let d = new TreeNode(5)
// let e = new TreeNode(6)
// root.left = a 
// root.right = b
// a.left = c
// a.right = d
// b.left = e
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
    // const dfs = function(root){
    //     if(!root) return
    //     num += 1
    //     dfs(root.left)
    //     dfs(root.right)
    // } 
    // let num = 0
    // dfs(root)
    // return num
    // const getNum = (root) => {
    //     if(!root) return 0
    //     let lf = getNum(root.left)
    //     let rd = getNum(root.right)
    //     let result = 1 + lf + rd
    //     return result
    // }    
    // return getNum(root)
    //层序遍历
    // let queue = [];
    // if(root === null) {
    //     return 0;
    // }
    // queue.push(root);
    // let nodeNums = 0;
    // while(queue.length) {
    //     let length = queue.length;
    //     while(length--) {
    //         let node = queue.shift();
    //         nodeNums++;
    //         node.left && queue.push(node.left);
    //         node.right && queue.push(node.right);
    //     }
    // }
    // return nodeNums;    
    //利用完全二叉树的特点
    if(root === null) {
        return 0;
    }
    let left = root.left;
    let right = root.right;
    let leftDepth = 0, rightDepth = 0;
    while(left) {
        left = left.left;
        leftDepth++;
    }
    while(right) {
        right = right.right;
        rightDepth++;
    }
    if(leftDepth == rightDepth) {
        return Math.pow(2, leftDepth+1) - 1;
    }
    return countNodes(root.left) + countNodes(root.right) + 1;    
};
console.log(countNodes(root))