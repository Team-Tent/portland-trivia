import highscoreApi from '../api/highscore-api.js';
import Header from './header.js';


const form = document.getElementById('userInfo');
const headerSection = document.getElementById('header');


const header = new Header;
headerSection.appendChild(header.render());


form.addEventListener('submit', event => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    
    highscoreApi.init(username);
    window.location = 'html/game.html';
});