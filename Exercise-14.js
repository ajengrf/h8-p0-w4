function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here

    if (arrPenumpang.length == 0) {
        return []
    }

    var ongkos = 0
    var naik = 0
    var turun = 0
    var hasil = []
    for (var i = 0; i < arrPenumpang.length; i++) {
        for (var j = 0; j < arrPenumpang[i].length; j++) {
            for (var k = 0; k < rute.length; k++) {
                if (rute[k] == arrPenumpang[i][1]) {
                    naik = k
                } else if (rute[k] == arrPenumpang[i][2]) {
                    turun = k
                }
            }
        }
        hasil.push({
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],
            bayar: (turun - naik) * 2000
        })
    }
    return hasil
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]