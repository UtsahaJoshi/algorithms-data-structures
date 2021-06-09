var numbers = [1, 1, 1, 1, 2, 2, 3, 4, 4, 5, 5, 5, 6, 6]; //must be in incremental order

// my O(n) solution
var countUniqueValues = (numbers) => {
  // create two pointers 
  pointer = 0;
  pointer2 = 1;

  //initialize count to 0
  count = 0;

  //loop until all characters are checked
  while (pointer < numbers.length) {
    if (numbers[pointer] !== numbers[pointer2]) {
      count++;
      pointer = pointer2;
    }
    pointer2++;
  }
  return count;
}

//another solution by manipulating array
var countUniqueValues2 = (numbers) => {
  if (numbers.length === 0) return 0;
  var i = 0;
  for (var j = i + 1; j < numbers.length; j++) {
    if (numbers[i] !== numbers[j]) {
      i++;
      numbers[i] = numbers[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues(numbers))
console.log(countUniqueValues2(numbers))