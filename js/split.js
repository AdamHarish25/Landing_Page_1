function split(first_array, second_array) {
    var first_array = [1, 3, 2, 10, 9, 20];
    var second_array = [1, 8, 20, 17, 15, 8];
    var hasil = [];
    var itu = [first_array.slice(0,3),second_array.slice(0,3)];
    var ini = [first_array.slice(3,6),second_array.slice(3,6)];

    for(num1 of itu){   
        hasil.push(num1);
    }
    for(num2 of ini){
        hasil.push(num2);
    }


    return hasil;
    
}

    console.log(split());