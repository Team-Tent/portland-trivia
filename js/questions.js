import questionsApi from '../api/questions-api.js';
import html from './html.js';



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
                <td><button name="choice" class="landmarks">$100</button></td>
                <td><button name="choice" class="culture">$100</button></td>
                <td><button name="choice" class="social">$100</button></td>
            </tr>
            <tr>
                <td><button name="choice" class="landmarks">$200</button></td>
                <td><button name="choice" class="culture">$200</button></td>
                <td><button name="choice" class="social">$200</button></td>
            </tr>
            <tr>
                <td><button name="choice" class="landmarks">$300</button></td>
                <td><button name="choice" class="culture">$300</button></td>
                <td><button name="choice" class="social">$300</button></td>
            </tr>
        </table>
    `;
}
let chosen = [];

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
        
        const selectedQuestion = options[index];
        chosen.push(selectedQuestion);
        const root = document.getElementById('root');
        const dom = populateForm(selectedQuestion);
        root.appendChild(dom);
        // const form = dom.getElementById('activeQuestion');
        // console.log(dom);
        // form.addEventListener('submit', () => {
        //     console.log('answered');
        // });

    }
}

function populateForm(selectedQuestion) {
    return html `
        <form id="activeQuestion" class="hidden">
            <p><strong>${selectedQuestion.question}</strong></p>
            <label for="buttonA"></label>
            <p id="buttonA" value="answerA"></p>
            ${selectedQuestion.answerA}
            <label for="buttonB"></label>
            <p id="buttonB" value="answerB"></p>
            ${selectedQuestion.answerB}            
            <label for="buttonC"></label>
            <p id="buttonC" value="answerC"></p>
            ${selectedQuestion.answerC}
            <label for="buttonD"></label>
            <p id="buttonD" value="answerD"></p>
            ${selectedQuestion.answerD}
        </form>
    `;
}

class Round {
    constructor(){
        this.questions = questions;
        
        // call get random function for easy, medium and hard
    }
    render() {
        const dom = makeTemplate();
        return dom;
    }
    getQuestion(currentRound, category) {
        const roundDifficulty = this.questions[currentRound];
        getRandomQuestion(roundDifficulty, category);
    }
}

export default Round;