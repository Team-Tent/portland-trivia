import Round from './questions.js';

let count;
var interval;
var timer;

function startTimer() {
    timer.innerHTML = `Timer: ${count}`;
    count--;
    if(count < 0) {
        stopTimer();
        const form = document.getElementById('activeQuestion');
        form.innerHTML = '';
        const round = new Round;
        round.endGame(false);
        timer.classList.remove('redText');
    }
    if(count === 8) {
        timer.classList.add('redText');
    }
}

function stopTimer() {
    clearInterval(interval);
}

class Timer {
    constructor() {
        count = 29;
        timer = document.getElementById('timer');
    }
    updateTimer() {       
        timer.innerHTML = `Timer: ${30}`;
        interval = setInterval(startTimer, 1000);
    }
    resetTimer() {
        stopTimer();
        count = 30;
    }
}

export default Timer;