// 题目描述:
// 给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
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
 * @return {number[]}
 */
var rightSideView = function(root) {
    // 层序遍历思想 遍历时从又开始遍历并且记下层号 结果中只保留相同层号最右边的即可(即每一层从右遍历第一个)
    let queue = []
    let res = [] 
    if(!root) return []
    let ro = {
        node:root,
        level:0 // 节点对应的层 根节点在0层
    }
    let nowLevel = -1 // 当前层
    queue.push(ro)
    while(queue && queue.length){
        let temp = queue.shift();
        let tempNode = temp.node
        let tempLevel = temp.level;
        if(tempNode.right){
            let o = {
                node:tempNode.right,
                level:tempLevel+1
            }
            queue.push(o)
        }
        if(tempNode.left){
            let o = {
                node:tempNode.left,
                level:tempLevel+1
            }
            queue.push(o)            
        }
        if(tempLevel !== nowLevel){ // 说明往下遍历了一层
            nowLevel = tempLevel // 此时读到了右边第一个 把当前层记录下 同层的不在放入结果
            res.push(tempNode.val)
        }
    }
    return res
};