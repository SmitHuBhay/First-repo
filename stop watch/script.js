// button
const start = document.querySelector(".Start");
const reset = document.querySelector(".Reset");
const pause = document.querySelector(".pause");
const play = document.querySelector(".play");
//decelerations
var seconds = 0;
var minutes = 0;
var hours = 0;
let timer;
let isPaused = true;

// update display
function update() {
    document.querySelector(".hour").innerHTML = hours;
    document.querySelector(".minute").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;
}
// start 
start.addEventListener("click", () => { startTimer() })

function startTimer() {
    if (!isPaused) return;
    console.log("playing...");
    isPaused = false; // Mark as playing
    //soul of webpage
    checkbox.checked = !checkbox.checked;
    timer = setInterval(() => {
        timing();
    }, 1000);
}
//play
const checkbox = document.getElementById('change');

play.addEventListener("click", () => { startTimer(); playTimer() })
function playTimer() {
    checkbox.checked = !checkbox.checked;

}
//pause
pause.addEventListener("click", () => { pauseTimer() })
function pauseTimer() {
    if (isPaused) return;
    isPaused = true; // Mark as paused
    clearInterval(timer);
    console.log("paused...")
}
//reset
reset.addEventListener("click", () => { resetTimer() })
function resetTimer() {
    console.log("reset...");
    seconds = -1;
    minutes = 0;
    hours = 0;
    update(hours)
    update(minutes)
    update(seconds = 0)
    if (!isPaused) {
        startTimer();
    }
}
// timings
function timing() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        //minute
        minutes++;
        if (minutes >= 59) {
            minutes = 0;
            //hour
            hours++;
        }
    }
    update(seconds);
    update(minutes);
    update(hours);
}