// write a function called same, which accepts two arrays. The function should return true
// if every value in the array has it's corresponding value squared in the second array (no proper order). The
// frequency of values must be the same.

// return true data
array1 = [1, 2, 3];
array2 = [4, 9, 1];

// return false data
// array1 = [2, 3, 5];
// array2 = [1, 9, 25];

var same = (array1, array2) => {
  var tempArray2 = array2;
  var result = true;
  array1.forEach(element => {
    var squared = element * element;
    if (tempArray2.includes(squared)) {
      var includedSquaredIndex = tempArray2.indexOf(squared);
      tempArray2.splice(includedSquaredIndex, 1);
    } else {
      result = false;
    }
  });
  return result;
}

console.log(same(array1, array2));