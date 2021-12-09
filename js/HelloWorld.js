function helloWorld(num) {

    for(num = 0; num <= 100; num++){
        if (num%3 == 0) {
            console.log("Hello!");
        } else if(num%5 == 0){
            console.log("World");
        } else if(num%15 == 0){
            console.log("Hello-World");
        } else {
            console.log(num);
        }
        continue
    }
    return num;
}

helloWorld();
