import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

const btnDrawer = document.querySelector('.drawer')
const menu = document.querySelector('.desktop ul');
const myBody = document.body;

//open menu
btnDrawer.addEventListener('click', e => {
	menu.classList.toggle('open');
	e.stopPropagation()
	console.log('masuk btnDrawer')
})

//close menu
myBody.addEventListener('click', e => {
	menu.classList.remove('open');
	e.stopPropagation()
})


//get year
let year = new Date().getFullYear();
let captionYear = document.querySelector('.year');
captionYear.textContent = year;
