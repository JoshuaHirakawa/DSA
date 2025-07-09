/// 283 Move Zeros
// ; Easy

/* 
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
*/

// input: array of nums
// output: same array with 0's at end
// strategy: have two pointers right = 1 and left = 0, if num at left = 0 but right doesnt, swap. If both nums equal 0, increment right
var moveZeros = function (nums) {
  //define a left and right pointer
  let left = 0,
    right = 1;

  // iterate as long as right is less than array length
  while (right < nums.length) {
    // swap if only left num is 0
    if (nums[left] === 0 && nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    } // if both are 0, just increment right
    else if (nums[left] === 0 && nums[right] === 0) right++;
    // if both are non-zeros increment both
    else {
      left++;
      right++;
    }
  }
  return nums;
};

console.log(moveZeros([0, 1, 0, 3, 12, 0, 0, 2, 3, 4, 5, 0, 5]));
console.log(moveZeros([1, 0, 1]));
