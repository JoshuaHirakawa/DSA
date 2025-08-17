/// 383. Ranson Note
// ; Easy
/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.


Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.


*/
//input: two strings, randomNote and magazine
//output: boolean representing whether or not we can dreate ransomNote out of chars in magazine
//strategy: create a hash map of all chars and their count
// iterate over magazine, creating map of chars.
//iterate over ransomNote, decrementing char in mag
// if at any point, char doesnt exist in mag, return false
// if we iterate over entire randomNote, return true
var canConstruct = function (ransomNote, magazine) {
  const charMap = {};
  for (let i = 0; i < magazine.length; i++) {
    if (charMap[magazine[i]]) charMap[magazine[i]]++;
    else charMap[magazine[i]] = 1;
  }
  for (let i = 0; i < ransomNote.length; i++) {
    const char = ransomNote[i];
    if (char in charMap && charMap[char] > 0) {
      charMap[char]--;
    } else return false;
  }
  return true;
};

console.log(canConstruct('josh', 'ahsohhhjjeosh'));
console.log(canConstruct('josh', 'hello'));
