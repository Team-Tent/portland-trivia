// store game in allGames after game over


// import highscoreApi from '../api/highscore-api.js';
import Round from './questions.js';
import Score from './score.js';
import Level from './level.js';

let currentRound = 0;


const round = new Round;
const root = document.getElementById('root');
let chosen = round.getChosen();

const level = new Level(currentRound + 1);
root.appendChild(level.render());

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
            buttons.forEach(button => {
                button.disabled = false;
            });
            currentRound++;
            level.getRound(currentRound + 1);
            // display level on screen
        }
    }
});