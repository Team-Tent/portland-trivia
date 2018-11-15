import Header from './header.js';
import Graph from './chart.js';
import highscoreApi from '../api/highscore-api.js';

const headerSection = document.getElementById('header');
const root = document.getElementById('root');
const allGames = highscoreApi.getAllGames();

const header = new Header;
headerSection.appendChild(header.render());

if(allGames) {
    const chart = new Graph;
    root.appendChild(chart.render());
    chart.renderTable();
    chart.renderGraph();
}