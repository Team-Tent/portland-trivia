import html from './html.js';

function makeTemplate() {
    return html`
        <div>
            <img class="logo" src="../assets/tent.png">
            <h1>Portland Jeopardy</h1>
        </div>
        <nav>
            <a href="../index.html">Home</a>
            <a href="../html/about.html">About</a>
            <a href="../html/highscore.html">High Scores</a>
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