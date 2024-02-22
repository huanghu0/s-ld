/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const occ = new Set(); // 记录每个字符是否出现过
  const n = s.length;
  let rk = -1,ans = 0;
  for(let i = 0;i < n;i++){
    if(i !== 0){
      occ.delete(s[i - 1])
    }

    while(rk + 1 < n && !occ.has(s[rk + 1])){
      occ.add(s[rk + 1])
      rk += 1;
    }

    ans = Math.max(ans,rk - i + 1)

  }
  return ans;
};