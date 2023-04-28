let countDownDate = new Date ("Apr 28, 2023 09:30:00").getTime();
let x = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.querySelector('#time').innerHTML = days + ' Giorni ' + hours + ' Ore ' + minutes + ' Minuti ' + seconds + ' Secondi ';

    if (distance <= 0) {
        clearInterval(x);
        document.querySelector('#time').innerHTML = 'Il tempo è scaduto!!!'
    }
},1000);