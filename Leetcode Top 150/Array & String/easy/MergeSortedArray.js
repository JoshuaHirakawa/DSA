// * 88. Merge Sorted Array
// ; Easy
// Topics
// premium lock icon
// Companies
// Hint
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// input: two sorted array of integers, and two integers representing array lengths
// nums1 will be mutated into result
//strategy: use provided m and n as the index to iterate backwards
var merge = function (nums1, m, nums2, n) {
  // define i, j, k variable
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  // iterate over nums1 backwards to fill the cells with 0. This avoids overlap of actual integers
  while (i >= 0 && j >= 0) {
    // check if current val at i is greater than j
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    }
    //otherwise, we know that we can just place current nums2 val at j on nums1[k]
    else {
      nums1[k] = nums2[j];
      j--;
    }
    // at the end of each iteration, decrement k
    k--;
  }
  //if there are any elements left in nums2, we can just fill the rest of nums 1
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
  return nums1;
};

const nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;
console.log(merge(nums1, m, nums2, n)); // [1,2,2,3,5,6]
