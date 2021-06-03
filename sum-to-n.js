// write a function that calculates the sum of all numbers from 1 to n

var sum = (n) => {
  var total = 0;
  for (var i = 1; i <= n; i++){
    total += i;
  }
  return total;
}

console.log(sum(10));