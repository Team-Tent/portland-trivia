import highscoreApi from '../api/highscore-api.js';
import html from '../js/html.js';

function makeTemplate() {
    return html`
        <h2 id="scoreDisplay">Current Score: ${highscoreApi.getGame().score}</h2>
    `;
}

class Score {
    constructor() {
        this.score = highscoreApi.getGame().score;
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