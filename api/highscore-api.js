// the issue with using class models
// is that they don't survive the localStorage round-trip
// and these don't have any associated behavior, so 
// just use object literals
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
        let game = {
            username: username,
            score: 0
        };

        localStorage.setItem('game', JSON.stringify(game));
    },

    updateScore(score) {
        let game = JSON.parse(localStorage.getItem('game'));

        game.score += score;

        localStorage.setItem('game', JSON.stringify(game));
    },

    getGame() {
        return JSON.parse(localStorage.getItem('game'));
    },

    getAllGames() {
        return JSON.parse(localStorage.getItem('allGames'));
    },

    storeFinalGame() {
        const game = JSON.parse(localStorage.getItem('game'));
        // use a default value approach:
        let allGames = JSON.parse(localStorage.getItem('allGames')) || [];
        
        let user = allGames.find(games => {
            return games.username === game.username;
        });

        if(!user) {
            user = {
                username: game.username,
                scores: [],
                average: 0
            };
            allGames.push(user);
        }

        user.scores.push(game.score);

        let totalScore = user.scores.reduce((a, b) => a + b, 0);
        user.average = Math.round(totalScore / user.scores.length);
        user.highscore = Math.max(...user.scores);

        localStorage.setItem('allGames', JSON.stringify((allGames)));
        this.updateCollective();
    },

    updateCollective() {
        const allGames = JSON.parse(localStorage.getItem('allGames'));
        const highscores = allGames.map(game => game.highscore);
        const averages = allGames.map(game => game.average);
        const totalAvg = averages.reduce((a, b) => a + b, 0);
        
        const collective = {
            highScore: Math.max(...highscores),
            average: Math.round(totalAvg / averages.length)
        };

        localStorage.setItem('collective', JSON.stringify(collective));
    },

    getCollective() {
        return JSON.parse(localStorage.getItem('collective'));
    }
};

export default highscoreApi;