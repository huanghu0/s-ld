// 给定一个整数数组 temperatures ，表示每天的温度，返回一个数组 answer ，其中 answer[i] 是指对于第 i 天，下一个更高温度出现在几天后。如果气温在这之后都不会升高，请在该位置用 0 来代替。


/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let len = temperatures.length
    let stack = [];
    let result = new Array(len).fill(0)
    if(len === 1) return []
    stack.push(0)
    for(let i = 1;i < len;i++){
        if(temperatures[i] < temperatures[stack[stack.length - 1]]){
            stack.push(i)
        }else if (temperatures[i] === temperatures[stack[stack.length - 1]]){
            stack.push(i)
        }else{
            while(stack.length !== 0 && temperatures[i] > temperatures[stack[stack.length - 1]]){
                let j = stack.pop();
                result[j] = (i - j)
            }
            stack.push(i)
        }
    }
    return result
};
console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))