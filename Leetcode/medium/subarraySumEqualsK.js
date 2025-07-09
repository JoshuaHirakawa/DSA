/// 560. Subarray Sum Equals K
// > Medium
// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

// A subarray is a contiguous non-empty sequence of elements within an array.

/*
Example 1:

Input: nums = [1,1,1], k = 2
Output: 2

Example 2:

Input: nums = [1,2,3], k = 3
Output: 2

*/

// var subarraySum = function (nums, k) {
//   let counter = 0;
//   const helper = (sub, sum, index) => {
//     // basecase: if currrent index is greater than length, return
//     if (index > nums.length - 1) return;
//     // if sum of current subarray = k, increment counter
//     if (sum === k) counter++;

//     //recursive call: add current number to sub array or dont
//     helper([...sub, nums[index]], sum + nums[index], index + 1);
//     helper(sub, sum, index + 1);
//   };
//   //invoke helper
//   helper([], 0, 0);

//   return counter;
// };

// console.log(subarraySum([1, 1, 1], 2));

// var subarraySum = function (nums, k) {
//   let counter = 0;
//   // hash map:
//   const hash = new Map();
//   let sum = 0;
//   hash.set(0, 1);
//   for (let num of nums) {
//     if (hash.get(sum - k)) {
//       counter++;
//     }
//   }

//   return counter;
// };

// console.log(subarraySum([1, 1, 1], 2));
//input: array of nums and a target num
//strategy, use a prefix sum hash map to see if any sums before current sum equal the different between current sum and k
var subarraySum = function (nums, k) {
  let sum = 0;
  // create counter,
  let counter = 0;
  // initiate a hash map to store prefix sums
  const hash = new Map();
  hash.set(0, 1);
  //iterate over nums
  for (let num of nums) {
    //with each iteration calculate new sum
    sum += num;
    // check if sum minus k exists in prefix hash
    if (hash.has(sum - k)) {
      //if so, increment counter by the corresponding value
      counter += hash.get(sum - k);
    }
    // add current sum to prefix
    hash.set(sum, (hash.get(sum) || 0) + 1);
  }

  //return counter
  return counter;
};

console.log(subarraySum([1, 3, 5, 4, 3, 7], 7)); // -> 2
console.log(subarraySum([-1, -1, 1], 0)); // -> 1
