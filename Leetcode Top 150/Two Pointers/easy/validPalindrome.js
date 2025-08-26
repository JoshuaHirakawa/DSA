/// 125. Valid Palindrome
// ; Easy
/* 
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.


Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

*/

// input: string
// output: boolean representing whether the input string is a palindrome
//strategy, have two pointers: One starting at 0th index, and the other starting at string.length - 1 (last char). compare each alphanumeric char. if at any point, the indices point to a non alphanumeric value, increment/decrement that char
var isPalindrome = function (s) {
  // define two pointers
  let left = 0;
  let right = s.length - 1;
  // iterate over string using a regular for loop (condition: left is less than right)
  while (left < right) {
    // for each iteration, compare left and right
    while (left < right && !/[a-zA-Z0-9]/.test(s[left])) {
      left++;
    }
    while (left < right && !/[a-zA-Z0-9]/.test(s[right])) {
      right--;
    }
    // if both are alphanumeric AND not equal to each other, return false
    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
    // increment left, decrement right
    left++;
    right--;
  }

  // lastly, if we make it through the loop, return true
  return true;
};

console.log(isPalindrome('raCe!?car')); // -> true
console.log(isPalindrome('race a car')); //-> false
console.log(isPalindrome(' ')); // -> true
console.log(isPalindrome('A man, a plan, a canal: Panama')); //-> true
