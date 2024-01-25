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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    // if(root === null) return root;
    // if(root.val === key){
    //     if(root.left === null && root.right === null){
    //         delete root
    //         return null
    //     }else if(root.left === null){
    //         let tempRoot = root.right
    //         delete root
    //         return tempRoot
    //     }else if(root.right === null){
    //         let tempRoot = root.left
    //         delete root
    //         return tempRoot
    //     }else{
    //         let cur = root.right
    //         while(cur.left !== null){
    //             cur = cur.left
    //         }
    //         cur.left = root.left
    //         let temp = root
    //         root = root.right
    //         delete temp
    //         return root
    //     }
    // }
    // if(root.val > key) root.left = deleteNode(root.left,key)
    // if(root.val < key) root.right = deleteNode(root.right,key)
    // return root;
    const deleteOneNode = (target) => {
        if(target === null) return target;
        if(target.right === null) return target.left;
        let cur = target.right
        while(cur.left){
            cur = cur.left
        }
        cur.left = target.left
        return target.right
    }
    if(root === null) return root
    let cur = root
    let pre = null
    while(cur){
        if(cur.val === key) break;
        pre = cur
        if(cur.val > key) cur = cur.left
        else cur = cur.right
    }

    if(pre === null){
        return deleteOneNode(cur)
    }

    if(pre.left && pre.left.val === key){
        pre.left = deleteOneNode(cur)
    }

    if(pre.right && pre.right.val === key){
        pre.right = deleteOneNode(cur)
    }

    return root
};