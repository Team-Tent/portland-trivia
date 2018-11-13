import highscoreApi from '../api/highscore-api.js';
import Round from '../js/questions.js';
import html from '../js/html.js';

let currentRound = 0;


const round = new Round;
const root = document.getElementById('root');
root.appendChild(round.render());
root.addEventListener('click', function(event) {
    const category = event.target.className;
    round.getQuestion(currentRound, category);

    

});