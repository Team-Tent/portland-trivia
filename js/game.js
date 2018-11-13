// import highscoreApi from '../api/highscore-api.js';
import Round from '../js/questions.js';
let currentRound = 0;


const round = new Round;
const root = document.getElementById('root');
root.appendChild(round.render());
root.addEventListener('click', function(event) {
    if(event.target.name === 'choice') {
        const category = event.target.className;
        round.getQuestion(currentRound, category);
        event.target.disabled = true;

        const form = document.getElementById('activeQuestion');
        console.log(form);
        
        if(form){
            form.addEventListener('submit', event => {
                event.preventDefault();
                console.log('answered');
            });
        }
    }
    
});