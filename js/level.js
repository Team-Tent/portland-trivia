import highscoreApi from '../api/highscore-api.js';
import html from '../js/html.js';

function makeTemplate() {
    return html`
        <h2 id="levelDisplay">Level: </h2>
    `;
}

class Level {
    constructor() {
        
    }
    render() {
        const dom = makeTemplate();
        return dom;
    }
    update() {
        
    }
}

export default Level;