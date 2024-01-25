// 给定一个非空的字符串 s ，检查是否可以通过由它的一个子串重复多次构成。
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let len = s.length;
    if(len === 0) return false
    const getNext = (s) => {
        let next = [];
        let j = 0;
        next[0] = 0;
        for(let i = 1;i < s.length;i++){
            while(j > 0 && s[i] !== s[j]){
                j = next[j - 1]
            }
            if(s[i] === s[j]){
                j++
            }
            next.push(j);
        }
        return next
    }
    let next = getNext(s)
    if(next[next.length - 1] !== 0 && len % (len- next[next.length -1]) === 0){
        return true
    }
    return false
};
 