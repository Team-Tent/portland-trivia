import highscoreApi from '../api/highscore-api.js';
import html from '../js/html.js';

function makeTemplate() {
    return html`
        <h2 id="scoreDisplay" class="levelDisplayClass">Current Score: ${highscoreApi.getGame().score}</h2>
    `;
}

class Score {
    constructor() {
        var game = highscoreApi.getGame();
        game.score = 0;
        localStorage.setItem('game', JSON.stringify(game));
    }
    render() {
        const dom = makeTemplate();
        return dom;
    }
    update() {
        const scoreDisplay = document.getElementById('scoreDisplay');
        scoreDisplay.innerHTML = `Current Score: ${highscoreApi.getGame().score}`;
    }
}

export default Score;