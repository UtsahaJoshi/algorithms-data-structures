// write a function that calculates the sum of all numbers from 1 to n

var sumUpTo = (n) => {
  var total = 0;
  for (var i = 1; i <= n; i++){
    total += i;
  }
  return total;
}

let t1 = new Date();
console.log(sumUpTo(1000000000));
let t2 = new Date();
console.log(`Time Elapsed: ${(t2-t1)/1000}`);