// 给你四个整数数组 nums1、nums2、nums3 和 nums4 ，数组长度都是 n ，请你计算有多少个元组 (i, j, k, l) 能满足：

// 0 <= i, j, k, l < n
// nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    let result = 0
    let len = nums1.length; // 长度一样
    if(4 * len < 4) return result
    let map = new Map();
    for(let i = 0;i < len;i++){
        for(let j = 0;j < len;j++){
            if(map.has(nums1[i] + nums2[j])){   
                map.set(nums1[i]+nums2[j],map.get(nums1[i]+nums2[j]) + 1)
            }else{
                map.set(nums1[i] + nums2[j],1)
            }
        }
    }

    for(let i = 0;i < len;i++){
        for(let j = 0;j < len;j++){
            if(map.has(-(nums3[i] + nums4[j]))){
                result += map.get(-(nums3[i] + nums4[j]))
            }
        }
    }
    return result
};

