let count = 30;
var interval;
var timer;

function startTimer() {
    count--;
    timer.innerHTML = `Timer: ${count}`;
    stopTimer();
}

function stopTimer() {
    if(count < 1) {
        clearInterval(interval);
    }
}

class Timer {
    constructor() {
        timer = document.getElementById('timer');
        timer.innerHTML = `Timer: ${count}`;
    }
    updateTimer() {       
        interval = setInterval(startTimer, 1000);
    }
}

export default Timer;