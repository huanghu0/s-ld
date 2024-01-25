// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

/**
 * @param {number[]} height
 * @return {number}
 */
// 动态规划
var trap = function(height) {
    let len = height.length;
    let maxLeft = new Array(len)
    let maxRight = new Array(len)
    let result = 0
    maxLeft[0] = height[0]
    maxRight[len - 1] = height[len - 1]
    for(let i = 1;i < len;i++){
        maxLeft[i] = Math.max(maxLeft[i - 1],height[i])
    }
    for(let i = len - 2;i >= 0;i--){
        maxRight[i] = Math.max(maxRight[i + 1],height[i])
    }
    for(let i = 1;i < len - 1;i++){
        let h = Math.min(maxLeft[i],maxRight[i]) - height[i]
        if(h > 0) result += h
    }
    return result
};
// 单调栈
var trap = function(height) {
    const len = height.length;
    if(len <= 2) return 0; // 可以不加
    const st = [];// 存着下标，计算的时候用下标对应的柱子高度
    st.push(0);
    let sum = 0;
    for(let i = 1; i < len; i++){
        if(height[i] < height[st[st.length - 1]]){ // 情况一
            st.push(i);
        }
        if (height[i] == height[st[st.length - 1]]) {  // 情况二
            st.pop(); // 其实这一句可以不加，效果是一样的，但处理相同的情况的思路却变了。
            st.push(i);
        } else { // 情况三
            while (st.length !== 0 && height[i] > height[st[st.length - 1]]) { // 注意这里是while
                let mid = st[st.length - 1];
                st.pop();
                if (st.length !== 0) {
                    let h = Math.min(height[st[st.length - 1]], height[i]) - height[mid];
                    let w = i - st[st.length - 1] - 1; // 注意减一，只求中间宽度
                    sum += h * w;
                }
            }
            st.push(i);
        }
    }
    return sum;
};

// 双指针
var trap = function(height) {
    let ans = 0;
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    while (left < right) {
        leftMax = Math.max(leftMax, height[left]);
        rightMax = Math.max(rightMax, height[right]);
        if (height[left] < height[right]) {
            ans += leftMax - height[left];
            ++left;
        } else {
            ans += rightMax - height[right];
            --right;
        }
    }
    return ans;
};