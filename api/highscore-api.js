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

    getAllGames() {
        return JSON.parse(localStorage.getItem('allGames'));
    },

    storeFinalGame(username) {
        const game = JSON.parse(localStorage.getItem('game'));
        var allGames = JSON.parse(localStorage.getItem('allGames'));
        var user;

        if(allGames) {
            const userIndex = allGames.findIndex(games => {
                return games.username === game.username;
            });

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
        user.average = Math.round(totalScore / user.scores.length);
        user.highscore = Math.max(...user.scores);

        allGames.push(user);

        localStorage.setItem('allGames', JSON.stringify((allGames)));
        this.updateCollective();
    },

    updateCollective() {
        const allGames = JSON.parse(localStorage.getItem('allGames'));
        var collective = {};
        var highscores = [];
        var averages = [];
        var totalAvg = 0;

        allGames.forEach(game => {
            highscores.push(game.highscore);
            averages.push(game.average);
        });

        averages.forEach(avg => {
            totalAvg += avg;
        });

        collective.collHigh = Math.max(...highscores);
        collective.collAvg = Math.round(totalAvg / averages.length);

        localStorage.setItem('collective', JSON.stringify(collective));
    },

    getCollective() {
        return JSON.parse(localStorage.getItem('collective'));
    }
};

export default highscoreApi;