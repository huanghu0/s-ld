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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {

  let result = []
  const backTracking = (root,sum,path) => {
    if(root.left === null && root.right === null && sum === 0) {
      result.push([...path])
      return
    }

    if(root.left === null && root.right === null) return 


    if(root.left){
      sum -= root.left.val
      path.push(root.left.val)
      backTracking(root.left,sum,path)
      sum += root.left.val
      path.pop()
    }

    if(root.right){
      sum -= root.right.val
      path.push(root.right.val)
      backTracking(root.right,sum,path)
      sum += root.right.val
      path.pop()
    }

  }
  if(root === null) return result
  backTracking(root,targetSum - root.val,[root.val])
  return result  

};