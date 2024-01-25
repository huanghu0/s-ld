/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    const traversal = (inorder, preorder,inorderBegin, inorderEnd, preorderBegin, preorderEnd) => {
        if (preorderBegin == preorderEnd) return null;

        let rootValue = preorder[preorderBegin]; // 前序遍历始终是第一个节点为根节点 去切割中序遍历 
        let root = new TreeNode(rootValue);

        if (preorderEnd - preorderBegin === 1) return root;

        let delimiterIndex = inorderBegin;
        while( delimiterIndex < inorderEnd ){
            if(inorder[delimiterIndex] === rootValue) break
            delimiterIndex++
        }

        // 切割中序数组
        // 中序左区间，左闭右开[leftInorderBegin, leftInorderEnd)
        let leftInorderBegin = inorderBegin;
        let leftInorderEnd = delimiterIndex;
        // 中序右区间，左闭右开[rightInorderBegin, rightInorderEnd)
        let rightInorderBegin = delimiterIndex + 1;
        let rightInorderEnd = inorderEnd;

        // 切割前序数组
        // 前序左区间，左闭右开[leftPreorderBegin, leftPreorderEnd)
        let leftPreorderBegin =  preorderBegin + 1;
        let leftPreorderEnd = preorderBegin + 1 + delimiterIndex - inorderBegin; // 终止位置是起始位置加上中序左区间的大小size
        // 前序右区间, 左闭右开[rightPreorderBegin, rightPreorderEnd)
        let rightPreorderBegin = preorderBegin + 1 + (delimiterIndex - inorderBegin);
        let rightPreorderEnd = preorderEnd;

        root.left = traversal(inorder, preorder,leftInorderBegin, leftInorderEnd, leftPreorderBegin, leftPreorderEnd);
        root.right = traversal(inorder, preorder,rightInorderBegin, rightInorderEnd, rightPreorderBegin, rightPreorderEnd);

        return root;
    }
    if (inorder.length === 0 || preorder.length === 0) return null;

    // 参数坚持左闭右开的原则
    return traversal(inorder,preorder, 0, inorder.length,  0, preorder.length);    
};