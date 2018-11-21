import html from './html.js';

function makeTemplate() {
    // use styling, not <strong> on links
    return html`
        <div>
            <img class="logo" src="assets/tent-drawing-cartoon-3.png">
            <h1>Portland Jeopardy</h1>
        </div>
        <nav>
            <a id="home" href="index.html"><strong>Home</strong></a>
            <a id="about" href="about.html"><strong>About</strong></a>
            <a id="highscores" href="highscore.html"><strong>High Scores</strong></a>
        </nav>
    `;
}

class Header {
    render() {
        const dom = makeTemplate();
        return dom;
    }
}

export default Header;