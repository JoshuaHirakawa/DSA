/// 380. Insert Delete GetRandom O(1)
// > Medium
/*
Implement the RandomizedSet class:

RandomizedSet() Initializes the RandomizedSet object.
bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
You must implement the functions of the class such that each function works in average O(1) time complexity.
*/
// can only contain unique values (maybe set object or Map)
//
var RandomizedSet = function () {
  this.randomObj = new Map();
  //create an array to store jus the values for random fetching
  this.values = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  // check for val in obj
  if (this.randomObj.has(val)) return false;
  // return true if item was not present, false if it was (in other words, true if we were able to insert val)

  this.randomObj.set(val, this.values.length);
  this.values.push(val);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  //check if val is present in obj
  if (!this.randomObj.has(val)) return false;
  //if so, remove and then return true
  const index = this.randomObj.get(val);
  const lastVal = this.values[this.values.length - 1];
  //swap last element with the current
  this.values[index] = lastVal;
  //update the index value of lastVal
  this.randomObj.set(lastVal, index);
  // now we can pop last val
  this.values.pop();
  //delete property from randomObj
  this.randomObj.delete(val);
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  // getRandom cannot be called when there are no elements in obj
  if (this.values.length <= 0) return new Error('there are no values stored');
  // use Math.random multiplied by length of values array to get random index
  const randomIndex = Math.floor(Math.random() * this.values.length);
  return this.values[randomIndex];
};

const myMap = new RandomizedSet();
console.log('mymap:', myMap);
myMap.insert('josh');
myMap.insert('jon');
console.log('updated myMap:', myMap);
console.log(myMap.remove('josh'));
console.log('map after removing josh:', myMap);
myMap.insert('josh');
myMap.insert('sara');
myMap.insert('mom');
myMap.insert('dad');
console.log(myMap.getRandom());
console.log(myMap.getRandom());
