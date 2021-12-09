let ganjil = [];
let genap = [];

let numbers = [10, 2, 5, 3, 1 , 9, 100, 29, 55, 99, 66];

function print_odd_even_numbers(numbers) {
    for (x of numbers) {
        if (x % 2 == 0) {
            genap.push(x);
        } else {
            ganjil.push(x);
        }
    }

    console.log(ganjil.sort(function(a, b){return a - b}))
    console.log(genap.sort(function(a, b){return a - b}))
}

print_odd_even_numbers(numbers);