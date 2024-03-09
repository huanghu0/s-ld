var permute = function(nums) {
  const res = [], path = [];
  nums.sort((a,b) => a -b)
  function backtracking(n, k, used) {
      if(path.length === k) {
          res.push(Array.from(path));
          return;
      }
      for (let i = 0; i < k; i++ ) {
          if(used[i]) continue;
          if(i > 0 && n[i] === n[i-1] && used[i -1] === false) continue
          path.push(n[i]);
          used[i] = true; // 同支
          backtracking(n, k, used);
          path.pop();
          used[i] = false;
      }
  }

  backtracking(nums, nums.length, []);
  return res;  
};