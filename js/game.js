import highscoreApi from '../api/highscore-api.js';
import Round from '../js/questions.js';

const round = new Round;
const root = document.getElementById('root');
root.appendChild(round.render());
