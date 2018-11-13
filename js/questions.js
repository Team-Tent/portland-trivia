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
                <td class="landmarks">$100</td>
                <td class="culture">$100</td>
                <td class="social">$100</td>
            </tr>
            <tr>
                <td class="landmarks">$200</td>
                <td class="culture">$200</td>
                <td class="social">$200</td>
            </tr>
            <tr>
                <td class="landmarks">$300</td>
                <td class="culture">$300</td>
                <td class="social">$300</td>
            </tr>
        </table>
    `;
}
let chosen = [];

function getQuestion(roundDifficulty, category) {
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
        
        chosen.push(options[index]);
    
        console.log('chosen', chosen);
        console.log('options', options);
    }

    
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
        const index = roundDifficulty.findIndex(question => {
            return question.category === category;
        });
        getQuestion(roundDifficulty, category);
    }
}

export default Round;