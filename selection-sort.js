var array = [5, 1, 2, 3, 4];

var selectionSort = (array) => {
  for (var i = 0; i < array.length - 1; i++) {
    var min = i;
    for (var j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        console.log("swap")
        min = j;
      }
    }
    var temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}

console.log(selectionSort(array));