// button
const start = document.querySelector(".Start");
const reset = document.querySelector(".Reset");
const pause = document.querySelector(".pause");
const play = document.querySelector(".play");
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
    seconds = Number(document.querySelector(".seconds").innerHTML)
    minutes = Number(document.querySelector(".minute").innerHTML)
    hours = Number(document.querySelector(".hour").innerHTML)
    if (!isPaused) return;
    console.log("playing...");
    isPaused = false; // Mark as playing
    //soul of webpage
    timer = setInterval(() => {
        timing();
    }, 1000);
}
pause.addEventListener("click", () => { pauseTimer() })
function pauseTimer() {
    if (isPaused) return;
    isPaused = true; // Mark as paused
    clearInterval(timer)
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
    pauseTimer()
}
function timing() {
    
        seconds--;
        if (seconds = 0) {
            seconds = 60;
            //minute
            minutes--;
            if (minutes < 0) {
                minutes = 59;
                //hour
                hours--;
                if (hours < 0) {
                    // Timer finished
                    clearInterval(timerInterval); // Stop the timer
                    console.log("Time's up!");
                    return;
            }
        }
    }
    update(seconds);
    update(minutes);
    update(hours);
}