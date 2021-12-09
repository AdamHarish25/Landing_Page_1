var array = [1,3,4,2,5,6,8,7,9,10];
var ganjil = [];
var genap = [];
var lima = [];

for(vla of array){  
    if (vla%2 == 0) {
        genap.push(vla);
        
    } else {
        ganjil.push(vla);
    }
}
ganjil.sort(function(a, b){return a - b});
genap.sort(function(a, b){return a - b});
console.log(ganjil);
console.log(genap);

for(let i = 0; i < 50; i++){
    if (i%2 == 0){
        genap.push(i);
    }else{
        ganjil.push(i);
    }
}

console.log(genap);
console.log(ganjil);


for(let e = 0; e <= 50; e++){
    if (e%5 == 0) {
        lima.push(e);
    }
}

console.log(lima);


