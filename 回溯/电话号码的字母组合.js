/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const result = []
  const map = ['','',"abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"]
  const backTracing = (digits,path,index) => {
    if(path.length === digits.length){
      result.push([...path].join(''))
      return
    }
    let m = map[digits[index]]
    for(let i = 0;i < m.length;i++){
      path.push(m[i])
      backTracing(digits,path,index+1)
      path.pop()
    }
  } 
  if(digits.length === 0) return result
  backTracing(digits,[],0)
  return result
};