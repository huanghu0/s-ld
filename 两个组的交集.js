// 给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    // 根据数组大小交换操作的数组
    if(nums1.length < nums2.length) {
        const _ = nums1;
        nums1 = nums2;
        nums2 = _;
    }
    const nums1Set = new Set(nums1);
    const resSet = new Set();
    for(let i = nums2.length - 1; i >= 0; i--) {
        nums1Set.has(nums2[i]) && resSet.add(nums2[i]);
    }
    return Array.from(resSet);
};