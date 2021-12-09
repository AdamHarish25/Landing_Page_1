


function fusion(first_array, second_array) {
    
    var hasil = [];

    first_array = [1, 3, 2, 10, 9];
    second_array = [1, 8, 20, 17, 15];

    for(num of first_array){
        hasil.push(num);
    }

    for(num2 of second_array){
        hasil.push(num2);
    }
    
    hasil.sort(function(a, b){return a - b});
    return hasil;

}



console.log(fusion());
