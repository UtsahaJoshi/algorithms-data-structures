var word = "qwerty";
var word2 = "ytrewq";


// one way with O(n) time complexity
var anagram = (word, word2) => {
  if (word.length !== word2.length) {
    return false;
  }

  //implementation of frequency counter
  var frequencyCounter1 = {};
  var frequencyCounter2 = {};

  for (var val of word) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (var val of word2){
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  // check if number of letter in word is equal to number of the same letter in word2
  for (var key in frequencyCounter1) {
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }
  return true;
}

//another way with O(n) time complexity
var anagram2 = (firstWord, secondWord) => {
  if (firstWord.length !== secondWord.length) return false;

  frequencyCounterForFirstWord = {};

  for (var val of firstWord) {
    frequencyCounterForFirstWord[val] = (frequencyCounterForFirstWord[val] || 0) + 1; // {c:1, i:1, n:1, e:1, m:1, a:1}
  }

  for (var val of secondWord) {
    if (!frequencyCounterForFirstWord[val]) {     //if does not contain or is 0
      return false;
    } else {
      frequencyCounterForFirstWord[val]--;     // substract 1 so that when all letters are done the key with that letter has 0 value
    }
  }
  return true;
}
console.log(`${word} & ${word2} are anagrams: ${anagram(word, word2)}`);
console.log(`${word} & ${word2} are anagrams: ${anagram2(word, word2)}`);