import highscoreApi from '../api/highscore-api.js';
import Round from '../js/questions.js';
import html from '../js/html.js';

const round = new Round;
const root = document.getElementById('root');
root.appendChild(round.render());
root.appendChild(html`<p>hello</p>`);
root.addEventListener('click', function(event) {
    console.log('clicked', event);
});