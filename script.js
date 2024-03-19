let hours = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function updateClock() {
    let currtime = new Date();
    let currHours = currtime.getHours();
    let currMinutes = currtime.getMinutes();
    let currSeconds = currtime.getSeconds();

    let formattedHours = (currHours < 10 ? "0" : "") + currHours;
    let formattedMinutes = (currMinutes < 10 ? "0" : "") + currMinutes;
    let formattedSeconds = (currSeconds < 10 ? "0" : "") + currSeconds;

    animateDigitChange(hours, formattedHours);
    animateDigitChange(min, formattedMinutes);
    animateDigitChange(sec, formattedSeconds);
}

function animateDigitChange(element, newValue) {
    if (element.textContent !== newValue) {
        element.classList.remove('flip-in');
        void element.offsetWidth;
        element.textContent = newValue;
        element.classList.add('flip-in');
    }
}

updateClock();


setInterval(updateClock, 1000);
