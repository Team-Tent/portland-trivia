import Header from './header.js';
import Graph from './chart.js';

const headerSection = document.getElementById('header');
const root = document.getElementById('root');

const header = new Header;
headerSection.appendChild(header.render());

const chart = new Graph;
root.appendChild(chart.render());
chart.renderTable();
chart.renderGraph();