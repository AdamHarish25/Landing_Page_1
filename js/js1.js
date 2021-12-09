var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime(); // untuk mengubah tanggal ke bentuk UNIX

var x = setInterval(function() {

  var now = new Date().getTime(); // untuk mendapatkan waktu saat ini, lalu diubah ke bentuk UNIX
    
  var distance = countDownDate - now; // untuk mendapatkan range waktu antara 5 Jan 2022 dan 25 Nov 2021
    
  // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("text").innerHTML = minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    window.scrollTo(0,100);
    document.getElementById("text").innerHTML = "0";
  }
}, 1000);

