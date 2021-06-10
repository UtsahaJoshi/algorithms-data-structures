var setOfChars = "hellothere";

// using frequency counter O(n) solution 
var longestUniqueCharacters = (setOfChars) => {
  var longestUniqueCharsTemp = "";
  var longestUniqueChars = "";
  var frequencyCounter = {};
  for (val of setOfChars) {
    frequencyCounter[val] = (frequencyCounter[val] || 0) + 1;
    if (frequencyCounter[val] > 1) {
      if (longestUniqueChars.length < longestUniqueCharsTemp.length) {
        longestUniqueChars = longestUniqueCharsTemp;
        longestUniqueCharsTemp = "";
        frequencyCounter = {};
      }
    }
    longestUniqueCharsTemp += val;
  }
  return longestUniqueChars;
}

// using .includes O(n^2) solution 
var longestUniqueCharacters2 = (setOfChars) => {
  var longestUniqueCharsTemp = "";
  var longestUniqueChars = "";
  for (val of setOfChars) {
    if (longestUniqueCharsTemp.includes(val)) {
      if (longestUniqueChars.length < longestUniqueCharsTemp.length) {
        longestUniqueChars = longestUniqueCharsTemp;
        longestUniqueCharsTemp = "";
      }
    }
    longestUniqueCharsTemp += val;
  }
  return longestUniqueChars;
}

console.log(longestUniqueCharacters(setOfChars))
console.log(longestUniqueCharacters2(setOfChars))