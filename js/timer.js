let count = 5;
var interval;

function startTimer() {
    count--;
    console.log(count);
    stopTimer();
}

function stopTimer() {
    if(count < 1) {
        clearInterval(interval);
    }
}

class Timer {
    constructor() {
        this.time = 30;
    }
    updateTimer() {
        const timer = document.getElementById('timer');
        timer.innerHTML = `Timer: ${this.time}`;
        interval = setInterval(startTimer, 1000);
    }
}

export default Timer;