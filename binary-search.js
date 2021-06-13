var array = [1, 2, 5, 8, 11, 12, 22, 45, 46, 56, 66, 68]; //has to be sorted
searchValue = 8;

var binarySearch = (array, searchValue) => {
  var left = 0;
  var right = array.length - 1;
  while (left < right) {
    var mid = Math.floor((left + right) /2);
    if (searchValue < array[mid]) {
      right = mid - 1;
    } else if (searchValue > array[mid]) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}

console.log(binarySearch(array, searchValue));