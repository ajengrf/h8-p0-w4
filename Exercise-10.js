function changeMe(arr) {
    // you can only write your code here!
    if (arr.length == 0) {
        console.log('')
    }

    for (var i = 0; i < arr.length; i++) {
        var newObj = {}
        newObj.firstName = arr[i][0]
        newObj.lastName = arr[i][1]
        newObj.gender = arr[i][2]
        newObj.age = 2019 - arr[i][3] || 'Invalid Birth Year'
        console.log(`${i + 1}. ${arr[i][0]} ${arr[i][1]} :`)
        console.log(newObj)
    }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""