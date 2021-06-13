
array = [5, 10, 23, 1, 0, 6, 3, 22];
searchValue = 3;

var linearSearch = (array, value) => {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch(array, searchValue));