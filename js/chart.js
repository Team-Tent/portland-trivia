import highscoreApi from '../api/highscore-api.js';
import html from './html.js';

function makeDataTable() {
    const game = highscoreApi.getGame();
    const allGames = highscoreApi.getAllGames();
    const collective = highscoreApi.getCollective();
    const userIndex = allGames.findIndex(games => {
        return games.username === game.username;
    });
    const user = allGames[userIndex];

    return html `
        <table>
            <tr>
                <td><h3>Game Score: </h3>${game.score}</td>
            </tr>
            <tr>
                <td><h3>User High Score: </h3>${user.highscore}</td>
            </tr>
            <tr>
                <td><h3>User Average: </h3>${user.average}</td>
            </tr>
            <tr>
                <td><h3>High Score: </h3>${collective.collHigh}</td>
            </tr>
            <tr>
                <td><h3>Collective Average: </h3>${collective.collAvg}</td>
            </tr>
        </table>
    `;
}

class Chart {
    constructor() {
        
    }

    render() {
        const dom = makeDataTable();
        return dom;
    }
}

export default Chart;