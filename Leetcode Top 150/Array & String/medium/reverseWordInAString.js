/// 151. Reverse Word In A String
// > Medium
/* 
A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.
*/

// strategy: reverse the entire string, then use two pointers to iterate over and reverse each word
//input: string
// output: same string with words reverse
var reverseWords = function (s) {
  // trim whitespaces off input string
  // reverse the string somehow, by the will of god
  // iterate over reversed string
  //use two pointers to reverse each individual string back to correct order
  //initiate a writeIndex at 0
  //for loop, initiating a readIndex starting at 0
  // if write index is not 0, start with space ' '
};

// testcase:
const string1 = 'the sky is blue';
const string2 = '  hello world  ';
console.log(reverseWords(string1));
console.log(reverseWords(string2));
