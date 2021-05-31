import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import cards from './components/cards.js'
import AppBar from './views/AppBar.js'


const btnDrawer = document.querySelector('.drawer')
const menu = document.querySelector('.desktop .nav__list');
const myBody = document.body;
const catalogs = document.querySelector('.catalogs');

const appBar = new AppBar({
	button: btnDrawer,
	drawer: menu,
	content: catalogs
})

window.addEventListener('hashchange', () => {
  appBar.renderPage();
});
 
window.addEventListener('load', () => {
  appBar.renderPage();
});

//get year for footer copyright
let year = new Date().getFullYear();
let captionYear = document.querySelector('.year');
captionYear.textContent = year;

// cards()
let cardItem = cards()
catalogs.innerHTML += cardItem