import html from './html.js';
import Header from './header.js';

function makeTemplate() {
    return html`
        <header></header>
    `;
}

class App {
    render() {
        const dom = makeTemplate();
        const headerSection = dom.querySelector('header');
        const header = new Header();
        headerSection.appendChild(header.render());
        return dom;
    }
}

const app = new App();
document.getElementById('header').appendChild(app.render());