let count;
var interval;
var timer;

function startTimer() {
    timer.innerHTML = `Timer: ${count}`;
    count--;
    if(count < 1) {
        stopTimer();
    }
}

function stopTimer() {
    clearInterval(interval);
}

class Timer {
    constructor() {
        count = 30;
        timer = document.getElementById('timer');
        timer.innerHTML = `Timer: ${count}`;
    }
    updateTimer() {       
        interval = setInterval(startTimer, 1000);
    }
    resetTimer() {
        stopTimer();
        count = 30;
    }
}

export default Timer;