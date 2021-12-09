var run = [];
var genap = [];
var ganjil = [];
var bilan = [];
let nama = ['Anto', 'Budi', 'Anggita', 'Reza', 'Chandra'];
let nilai = [2, 5, 8, 11, 10, 5.4, 3.7, 9.0];

for(let k = 0; k <= 100; k++){
    if (k%2 == 0) {
        genap.push(k);
    } else {
        ganjil.push(k)
    }
}

console.log(genap);
console.log(ganjil);


for(let i = 0; i <= 100; i++){
    if (i%9 == 0) {
        bilan.push(i);
    }
}

console.log(bilan);

nama.sort();
console.log(nama);

nilai.sort(function(a, b){return a - b});
console.log(nilai);


function nilaiGenap(nilai, genap) {
    genap = [];
    for(nilai = 0; nilai <= 20 ; nilai++){
        if (nilai%2 == 0) {
            genap.push(nilai);
        }
    }
    return genap;
}

console.log(nilaiGenap());

// function bilanganPrima(nilai, prima) {
//     prima = [];
//     nilai = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
//     if (nilai%1 || nilai/nilai == 0) {
//         prima.push(nilai);
//     }
//     return prima;
// }

// console.log(bilanganPrima());


function namaNama(nama, hasil) {
    nama = ['Anto', 'Budi', 'Anggita', 'Reza', 'Chandra'];
    hasil = [];
    for(let loop of nama){
        if (loop.charAt(0) == "A") {
            hasil.push(loop);
        }
    }
    return hasil;
}

console.log(namaNama());
