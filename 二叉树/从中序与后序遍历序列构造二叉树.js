/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    const traversal = (inorder,postorder,inorderBegin,inorderEnd,postorderBegin,postorderEnd) => {
        if(postorderBegin === postorderEnd) return null // 后序数组空了 没有节点
        let rootValue = postorder[postorderEnd - 1] // 找到当前根节点
        let root = new TreeNode(rootValue)
        if((postorderEnd - postorderBegin) === 1) return root
        
        let splitIndex = inorderBegin;
        // 找到中序数组的切割点 是每次遍历的后序数组的最后一个节点 这里用索引去代替
        while(splitIndex < inorderEnd){
            if(inorder[splitIndex] === rootValue) break
            splitIndex++
        }

        // 切割中序数组
        // 左中序区间，左闭右开[leftInorderBegin, leftInorderEnd)
        let leftInorderBegin = inorderBegin;
        let leftInorderEnd = splitIndex;
        // 右中序区间，左闭右开[rightInorderBegin, rightInorderEnd)
        let rightInorderBegin = splitIndex + 1;
        let rightInorderEnd = inorderEnd;

        // 切割后序数组
        // 左后序区间，左闭右开[leftPostorderBegin, leftPostorderEnd)
        let leftPostorderBegin =  postorderBegin;
        let leftPostorderEnd = postorderBegin + splitIndex - inorderBegin; // 终止位置是 需要加上 中序区间的大小size
        // 右后序区间，左闭右开[rightPostorderBegin, rightPostorderEnd)
        let rightPostorderBegin = postorderBegin + (splitIndex - inorderBegin);
        let rightPostorderEnd = postorderEnd - 1; // 排除最后一个元素，已经作为节点了

        root.left = traversal(inorder, postorder,leftInorderBegin, leftInorderEnd, leftPostorderBegin, leftPostorderEnd);
        root.right = traversal(inorder, postorder, rightInorderBegin, rightInorderEnd, rightPostorderBegin, rightPostorderEnd);

        return root;
    }
    if(inorder.length === 0 || postorder.length === 0) return null
    return traversal(inorder,postorder,0,inorder.length,0,postorder.length)
};