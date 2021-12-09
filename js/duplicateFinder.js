function printNum(num1, num2) {
  var num1 = [1, 2, 3, 4, 5];
  var num2 = [1, 6, 7, 4, 10];
  var hasil = [];
  num1.forEach(function (item) {
    var isPresent = num2.indexOf(item);
    if (isPresent !== -1) {
      hasil.push(item);
    }
  });
  return hasil;
}

console.log(printNum());
