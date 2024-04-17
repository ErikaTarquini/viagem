function countdown(date) {
    const countDate = new Date(date).getTime();
    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "EXPIRADO";
        }
    }, 1000);
}

countdown("2024-06-08"); 