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




class Round {
    constructor(){
        this.questions = questions;
        
        // call get random function for easy, medium and hard
    }
    render() {
        const dom = makeTemplate();
        return dom;
    }
}

export default Round;