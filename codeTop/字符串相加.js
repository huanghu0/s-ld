/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let i = num1.length - 1,j = num2.length - 1;
    let add = 0;
    let result = [];
    while(i >= 0 || j >= 0 || add !== 0){
        let x = i >= 0 ? num1[i] - '0' : 0;
        let y = j >= 0 ? num2[j] - '0' : 0;
        let res = add + x + y
        result.unshift(res % 10);
        add = Math.floor(res / 10); 
        i--;
        j--;
    }
    return result.join('');
};