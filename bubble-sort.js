array = [10, 3, 6, 2, 9, 1, 7, 8, 5, 4];

var bubbleSort = (array) => {
  var sorted = 0;
  var index = 0;
  while(sorted < array.length) {
    if (array[index] > array[index + 1]) {
      var temp = array[index];
      array[index] = array[index + 1];
      array[index + 1] = temp;
    }
    index++;
    if (index === array.length - sorted) {
      sorted++;
      index = 0;
    }
  }
  return array;
}

console.log(bubbleSort(array));