var levelOrder = function(root){
    let result = []
    let q = []
    if(!root){
        return result
    }
    q.push(root)
    while(q.length){
        let res = []
        let curLen = q.length
        for(let i = 0;i < curLen;i++){
            let node = q.shift()
            res.push(node.val)
            if(node.left) q.push(node.left)
            if(node.right) q.push(node.right)
        }
        result.push(res)
    }
    return result
}