/// 189. Rotate Array
// > Medium
// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
/*

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
*/

// input: array of numbers, number of steps to rotate
// output: rotated array
// strategy: use placeholder to assign last element, and assign next element to current position, iterating backwards
var rotateBrute = function (nums, k) {
  let steps = k;
  // for loop to iterate backwards
  while (steps > 0) {
    //placeholder for lsat element
    const last = nums[nums.length - 1];
    for (let i = nums.length - 1; i > 0; i--) {
      nums[i] = nums[i - 1];
    }
    nums[0] = last;
    steps--;
  }
  return nums;
};

//time complexity: O(n * k)
//space complexity: O(1)
let nums = [1, 2, 3, 4, 5, 6, 7],
  k = 3;

// console.log(rotateBrute(nums, k)); //-> [5, 6, 7, 1, 2, 3, 4]

// optimized appraoch:
// reverse array, then reverse just the array minus number of steps needed
// then reverse the rest of the elements
var rotate = function (nums, k) {
  // edge case for when k is greater than nums
  const steps = k % nums.length;
  // helper to reverse array
  const reverse = (start, end) => {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  };

  //reverse the nums array [7, 6, 5, 4, 3, 2, 1]
  reverse(0, nums.length - 1);
  //split just k elements by reversing that back first [5, 6, 7, 4, 3, 2, 1]
  reverse(0, steps - 1);
  //reverse rest of the elements [5, 6, 7, 1, 2, 3, 4]
  reverse(steps, nums.length - 1);

  return nums;
};

console.log(rotate(nums, k)); //-> [5, 6, 7, 1, 2, 3, 4]
