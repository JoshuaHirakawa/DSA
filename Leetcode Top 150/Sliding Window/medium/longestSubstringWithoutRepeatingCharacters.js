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
var lengthOfLongestSubstring = function (s) {
  // initiate a cache for current substring
  const cache = new Set();
  // declare two pointers, left and right for sliding window
  let left = 0,
    right = 0;
  let longest = 0;
  //iterate through s string
  while (right < s.length) {
    const char = s[right];

    // loop if we have dupe, and clear all properties until first instance of that dupe is deleted
    while (cache.has(char)) {
      cache.delete(s[left]);
      left++;
    }
    // always add current char to cache
    cache.add(char);
    //update longest if needed
    if (cache.size > longest) longest = cache.size;
    right++;
  }
  return longest;
};

//testcase:
console.log(lengthOfLongestSubstring('abcabcabcdef')); //-> 6
