// import highscoreApi from '../api/highscore-api.js';
import Round from '../js/questions.js';
import Score from '../js/score.js';

let currentRound = 0;


const round = new Round;
const root = document.getElementById('root');

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
    }
});