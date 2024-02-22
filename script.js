const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');

const currentYear = new Date().getFullYear();

// Set the date to February 04 of the next year
const newYearTime = new Date(`January 29 ${currentYear + 1} 00:00:00`).getTime();

// Set background year
year.innerText = currentYear + 1;

function updateCountdown() {
    const currentTime = new Date().getTime();
    const diff = newYearTime - currentTime;

    const daysRemaining = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hoursRemaining = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesRemaining = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secondsRemaining = Math.floor((diff % (1000 * 60)) / 1000);

    // Add values to DOM
    days.innerHTML = daysRemaining;
    hours.innerHTML = hoursRemaining < 10 ? '0' + hoursRemaining : hoursRemaining;
    minutes.innerHTML = minutesRemaining < 10 ? '0' + minutesRemaining : minutesRemaining;
    seconds.innerHTML = secondsRemaining < 10 ? '0' + secondsRemaining : secondsRemaining;
}

// Show spinner before countdown
setTimeout(() => {
    loading.remove();
    countdown.style.display = 'flex';
}, 1000);

// Run every second
setInterval(updateCountdown, 1000);
