var maxSubArray = function(nums) {
    let resArray = []
    let res = Number.MIN_SAFE_INTEGER
    let count = 0;
    let countArray = []
    for(let i = 0;i < nums.length;i++){
        count += nums[i]
        countArray.push(nums[i])
        if(count > res){
            res = count
            resArray = [...countArray]
        }
        if(count <= 0) {
            count = 0
            countArray = []
        } 
    }
    return resArray
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))