import questionsApi from '../api/questions-api.js';
import html from './html.js';
import highscoreApi from '../api/highscore-api.js';



const questions = questionsApi.getAll();

function makeTemplate() {
    return html`
        <table>
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

let chosen = [];
let selectedQuestion = {};
const root = document.getElementById('root');


function getRandomQuestion(roundDifficulty, category) {
    let options = [];
    
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
    }
}

function populateForm() {
    return html `
        <form id="activeQuestion" class="hidden">
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
    return html`
        <h2>Game Over!</h2>
        <button>View High Scores</button>
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
    checkAnswer(score) {
        const form = document.getElementById('activeQuestion');
        if(form){
        
            form.addEventListener('click', event => {
                event.preventDefault();
            });
            const options = document.querySelectorAll('p');
            options.forEach(option => {
                option.addEventListener('click', event => {
                    const root = document.getElementById('root');
                    let rootLength = root.childNodes.length - 1;
                    for(let i = rootLength; i > 3; i--) {
                        root.removeChild(root.lastChild);
                    }
                    if(event.target.id === selectedQuestion.correctAnswer) {
                        highscoreApi.updateScore(score);
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