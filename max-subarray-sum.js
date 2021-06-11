// write a function called maxSubArraySum which accepts an array of integers and a number called n. 
//The function should calculate the maximum sum of n consecutive elements in an array.

var array = [1, 2, 5, 2, 8, 1, 5, 4, 5, 7, 8, 3, 5];
var n = 4;

//my approach O(n^2) time complexity
var maxSubArraySum = (array, n) => {
  if (array.length < n) return null;
  var maxSum = -Infinity;
  for(var i = 0; i < (array.length - n); i++) {
    var tempSum = 0;
    for(var j = i; j < (i + n); j++) {
      tempSum += array[j];
    }
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

// sliding window approach O(n) time complexity
var maxSubArraySum2 = (array, n) => {
  if (array.length < n) return null;
  var maxSum = 0;
  var tempSum = 0;

  for (var i = 0; i < n; i++) {
    maxSum += array[i];
  }
  tempSum = maxSum;
  for (var j = n; j < array.length; j++){
    tempSum = tempSum - array[j - n] + array[j]
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubArraySum(array, n));
console.log(maxSubArraySum2(array, n));
