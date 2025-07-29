/// 58. Length of Last Word
// ; Easy
/* 
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

 

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
*/
//input: string (sentence)
//output: number representing the length of the last word
//iterate backwards, starting a count on the first non-space character
var lengthOfLastWord = function (s) {
  // define a result number
  let result = 0;
  // iterate backwards using for loop
  for (let i = s.length - 1; i >= 0; i--) {
    // start counting from first non space char
    if (s[i] !== ' ') {
      // use another loop to count length of last word
      while (s[i] !== ' ' && i >= 0) {
        result++;
        i--;
      }
      return result;
    }
  }
  return result;
};
console.log(lengthOfLastWord('   fly me   to   the moon  '));
console.log(lengthOfLastWord('luffy is still joyboy'));
console.log(lengthOfLastWord('Hello World'));
