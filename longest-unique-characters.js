var word = "hellothere";

// using frequency counter O(n) solution 
var longestUniqueCharacters = (word) => {
  var longestUniqueCharsTemp = "";
  var longestUniqueChars = "";
  var frequencyCounter = {};
  for (val of word) {
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
var longestUniqueCharacters2 = (word) => {
  var longestUniqueCharsTemp = "";
  var longestUniqueChars = "";
  for (val of word) {
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

console.log(longestUniqueCharacters(word))
console.log(longestUniqueCharacters2(word))