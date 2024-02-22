/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  const ori = new Map()
  const cnt = new Map()

  // 如何判断当前的窗口包含所有 ttt 所需的字符
  const check = () => {
    const oriKeys = ori.keys()
    for(let i of oriKeys){
      if(cnt.get(i) < ori.get(i) || !cnt.get(i)){
        return false
      }
    }
    return true
  }

  const tLen = t.length

  for(let i = 0;i < tLen;i++){
    let c = t[i]
    if(!ori.has(c)){
      ori.set(c,1)
    }else{
      ori.set(c,ori.get(c)+1)
    }
  }

  let l = 0,r = -1;
  let len = Number.MAX_SAFE_INTEGER,ansL = -1,ansR = -1;
  let sLen = s.length;
  
  while(r < sLen){
    ++r;
    if(r < sLen && t.indexOf(s[r]) > -1){
      if(cnt.has(s[r])  ){
        cnt.set(s[r],cnt.get(s[r]) + 1)
      }else{
        cnt.set(s[r],1)
      }
    }

    while(check() && l <= r){
      if(r - l + 1 < len){
        len = r - l + 1
        ansL = l;
        ansR = l + len;
      }

      if(t.indexOf(s[l]) > -1){
        cnt.set(s[l],cnt.get(s[l]) - 1)
      }

      ++l;
    }
  }

  return ansL === -1 ? "" : s.substring(ansL,ansR)

};