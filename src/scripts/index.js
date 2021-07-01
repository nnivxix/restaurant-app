import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import AppBar from './views/AppBar';
import swRegister from './utils/sw-register';
import './views/components/TheFooter';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

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
