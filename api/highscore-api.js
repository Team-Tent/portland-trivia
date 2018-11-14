// var username;

class Game {
    constructor(username) {
        this.username = username;
        this.score = 0;
    }
}

class User {
    constructor(username) {
        this.username = username;
        this.scores = [];
        this.average = 0;
    }
}

const highscoreApi = {
    init(username) {
        // username = name;
        var game = new Game(username);

        localStorage.setItem('game', JSON.stringify(game));
    },

    updateScore(score) {
        var game = JSON.parse(localStorage.getItem('game'));

        game.score += score;

        localStorage.setItem('game', JSON.stringify(game));
    },

    getGame() {
        return JSON.parse(localStorage.getItem('game'));
    },

    storeFinalGame(username) {
        const game = JSON.parse(localStorage.getItem('game'));
        var allGames = JSON.parse(localStorage.getItem('allGames'));
        var user;

        if(allGames) {
            const userIndex = allGames.findIndex(games => {
                return games.username === game.username;
            });

            console.log(userIndex);

            if(userIndex >= 0) {
                user = allGames[userIndex];
                allGames.splice(userIndex, 1);
            } else {
                user = new User(username);
            }
        } else {
            user = new User(username);
            allGames = [];
        }

        user.scores.push(game.score);

        let totalScore = 0;
        user.scores.forEach(score => {
            totalScore += score;
        });
        user.average = totalScore / user.scores.length;

        allGames.push(user);

        localStorage.setItem('allGames', JSON.stringify((allGames)));
    }
};

export default highscoreApi;