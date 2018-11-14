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
        this.username = username;
        var game = new Game(this.username);

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

    storeFinalGame() {
        const game = JSON.parse(localStorage.getItem('game'));
        var allGames = JSON.parse(localStorage.getItem('allGames'));

        if(allGames) {
            const userIndex = allGames.findIndex(games => {
                return games.username === game.username;
            });

            if(userIndex) {
                this.user = allGames[userIndex];
            } else {
                this.user = new User(this.username);
            }
        } else {
            this.user = new User(this.username);
            allGames = [];
        }

        this.user.scores.push(game.score);

        let totalScore = 0;
        this.user.scores.forEach(score => {
            totalScore += score;
        });
        this.user.average = totalScore / this.user.scores.length;

        allGames.push(this.user);

        localStorage.setItem('allGames', JSON.stringify((allGames)));
    }
};

export default highscoreApi;