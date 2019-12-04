function angkaPrima(angka) {
    // you can only write your code here!
    for (i = 2; i < angka; i++) {
        if (angka == 1) {
            return false
        } else if (angka == 2) {
            return true
        } else if (angka % i == 0) {
            return false
        }
    }
    return true
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false