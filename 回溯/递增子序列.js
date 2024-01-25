/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    let result = []
    let res = []
    const backTracking = (nums,res,curIndex) => { // 回溯递归函数
        if(res.length >= 2){ 
            result.push([...res])
        }
        // used用于该层是否使用过相同的数字
        // 同一父节点下的同层上使用过的元素就不能再使用了,这里是树枝去重(和树层去重有区别)
        let used = [] // 每一层遍历到的时候会重新置空
        // 回溯遍历过程
        for(let i = curIndex;i < nums.length;i++){
            if((res.length > 0 && nums[i] < res[res.length -1]) || used.includes(nums[i])){
                continue
            }
            res.push(nums[i])
            used.push(nums[i])
            backTracking(nums,res,i+1) // 回溯
            res.pop()
        }
        return
    }
    backTracking(nums,res,0)
    return result
};
console.log(findSubsequences([4,4,3,2,1,4,4,3,2,1]))