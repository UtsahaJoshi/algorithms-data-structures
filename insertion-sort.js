array = [10, 1, 2, 3, 4, 5, 6, 7, 8];

var insertionSort = (array) => {
  for (var i = 1; i < array.length; i++) {
    var currentValue = array[i];
    for (var j = i - 1; j >= 0 && array[j] > currentValue; j--) {
      array[j+1] = array[j];
    }
    array[j+1] = currentValue;
  }
  return array;
}

console.log(insertionSort(array))