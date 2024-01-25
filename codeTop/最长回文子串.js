// 给你一个字符串 s，找到 s 中最长的回文子串。
// 如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    // let len = s.length;
    // let res = '';
    // let dp = new Array(len).fill(false).map(() => new Array(len).fill(false));
    // for(let j = 0;j < len;j++){
    //     for(let i = 0;i <= j;i++){
    //         if(i === j) dp[i][j] = true
    //         else if(j - i === 1) dp[i][j] = s[i] === s[j]
    //         else{
    //             dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j] || false
    //         }
    //         if(j - i + 1 > res.length && dp[i][j] === true){
    //             res = s.slice(i,j+1)
    //         }
    //     }
    // }
    // return res

    let len = s.length;
    let res = '';
    const expandAroundCenter = (i,j) => {
        while(i >= 0 && j < len && s[i] === s[j]){
            i--
            j++
        }
        if(j - i - 1 > res.length){
            res = s.slice(i+1,j)
        }
    }
    for(let i = 0;i < s.length;i++){
        expandAroundCenter(i,i)
        expandAroundCenter(i,i+1)
    }
    return res
};

console.log(longestPalindrome('babad'))