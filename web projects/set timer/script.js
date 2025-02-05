let countdown;

function startCountdown() {
    clearInterval(countdown);

    const inputDate = document.getElementById("datetime").value;
    const targetTime = new Date(inputDate).getTime();

    if (!inputDate) {
        alert("Please select a valid date and time.");
        return;
    }

    countdown = setInterval(() => {
        const currentTime = new Date().getTime();
        const timeLeft = targetTime - currentTime;

        if (timeLeft <= 0) {
            clearInterval(countdown);
            document.getElementById("countdown").innerHTML = "⏳ Time's Up!";
            alert("Time's Up!");
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = String(days).padStart(2, '0');
        document.getElementById("hours").innerText = String(hours).padStart(2, '0');
        document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
        document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
    }, 1000);
}
