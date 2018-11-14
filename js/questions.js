import questionsApi from '../api/questions-api.js';
import html from './html.js';
import highscoreApi from '../api/highscore-api.js';
import Score from '../js/score.js';
import Timer from '../js/timer.js';


const questions = questionsApi.getAll();
let chosen = [];
let selectedQuestion = {};
const root = document.getElementById('root');
var timer;

function makeTemplate() {
    return html`
        <table id="questionsTable">
            <tr>
                <th>Landmarks</th>
                <th>Culture</th>
                <th>Social</th>
            </tr>
            <tr>
                <td><button name="choice" class="landmarks" value="100">$100</button></td>
                <td><button name="choice" class="culture" value="100">$100</button></td>
                <td><button name="choice" class="social" value="100">$100</button></td>
            </tr>
            <tr>
                <td><button name="choice" class="landmarks" value="200">$200</button></td>
                <td><button name="choice" class="culture" value="200">$200</button></td>
                <td><button name="choice" class="social" value="200">$200</button></td>
            </tr>
            <tr>
                <td><button name="choice" class="landmarks" value="300">$300</button></td>
                <td><button name="choice" class="culture" value="300">$300</button></td>
                <td><button name="choice" class="social" value="300">$300</button></td>
            </tr>
        </table>
    `;
}


function getRandomQuestion(roundDifficulty, category) {
    let options = [];
    console.log(chosen.length);
    
    if(chosen.length < 9) {
        roundDifficulty.forEach(element => {
            if(element.category === category && !chosen.includes(element)) {
                options.push(element);
            }
        });
        
        let index = Math.floor(Math.random() * options.length);
        
        while(chosen.includes(options[index]) && chosen.length < 9) {
            index = Math.floor(Math.random() * options.length);
        }
        
        selectedQuestion = options[index];
        chosen.push(selectedQuestion);
        const dom = populateForm();
        root.appendChild(dom);
        timer = new Timer;
        timer.updateTimer();
    }
}

function populateForm() {

    return html `
        <form id="activeQuestion">
            <h2 id="timer"></h2>
            <h2>${selectedQuestion.question}</h2>
            <label for="buttonA"></label>
            <p name="options" id="A">
            ${selectedQuestion.answerA}</p>
            <label for="buttonB"></label>
            <p name="options" id="B">
            ${selectedQuestion.answerB}</p>            
            <label for="buttonC"></label>
            <p name="options" id="C">
            ${selectedQuestion.answerC}</p>
            <label for="buttonD"></label>
            <p name="options" id="D">
            ${selectedQuestion.answerD}</p>
        </form>
    `;
}

function gameOver() {
    const game = highscoreApi.getGame();
    const scoreDisplay = document.getElementById('scoreDisplay');
    const choices = document.querySelectorAll('button[name="choice"]');

    scoreDisplay.innerHTML = '';

    choices.forEach(choice => {
        choice.disabled = true;
    });
    return html`
        <h2>Game Over!</h2>
        <h3>Your score: ${game.score}</h3>
        <button onclick="window.location='highscore.html'">View High Scores</button>
    `;
}


class Round {
    constructor(){
        this.questions = questions;   
    }
    render() {
        const dom = makeTemplate();
        return dom;
    }
    getQuestion(currentRound, category) {
        const roundDifficulty = this.questions[currentRound];
        getRandomQuestion(roundDifficulty, category);
    }
    getChosen() {
        return chosen;
    }
    checkAnswer(score) {
        const form = document.getElementById('activeQuestion');
        if(form){
            const options = document.querySelectorAll('p');
            options.forEach(option => {
                option.addEventListener('click', event => {
                    const root = document.getElementById('root');
                    let rootLength = root.childNodes.length - 1;
                    timer.resetTimer();
                    for(let i = rootLength; i > 6; i--) {
                        root.removeChild(root.lastChild);
                    }
                    if(event.target.id === selectedQuestion.correctAnswer) {
                        highscoreApi.updateScore(score);
                        const currentScore = new Score;
                        currentScore.update();
                        const table = document.getElementById('questionsTable');
                        table.classList.remove('hidden');
                    }
                    else {
                        root.appendChild(gameOver());
                    }
                });
            });
        }
    }
}

export default Round;