class User{
    constructor(username, score){
        this.username = username;
        this.score = score;
    }
}

const highscoreApi = {
    // init(username) {
    //     var user = new User(username, 0);
    //     var storedUsers = JSON.parse(localStorage.getItem('users'));

    //     if(storedUsers) {
    //         storedUsers.push(user);
    //     } else {
    //         storedUsers = [user];
    //     }

    //     localStorage.setItem('users', JSON.stringify((storedUsers)));
    // },

    init(username) {
        var user = new User(username, 0);

        localStorage.setItem('game', JSON.stringify(user));
    },

    updateScore(score) {
        var game = JSON.parse(localStorage.getItem('game'));

        game.score += score;

        localStorage.setItem('users', JSON.stringify(game));
    },

    storeFinalGame() {
        const game = JSON.parse(localStorage.getItem('game'));
        var allGames = JSON.parse(localStorage.getItem('allGames'));

        if(allGames) {
            //if user exists, add score to array of scores and update user's average
            //else user's average score and array of scores is the current score
            const userIndex = allGames.findIndex(games => {
                return games.username === game.username;
            });
            var user = allGames[userIndex];

            if(user) {
                user.scores.push(game.score);
            } else {
                user.scores = [game.score];
            }
            
            
            
            
            
            // allGames.push(game);
        } else {
            allGames = [game];
        }
        console.log(user);

        localStorage.setItem('allGames', JSON.stringify((allGames))); 
    }
};

export default highscoreApi;