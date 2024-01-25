var invertTree = function(root) {
    // if(!root) return root
    // let queue = []
    // queue.push(root)
    // while(queue.length){
    //     let len = queue.length
    //     for(let i = 0;i < len;i++){
    //         let node = queue.shift();
    //         let right = node.right
    //         let left = node.left
    //         node.left = right
    //         node.right = left
    //         node.left && queue.push(node.left)
    //         node.right && queue.push(node.right)
    //     }
    // }
    // return root
    if(!root) return root
    let stack = []
    stack.push(root)
    while(stack.length){
        let node = stack.pop()
        if(node !== null){
            node.right && stack.push(node.right)
            node.left && stack.push(node.left)
            stack.push(node)
            stack.push(null)
        }else{
            node = stack.pop()
            let right = node.right
            let left = node.left
            node.left = right
            node.right = left
        }
    }
    return root
};