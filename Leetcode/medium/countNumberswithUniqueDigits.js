// * 357 Count Numbers with Unique Digits
// > Medium
//
// Given an integer n, return the count of all numbers with unique digits, x, where 0 <= x < 10n.
// 10 ^ 2 = 100
// Example 1:
// Input: n = 2 Output: 91 Explanation: The answer should be the total numbers in the range of 0 ≤ x < 100, excluding 11,22,33,44,55,66,77,88,99
// BRUTE FORCE APPROACH
// var countNumbersWithUniqueDigits = function(n) {
//     if(n === 0) return 1
//     if(n === 1) return 10
//   // counter all unique digit numbers 0 - 10^n
//   let counter = 0;
//   let max = 10 ** n;
//   // create helper to
//   const helper = (num) => {
//     if (num > max) return;
//     // check to increment counter
//     const numArr = num.toString().split('');
//     const cache = new Set();
//     let uniqueCheck = true;

//     for (let digit of numArr) {
//       if (cache.has(digit)) {
//         console.log('found a failed test');
//         uniqueCheck = false;
//       }
//       cache.add(digit);
//     }
//     if (!uniqueCheck) helper(num + 1);
//     else {
//       counter++;
//       helper(num + 1);
//     }

//     // if so, increment counter
//     //444 34
//     //recursive call, invoke helper passing in num plus 1
//   };
//   helper(0);
//   return counter;
// };

// Optimized
const countNumbersUniqueDigits = (n) => {
  // edge case for when n is 0
  if (n === 0) return 1;
  let counter = 0;
  let max = 10 ** n;

  // create helper to
  const helper = (num) => {
    const cache = new Set();
    while (num > 0) {
      const digit = num % 10;
      if (cache.has(digit)) return false;
      cache.add(digit);
      num = Math.floor(num / 10);
    }
    return true;
  };

  for (let i = 0; i < max; i++) {
    if (helper(i)) counter++;
  }
  return counter;
};

console.log(countNumbersUniqueDigits(2));
