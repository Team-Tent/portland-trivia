// import highscoreApi from '../api/highscore-api.js';
import Round from '../js/questions.js';
let currentRound = 0;


const round = new Round;
const root = document.getElementById('root');

function getAnswer() {
    const form = document.getElementById('activeQuestion');
        
    if(form){
        
        form.addEventListener('click', event => {
            event.preventDefault();
        });
        const options = document.querySelectorAll('p');
        options.forEach(option => {
            option.addEventListener('click', event => {
                console.log(event.target);
            });
        });
    }
}


root.appendChild(round.render());
root.addEventListener('click', function(event) {
    if(event.target.name === 'choice') {
        const category = event.target.className;
        round.getQuestion(currentRound, category);
        event.target.disabled = true;
        getAnswer();
    }
});