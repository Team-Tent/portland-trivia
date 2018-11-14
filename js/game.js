// store game in allGames after game over


// import highscoreApi from '../api/highscore-api.js';
import Round from '../js/questions.js';
import Score from '../js/score.js';

let currentRound = 0;


const round = new Round;
const root = document.getElementById('root');
let chosen = round.getChosen();

const score = new Score;
root.appendChild(score.render());
root.appendChild(round.render());
root.addEventListener('click', function(event) {
    if(event.target.name === 'choice') {
        const table = document.getElementById('questionsTable');
        table.classList.add('hidden');
        const category = event.target.className;
        round.getQuestion(currentRound, category);
        event.target.disabled = true;
        round.checkAnswer(parseInt(event.target.value));

        if(chosen.length % 9 === 0) {
            const buttons = document.querySelectorAll('button[name="choice"]');
            console.log(buttons);
            buttons.forEach(button => {
                button.disabled = false;
            });
            currentRound++;
            // round.getQuestion(currentRound, category);
            // display level on screen
            // if chosen length is 27, display you win
        }
    }
});