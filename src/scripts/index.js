import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import AppBar from './views/AppBar';
import swRegister from './utils/sw-register';
import './views/components/TheFooter';

const btnDrawer = document.querySelector('.drawer');
const menu = document.querySelector('.desktop .nav__list');
const main = document.querySelector('#content');

const appBar = new AppBar({
	button: btnDrawer,
	drawer: menu,
	content: main,
});

window.addEventListener('hashchange', () => {
	appBar.renderPage();
});

window.addEventListener('load', () => {
	appBar.renderPage();
	swRegister();
});

// get year for footer copyright
// const year = new Date().getFullYear();
// const captionYear = document.querySelector('.year');
// captionYear.textContent = year;
