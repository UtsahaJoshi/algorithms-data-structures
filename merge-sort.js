var arr = [2, 10, 25, 6, 4, 12, 34, 50];

var merge = (arr1, arr2) => {
  var array = [];
  var i = 0;
  var j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      array.push(arr1[i]);
      i++;
    } else {
      array.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    array.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    array.push(arr2[j]);
    j++;
  }
  return array;
}


var mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  var mid = Math.floor(arr.length / 2);
  var left = mergeSort(arr.slice(0, mid));
  var right = mergeSort(arr.slice(mid));

  return merge(left, right);
}
console.log(mergeSort(arr));