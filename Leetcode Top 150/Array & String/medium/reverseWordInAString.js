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
  let words = s.split('');
  //reverse each character in string
  reverse(words, 0, words.length - 1);
  // initiate a start index
  let start = 0;
  // iterate over words array
  for (let i = 0; i <= words.length; i++) {
    // check if cur character is a space or reached array length
    if (i === words.length || words[i] === ' ') {
      // pass in current i - 1 for right pointer (end of current word)
      reverse(words, start, i - 1);
      // update start to start at the next word
      start = i + 1;
    }
  }
  // join words back together and trim any whitespaces
  return words.join('').trim();
};

const reverse = (arr, left, right) => {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
};

// testcase:
const string1 = 'the sky is blue';
const string2 = '  hello world  ';
// console.log(reverseWords(string1));
// console.log(reverseWords(string2));

var reverseWords2 = function (s) {
  return s.trim().split(' ').reverse().join(' ');
};
console.log(reverseWords2(string2));
