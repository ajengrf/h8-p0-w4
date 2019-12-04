function cariModus(arr) {
    // you can only write your code here!

    var hasil = []
    for (j = 0; j < arr.length; j++) {
        flag = -1
        for (var k = 0; k < hasil.length; k++) {
            if (arr[j] == hasil[k][0]) {
                flag = k
            }
        }
        if (flag == -1) {
            hasil.push([arr[j], 1])
        } else {
            hasil[flag][1]++
        }
    }

    // Sorting~
    var run = true
    while (run) {
        run = false
        for (var i = 1; i < hasil.length; i++) {
            if (hasil[i][1] > hasil[i - 1][1]) {
                [hasil[i], hasil[i - 1]] = [hasil[i - 1], hasil[i]]
                run = true
            }
        }
    }

    for (var l = 0; l < hasil.length; l++) {
        for (var m = 0; m < hasil[l].length; m++) {
            if (hasil[l + 1] == undefined) {
                return -1
            } else if (hasil[l][1] == hasil[l + 1][1] && hasil[l + 2][1] == hasil[l + 1][1]) {
                return -1
            } else if (hasil[l][1] > hasil[l + 1][1]) {
                return hasil[l][0]
            } else if (hasil[l][1] == hasil[l + 1][1]) {
                return hasil[l][0]
            } else {
                return -1
            }
        }
    }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1