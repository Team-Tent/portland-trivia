class User{
    constructor(username, highscore){
        this.username = username;
        this.highscore = highscore;
    }
}

const highscoreApi = {
    init(username) {
        var user = new User(username, 0);
        var storedUsers = JSON.parse(localStorage.getItem('users'));

        if(storedUsers) {
            storedUsers.push(user);
        } else {
            storedUsers = [user];
        }

        localStorage.setItem('users', JSON.stringify((storedUsers)));
    },

    updateScore(user, score) {
        var users = JSON.parse(localStorage.getItem('users'));

        users[user].highscore = score;

        localStorage.setItem('users', JSON.stringify(users));
    }
};

export default highscoreApi;