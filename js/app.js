import highscoreApi from '../api/highscore-api.js';

const form = document.getElementById('userInfo');

form.addEventListener('submit', event => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    
    highscoreApi.init(username);
    window.location = 'html/game.html';  
    highscoreApi.storeFinalGame();
});