// write a function that calculates the sum of all numbers from 1 to n

var sumTotal = (n) => {
  var sum = 0;
  for (var i = 1; i <= n; i++){
    sum += i;
  }
  return sum;
}

console.log(sumTotal(10));