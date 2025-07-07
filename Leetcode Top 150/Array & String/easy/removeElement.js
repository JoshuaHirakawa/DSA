/// 27. Remove Element
// ; Easy
// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.
// strategy: two points, left and right. Left traverses if elemnt is not target. Right is decremented when it is assigned in place of left num.
// input: array of nums, target value (number)
//output: number representing number of non val nums
var removeElement = function (nums, val) {
  //declare left and right pointers
  let left = 0,
    right = nums.length - 1;
  //while loop as long as left pointer is less than right
  while (left <= right) {
    // if num at left is equaled to target val, swap and decrement right
    if (nums[left] === val) {
      nums[left] = nums[right];
      right--;
    }
    // otherwise increment left
    else left++;
  }
  //return left
  return left;
};

console.log(removeElement([1, 2, 4, 5, 3, 2, 1, 5], 2)); // -> 6
console.log(removeElement([3, 2, 2, 3], 3)); // -> 2
console.log(removeElement([3, 3, 3], 3)); // -> 0

var refinedRemoveElement = function (nums, val) {};
