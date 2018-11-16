import highscoreApi from '../api/highscore-api.js';
import html from './html.js';

var game;
var allGames;
var collective;
var userIndex;
var user;

function makeTemplate() {
    game = highscoreApi.getGame();
    allGames = highscoreApi.getAllGames();
    collective = highscoreApi.getCollective();
    userIndex = allGames.findIndex(games => {
        return games.username === game.username;
    });
    user = allGames[userIndex];

    return html `
        <div id="graph">
            <canvas id="progress" width="200" height="500"></canvas>
        </div>   

        <table id="dataTable"></table>
    `;
}

function makeGraph() {
    const ctx = document.getElementById('progress').getContext('2d');
    var userHigh = [user.highscore];
    var userAvg = [user.average];
    var collHigh = [collective.collHigh];
    var collAvg = [collective.collAvg];
    var marty = [500];
    var injoong = [200];
    var labels = ['0'];
    let count = 0;

    user.scores.forEach(() => {
        count++;
        userHigh.push(user.highscore);
        userAvg.push(user.average);
        collHigh.push(collective.collHigh);
        collAvg.push(collective.collAvg);
        marty.push(500);
        injoong.push(200);
        labels.push(`Attempt ${count}`);
    });
    
    /* eslint-disable-next-line */
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'User Scores',
                    data: user.scores,
                    backgroundColor: 'pink',
                    borderColor: 'pink',
                    borderWidth: 2,
                    fill: false
                },
                {
                    label: 'User High Score',
                    data: userHigh,
                    backgroundColor: 'green',
                    borderColor: 'green',
                    borderWidth: 2,
                    fill: false
                },
                {
                    label: 'User Average',
                    data: userAvg,
                    backgroundColor: 'blue',
                    borderColor: 'blue',
                    borderWidth: 2,
                    fill: false
                },
                {
                    label: 'High Score',
                    data: collHigh,
                    backgroundColor: 'red',
                    borderColor: 'red',
                    borderWidth: 2,
                    fill: false
                },
                {
                    label: 'Collective Average',
                    data: collAvg,
                    backgroundColor: 'orange',
                    borderColor: 'orange',
                    borderWidth: 2,
                    fill: false
                },
                {
                    label: 'Marty\'s Score',
                    data: marty,
                    backgroundColor: 'lightsteelblue',
                    borderColor: 'lightsteelblue',
                    borderWidth: 2,
                    fill: false
                },
                {
                    label: 'Injoong\'s Score',
                    data: marty,
                    backgroundColor: 'purple',
                    borderColor: 'purple',
                    borderWidth: 2,
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            },
            title: {
                display: true,
                text: 'User Progress'
            }
        }
    });
}

function makeDataTable() {
    return `
        <tr>
            <td><strong>User: </strong>${game.username}</td>
        </tr>
        <tr>
            <td><strong>Game Score: </strong>${game.score}</td>
        </tr>
        <tr>
            <td><strong>User High Score: </strong>${user.highscore}</td>
        </tr>
        <tr>
            <td><strong>User Average: </strong>${user.average}</td>
        </tr>
        <tr>
            <td><strong>High Score: </strong>${collective.collHigh}</td>
        </tr>
        <tr>
            <td><strong>Collective Average: </strong>${collective.collAvg}</td>
        </tr>
    `;
}

class Graph {
    render() {
        const dom = makeTemplate();
        return dom;
    }

    renderTable() {
        const table = document.getElementById('dataTable');
        table.innerHTML = makeDataTable();
    }

    renderGraph() {
        makeGraph();
    }
}

export default Graph;