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
        </table>
    `;
}

class Round {
    constructor(){
        this.questions = questions;
        
        // call get random function for easy, medium and hard
    }
}

export default Round;