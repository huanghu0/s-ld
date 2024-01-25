/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {
    let nums = [];
    const checkNumNotBeginZero = (str) => {
        if (str[0] === '0' && str.length > 1) return false; 
        return true; 
    }
    const backTracking = (num,curStart) => {
        if(nums.length >= 3){ // 回溯条件
            if(Number(nums[nums.length -1]) !== Number(nums[nums.length - 2]) + Number(nums[nums.length - 3])){
                return false
            } 
            if(curStart === num.length){
                return true
            } 
        }
        for(let curEnd = curStart + 1;curEnd <= num.length;curEnd++){
            let curStr = num.slice(curStart,curEnd)
            if(!checkNumNotBeginZero(curStr)) continue // 剪枝去掉以0开通要的数字
            nums.push(curStr) // 将出现过的数保存
            let res = backTracking(num,curEnd) // 进行递归
            if(res) { // 所有的回溯 完成返回true
                return true
            }else { // 这一层递归如果返回false,说明当前取得值已经不符合累加数,需要将这一层存的数字去掉,重新取数
                nums.pop() 
            }
        }
        return false
    }
    return backTracking(num,0)
};