//distinguish a different class, Game, that constructs username and score
//change User class to initiate empty array of scores, and average score
//highscoreApi init creates a new instance of Game, not User
//create new instance of User in storeFinalGame method, and use that to push to allGames

class User{
    constructor(username, score){
        this.username = username;
        this.score = score;
    }
}

const highscoreApi = {
    init(username) {
        var user = new User(username, 0);

        localStorage.setItem('game', JSON.stringify(user));
    },

    updateScore(score) {
        var game = JSON.parse(localStorage.getItem('game'));

        game.score += score;

        localStorage.setItem('game', JSON.stringify(game));
    },

    getGame() {
        return JSON.parse(localStorage.getItem('game'));
    },

    storeFinalGame() {
        const game = JSON.parse(localStorage.getItem('game'));
        var allGames = JSON.parse(localStorage.getItem('allGames'));

        if(allGames) {
            const userIndex = allGames.findIndex(games => {
                return games.username === game.username;
            });
            var user = allGames[userIndex];

            let totalScore = 0;
            if(user.scores) {
                user.scores.push(game.score);
                user.scores.forEach(score => {
                    totalScore += score;
                });
            } else {
                user.scores = [game.score];
            }
            user.average = totalScore / user.scores.length;
            
            
            
            
            
            allGames.push(user);
        } else {
            allGames = [game];
        }
        // console.log(user);

        localStorage.setItem('allGames', JSON.stringify((allGames))); 
    }
};

export default highscoreApi;