// * 77. Combinations
// > Medium
// Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

// You may return the answer in any order.
// input: two integers
// output: array of all combos
// n is length of array in ascending order from 1 - n
// k is length of combo
// ex: n = 4, k = 2
var combine = function (n, k) {
  const output = [];
  // declare helper function to find combos
  const generate = (combo, counter) => {
    // basecase: if the combo is length of k, push to output
    if (combo.length === k) {
      output.push([...combo]);
      return;
    }
    // take it or leave it:
    if (counter <= n) generate([...combo, counter], counter + 1);
    if (counter <= n) generate(combo, counter + 1);
  };
  //invoke generate helper passing in empty combo arr and starting num 1
  generate([], 1);
  return output;
};

// time complexity: O(2^n)
// space complexity: O(2^n)

console.log(combine(4, 2));
