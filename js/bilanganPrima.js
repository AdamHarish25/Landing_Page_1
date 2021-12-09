function isPrime ()
{
  for (let i = 0; i <= 20; i++) {
    if (i == 0) {
        continue;
    }

    if (i == 1) {
        console.log(i);
        continue;
    }
    
    var q = Math.floor(Math.sqrt(i));

    for (var x = 2; x <= q; x++)
    { 
      if (i % x == 0 || i == 9 || i == 15) {
          break;
      } else {
          console.log(i);
          break;
      }
    }
  }
}

isPrime();