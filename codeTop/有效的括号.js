// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 每个右括号都有一个对应的相同类型的左括号

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let len = s.length 
    if(len % 2 === 1) return false
    if(s[0] === ')' || s[0] === '}' || s[0] === ']') return false
    if(s === '') return true
    let stack = [];
    for(let i = 0;i < s.length;i++){
        if(s[i] === '(' || s[i] === '[' || s[i] === '{') stack.push(s[i])
        if(s[i] === ')'){
            if(stack[stack.length - 1] === '(') {
                stack.pop()
            }else{
                return false
            }  
        }
        if(s[i] === ']'){
            if(stack[stack.length - 1] === '[') {
                stack.pop()
            }else{
                return false
            }                 
        }
        if(s[i] === '}'){
            if(stack[stack.length - 1] === '{') {
                stack.pop()
            }else{
                return false
            }                 
        }        
    }
    return stack.length === 0
};

console.log(isValid("([)]"))