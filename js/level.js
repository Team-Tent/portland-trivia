import html from '../js/html.js';

var round = 1;

function makeTemplate(level) {
    return html`
        <h2 id="levelDisplay" class="levelDisplayClass">Level: ${level}</h2>
    `;
}

class Level {
    constructor(level) {
        this.level = level;
    }
    render() {
        const dom = makeTemplate(this.level);
        return dom;
    }
    update() {
        const levelDisplay = document.getElementById('levelDisplay');
        levelDisplay.innerHTML = `Level: ${round}`;
    }
    getRound(currentRound) {
        round = currentRound;
    }
}

export default Level;