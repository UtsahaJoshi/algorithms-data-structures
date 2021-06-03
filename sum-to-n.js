// write a function that calculates the sum of all numbers from 1 to n

var sumUpTo = (n) => {
  var total = 0;
  for (var i = 1; i <= n; i++){
    total += i;
  }
  return total;
}

console.log(sumUpTo(10));