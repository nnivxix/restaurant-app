import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

const btnDrawer = document.querySelector('.drawer')
const menu = document.querySelector('.desktop ul');
const myBody = document.body;

btnDrawer.addEventListener('click', e => {
	menu.classList.toggle('open');
	e.stopPropagation()
	console.log('masuk btnDrawer')
})
myBody.addEventListener('click', e => {
	menu.classList.remove('open');
	e.stopPropagation()
})

//import data from '../DATA.json'
//console.log(data)

const getRest = () => {
	fetch("http://localhost:3000/restaurants")
	.then(res => {
		return res.json();
	})
	.then(data => {
		console.log(data)
	})
	.catch( err => {
		console.log(err)
	})
}
getRest()