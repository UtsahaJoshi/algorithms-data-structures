array = [10, 1, 2, 3, 4, 5, 6, 7, 8];

var bubbleSort = (array) => {
  var sorted = 0;
  var index = 0;
  var noSwaps = true;
  while(sorted < array.length) {
    if (array[index] > array[index + 1]) {
      var temp = array[index];
      array[index] = array[index + 1];
      array[index + 1] = temp;
      noSwaps = false;
    }
    index++;
    if (index === array.length - sorted) {
      sorted++;
      index = 0;
      if (noSwaps) break;
      noSwaps = true;
    }
  }
  return array;
}

console.log(bubbleSort(array));