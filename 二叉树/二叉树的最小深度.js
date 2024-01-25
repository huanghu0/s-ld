var minDepth = function(root) {
    // const getDepth = (root) => {
    //     if(root === null) return 0
    //     let lf = getDepth(root.left)
    //     let rh = getDepth(root.right)
    //     if(root.left === null && root.right !== null){
    //         return 1 + rh
    //     }
    //     if(root.left !== null && root.right === null){
    //         return 1 + lf
    //     }        
    //     let result = 1 + Math.min(lf,rh)
    //     return result
    // }
    // return getDepth(root)
    let result = Number.MAX_SAFE_INTEGER
    const getDepth = (root,dep) => {
        if(root === null) return 

        if(root.left === null && root.right === null){
            result = Math.min(result,dep) 
        }

        if(root.left){
            getDepth(root.left,dep+1)
        }

        if(root.right){
            getDepth(root.right,dep+1)
        }        
        return 
    }
    if(!root) return 0
    getDepth(root,1)
    return result
};