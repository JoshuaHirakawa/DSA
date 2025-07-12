/// 55. Jump Game
// > Medium
/* You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise. 
*/
// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

// points: always start at index 0
// has to land on nums.length - 1

//strategy: iterate backwards from second to last element, each iteration, count steps taken and if current element == target index, update the target
// var canJump = function (nums) {
//   // define a target index starting at last element
//   let target = nums.length - 1;

//   //work backwards from second-to-last element
//   for (let i = nums.length - 2; i >= 0; i--) {
//     // checkk if current element plus index is greater than target
//     if (nums[i] + i >= target) {
//       //if so, reassign target
//       target = i;
//     }
//   }

//   // lastly check if target ends up on first index
//   return target === 0;
// };

//input: array of nums
//output: boolean
//strategy:
var canJump = function (nums) {
  let target = nums.length - 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] + i >= target) {
      target = i;
    }
  }
  return target === 0;
};
console.log(canJump([3, 2, 1, 0, 4])); // -> false
console.log(canJump([3, 4, 2, 1, 1, 2])); // -> true
