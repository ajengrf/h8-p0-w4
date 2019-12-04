function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  var angka1 = 0
  var angka2 = 0
  var tampung = 0
  var digit = 0

  for (var i = 1; i <= angka; i++) {
    if (angka % i == 0) {
      angka1 = i
      angka2 = angka / i
      digit = Number(String(angka1).length + String(angka2).length)
    }
    if (tampung == 0) {
      tampung = digit
    } else if (digit < tampung) {
      tampung = digit
    }
  }
  return tampung
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2