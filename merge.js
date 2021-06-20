var merge = (arr1, arr2) => {
  var array = [];
  var i = 0;
  var j = 0;
  while (array.length < arr1.length + arr2.length) {
    if (arr1[i] < arr2[j]) {
      array.push(arr1[i]);
      i++;
    } else {
      array.push(arr2[j]);
      j++;
    }
  }
  return array;
}

console.log(merge([1, 2, 7, 8, 9], [4, 5, 6, 12, 14, 16]));