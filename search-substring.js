var string = "My name isname Utsaha Joshi!";
var substring = "name";

var searchSubstring = (string, substring) => {
  var index = 0;
  var index2 = 0;
  var count = 0;
  while (index < (string.length - substring.length) - 1){
    if (string[index] === substring[index2]) {
      index2++;
      if (index2 === (substring.length - 1)) {
        count++;
        index2 = 0;
      }
    } else {
      index2 = 0;
    }
    index++;
  }
  return count;
}

console.log(`There are ${searchSubstring(string, substring)} ${substring}'s in the string.`)