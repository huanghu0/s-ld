/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    const traversal = (nums,left,right) => {
        if(left > right) return null;
        let mid = left + Math.floor((right - left) / 2)
        let root = new TreeNode(nums[mid])
        root.left = traversal(nums,left,mid - 1)
        root.right = traversal(nums,mid+1,right)
        return root 
    }
    let root = traversal(nums,0,nums.length - 1)
    return root;
};