var word = "cinema";
var word2 = "iceman";

var anagram = (word, word2) => {
  if (word.length !== word2.length) {
    return false;
  }

  var frequencyCounter1 = {};
  var frequencyCounter2 = {};

  for (var val of word) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (var val of word2){
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (var key in frequencyCounter1) {
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }
  return true;
}

console.log(`${word} & ${word2} are anagrams: ${anagram(word, word2)}`);