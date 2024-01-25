// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

// 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let map = new Map();
    let len1 = s.length;
    let len2 = t.length;
    if(len1 !== len2) return false
    for(let i = 0;i < len1;i++){
        if(!map.has(s[i])){
            map.set(s[i],1)
        }else{
            map.set(s[i],map.get(s[i]) + 1)
        }
    }
    for(let i = 0;i < len2;i++){
        if(!map.has(t[i])){
            return false
        }else{
            map.set(t[i],map.get(t[i]) - 1)
        }
    }
    for(let val of map.values()){
        if(val !== 0){
            return false
        }
    }
    return true
};