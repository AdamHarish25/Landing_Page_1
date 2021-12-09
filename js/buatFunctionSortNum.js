let genap = [];
function nilaiGenap(num) {
    for(num of numbers){
        if(num%2 == 0){
            genap.push(num);
        }
    }
    return genap;
}


let ganjil = [];
function nilaiGanjil(num) {
    for(num of numbers){
        if (num%2 == 1) {
            ganjil.push(num);
        }
    }
    return ganjil;
}



let numbers = [10, 2, 5, 3, 1 , 9, 100, 29, 55, 99, 66];
console.log(nilaiGenap().sort(function(a, b){return a - b}));
console.log(nilaiGanjil().sort(function(a, b){return a - b}));