// write a function called same, which accepts two arrays. The function should return true
// if every value in the array has it's corresponding value squared in the second array (no proper order). The
// frequency of values must be the same.

// return true data
array1 = [1, 2, 3];
array2 = [4, 9, 1];

// return false data
// array1 = [2, 3, 5];
// array2 = [1, 9, 25];


// O(n^2) time complexity solution
var same1 = (array1, array2) => {
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

// O(n) time complexity solution
var same2 = (array1, array2) => {
  //check if array length are same
  if (array1.length !== array2.length) {
    return false;
  }

  //create a frequency counter
  var frequencyCounter1 = {};
  var frequencyCounter2 = {};

  //make a key value pair for each element in array
  for (var val of array1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (var val of array2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  //main logic
  for (var key in frequencyCounter1){
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]){
      return false;
    }
  }
  return true;
}

console.log(same2(array1, array2));