function checkAB(num) {
    // you can only write your code here!
    var indexA = 0
    var indexB = 0

    for (var i = 0; i < num.length; i++) {
        if (num[i] == 'a') {
            indexA = i
        } else if (num[i] == 'b') {
            indexB = i
        }
    }
    return Math.abs(indexA - indexB) == 4
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false