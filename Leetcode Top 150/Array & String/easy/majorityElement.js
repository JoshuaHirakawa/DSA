/// 169. Majority Element
// ; Easy
/* 
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3


Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

Could you solve the problem in linear time and in O(1) space?
*/
// notes: majority = greater than [n/2] | there will always be a mojority element
// input: array of nums
//output: one number representing majority element
// var majorityElement = function (nums) {
//   const cache = {};
//   for (let num of nums) {
//     if (!cache[num]) cache[num] = 1;
//     else cache[num]++;
//   }
//   console.log(cache);
//   let count = 0;
//   let majority = 0;
//   for (let num in cache) {
//     console.log('num:,', num);
//     if (cache[num] > count) {
//       majority = num;
//       count = cache[num];
//     }
//   }
//   return majority;
// };
// time: O(n) linear, because we iterate over the entire array to create cache
// space: O(n) linear, because we need to create a cache to store each num as property

// Optimized
//use a counter to keep track of the majority appearances
// if the counter drops to 0, we can assign a new majority value
// return whatever is the majority when we finish iterating
// this works because more than n/2 elements are going to be the majority num so we will always end up with more of that number
var majorityElement = function (nums) {
  // define counter and majority num
  let majority = null;
  let counter = 0;
  //iterate over nums
  for (let num of nums) {
    // if counter is 0, set current num as majority
    if (counter === 0) majority = num;
    // if current num is equal to majority num, increment, otherwise decrement
    majority === num ? (counter += 1) : (counter -= 1);
  }
  // return majority at the end
  return majority;
};
console.log(majorityElement([1, 2, 2, 2, 1, 1, 1]));
console.log(majorityElement([2, 2, 1]));
console.log(majorityElement([4, 5, 3, 2, 3, 5, 4, 6, 5]));
