// 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串的第一个匹配项的下标（下标从 0 开始）。如果 needle 不是 haystack 的一部分，则返回  -1 。

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle.length === 0) return 0
    const getNext = (needle) => {
        let next = [];
        let j = 0;
        next[0] = 0;
        for(let i = 1;i < needle.length;i++){
            while(j > 0 && needle[i] !== needle[j]){
                j = next[j - 1]
            }
            if(needle[i] === needle[j]){
                j++
            }
            next.push(j);
        }
        return next
    }
    let next = getNext(needle)
    let j = 0
    for(let i = 0;i < haystack.length;i++){
        while(j > 0 && haystack[i] !== needle[j]){
            j = next[j -1]
        }
        if(haystack[i] === needle[j]){
            j++
        }
        if(j === needle.length){
            return i - needle.length + 1
        }
    }
    return -1
};
