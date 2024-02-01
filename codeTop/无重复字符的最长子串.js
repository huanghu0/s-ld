// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = new Map();
    let max = 0,start = 0;
    // let maxStr = '';
    for(let end = 0;end < s.length;end++){
        let endChar = s[end]
        if(map.has(endChar)){
            start = Math.max(map.get(endChar) + 1,start) 
        }
        max = Math.max(max,end - start + 1)
        // maxStr = maxStr.length > s.slice(start,end+1).length ? maxStr : s.slice(start,end+1)
        map.set(endChar,end)
    }
    return max
};

console.log(lengthOfLongestSubstring('abcabcbb'))