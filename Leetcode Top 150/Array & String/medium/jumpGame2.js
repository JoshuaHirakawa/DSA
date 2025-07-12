/// 45.  Jump Game II
// > Medium
/*
 You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

0 <= j <= nums[i] and
i + j < n
Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].
Example 1:

Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [2,3,0,1,4]
Output: 2
*/

// input: array of integers
// output: number representing min number of steps to get to last element
// there is defenitely one way to get to nums[n - 1]
// always start at first num nums[0]
// somehow calculate the least number of steps. So max steps per iteration
var jump = function (nums) {
  if (nums.length <= 1) return 0;
  // define a max variable to hold max reachable index
  // define a range variable to track endpoint of the current jump
  let max = 0;
  let range = 0;
  let jumps = 0;

  //iterate over nums array
  for (let i = 0; i < nums.length - 1; i++) {
    //update max every iteration
    max = Math.max(max, i + nums[i]);

    //check if current iteration is last of the range
    if (range === i) {
      jumps++;
      // set new jump range
      range = max;
      // when we set a new range, if we can reach last element, terminate
      if (range >= nums.length - 1) break;
    }
  }
  return jumps;
};

console.log(jump([2, 3, 1, 1, 4])); // -> 2
