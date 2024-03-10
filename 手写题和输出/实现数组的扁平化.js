let arr = [1, [2, [3, 4, 5]],[6,7,8],[9,10,11]];
function flatten(arr) {
  let result = [];

  for(let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}


function flatten(arr){
    let result = []
    const backTrackking = (arr) => {
        if(!Array.isArray(arr)){
            result.push(arr)
            return
        }
        for(let i = 0;i < arr.length;i++){
            backTrackking(arr[i])
        }
    }
    backTrackking(arr)
    return  result
}


function flatten(arr) {
    return arr.reduce(function(initVal, cur){
        return initVal.concat(Array.isArray(cur) ? flatten(cur) : cur)
    }, [])
}