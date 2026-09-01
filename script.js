let countdown = document.getElementById("countdown");

let returnDate = new Date("September 26, 2026");

function updateCountdown() {
    let now = new Date();

    let difference = returnDate - now;

    let seconds = Math.floor(difference / 1000);

    let days = Math.floor(seconds / 86400);
    let remainingSeconds = seconds % 86400;

    let hours = Math.floor(remainingSeconds / 3600);
    remainingSeconds = remainingSeconds % 3600;

    let minutes = Math.floor(remainingSeconds / 60);
    let finalSeconds = remainingSeconds % 60;

    countdown.textContent =
        days + " days, " +
        hours + " hours, " +
        minutes + " minutes, " +
        finalSeconds + " seconds";
}

updateCountdown();

setInterval(updateCountdown, 1000);