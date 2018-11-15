import Header from './header.js';
import Chart from './chart.js';

const headerSection = document.getElementById('header');
const root = document.getElementById('root');

const header = new Header;
headerSection.appendChild(header.render());

const chart = new Chart;
root.appendChild(chart.render());