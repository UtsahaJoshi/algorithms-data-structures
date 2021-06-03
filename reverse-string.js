// write a function that accepts a string input and returns a reversed copy

inputString = "I love coding.";

var reverseString = (inputString) => {
  var lengthOfInputString = inputString.length;
  var reversedString = '';
  for(var i = 1; i <= lengthOfInputString; i++) {
    reversedString += inputString[lengthOfInputString - i];
  }
  return reversedString;
}

console.log(reverseString(inputString));