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

console.log(countUniqueValues(numbers))