import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import cards from './components/cards';
import AppBar from './views/AppBar';

const btnDrawer = document.querySelector('.drawer');
const menu = document.querySelector('.desktop .nav__list');
const catalogs = document.querySelector('.catalogs');

const appBar = new AppBar({
  button: btnDrawer,
  drawer: menu,
  content: catalogs,
});

window.addEventListener('hashchange', () => {
  appBar.renderPage();
});

window.addEventListener('load', () => {
  appBar.renderPage();
});

// get year for footer copyright
const year = new Date().getFullYear();
const captionYear = document.querySelector('.year');
captionYear.textContent = year;

// cards()
const cardItem = cards();
catalogs.innerHTML += cardItem;
