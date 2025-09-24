// * 3. Longest Substring Without Repeating Characters
// > Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given a string s, find the length of the longest substring without duplicate characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// input: string
// output: number representing the length of longest substring without dupe chars
//strategy: use a cache to track all characters in current substring, if length exceeds max, update max
// implement sliding window using two pointers. when we find duplicate, delete all corresponding properties until left pointer reaches first char after dupe
// var lengthOfLongestSubstring = function (s) {
//   // initiate a cache for current substring
//   const cache = new Set();
//   // declare two pointers, left and right for sliding window
//   let left = 0,
//     right = 0;
//   let longest = 0;
//   //iterate through s string
//   while (right < s.length) {
//     const char = s[right];

//     // loop if we have dupe, and clear all properties until first instance of that dupe is deleted
//     while (cache.has(char)) {
//       cache.delete(s[left]);
//       left++;
//     }
//     // always add current char to cache
//     cache.add(char);
//     //update longest if needed
//     if (cache.size > longest) longest = cache.size;
//     right++;
//   }
//   return longest;
// };

//testcase:
// console.log(lengthOfLongestSubstring('abcabcabcdef')); //-> 6
// abcabc;
// abc[bac];
////////////////////////
// input: string
// output: number representing the longest substring without dupes
// var lengthOfLongestSubstring = function (s) {
//   // initiate left, right and set object for unique chars
//   let left = 0,
//     right = 0;
//   let cache = new Set();
//   let longest = 0;
//   while (right < s.length) {
//     // create placeholder for cur char
//     const char = s[right];
//     // check to make sure left excluded any dupes
//     while (cache.has(char)) {
//       //   console.log('deleteing from left:', s[left]);
//       cache.delete(s[left]);
//       left++;
//     }
//     // update longest variable
//     longest = Math.max(longest, right - left + 1);

//     // add char at right to cache
//     cache.add(char);
//     // increment right
//     right++;
//   }
//   return longest;
// };
// console.log(lengthOfLongestSubstring('abcabcabcdea')); //-> 5

// input: string
// output: number representing the longest substring without dupes
// var lengthOfLongestSubstring = function (s) {
//   // initiate left, right and set object for unique chars
//   let left = 0,
//     right = 0;
//   let cache = new Set();
//   let longest = 0;
//   while (right < s.length) {
//     // create placeholder for cur char
//     const char = s[right];
//     // check to make sure left excluded any dupes
//     while (cache.has(char)) {
//       //   console.log('deleteing from left:', s[left]);
//       cache.delete(s[left]);
//       left++;
//     }
//     // update longest variable
//     longest = Math.max(longest, right - left + 1);

//     // add char at right to cache
//     cache.add(char);
//     // increment right
//     right++;
//   }
//   return longest;
// };
// console.log(lengthOfLongestSubstring('abcabcabcdea')); //-> 5

// input string
// output: number

// const longestSubstringNonRepeating = (str) => {
//   // declare left, right, and longest variables
//   let left = 0,
//     right = 0;
//   let longest = 0;
//   const cache = new Set();

//   while (right < str.length) {
//     //use another while loop to slide left pointer up to right
//     while (cache.has(str[right])) {
//       cache.delete(str[left]);
//       left++;
//     }
//     cache.add(str[right]);

//     // either way, we can update the longest variable
//     longest = Math.max(longest, right - left + 1);

//     right++;
//   }
//   return longest;
// };

// console.log(longestSubstringNonRepeating('abcabcaabcdef')); // -> 6

// find the longest substring without repeating characters
// input: string
// output: number (length of longest substring)

const longestSubstring = (s) => {
  // declare left, right, longest variables, and cache to store chars
  let left = 0,
    right = 0;
  let longest = 0;
  const cache = new Set();

  // iterate over string
  while (right < s.length) {
    while (cache.has(s[right])) {
      cache.delete(s[left]);
      left++;
    }

    cache.add(s[right]);

    longest = Math.max(longest, right - left + 1);

    right++;
  }
  return longest;
};

// testcase:
console.log(longestSubstring('abcabcde')); // -> 5
