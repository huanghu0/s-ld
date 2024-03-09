var subsetsWithDup = function(nums) {
  let result = []
  let path = []
  let used = new Array(nums.length).fill(false)
  nums.sort((a, b) =>  a - b)
  function backtracing(startIndex,used) {
      result.push([...path])
      if(startIndex >= nums.length) return
      for(let i = startIndex; i < nums.length; i++) {
          if(i > 0 && nums[i] === nums[i - 1] && used[i -1] === false) {
            continue
          }
          path.push(nums[i])
          used[i] = true
          backtracing(i + 1,used)
          used[i] = false
          path.pop()
      }
  }
  backtracing(0,used)
  return result
};