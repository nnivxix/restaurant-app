import FavoriteRestoIdb from '../../data/database-resto';
import { cardResto } from '../templates/template-creator';

const Favorites = {
	async render() {
		return `
    <div class="content">
      <h2 class="detail__title">Your Liked Restaurant</h2>
      <div id="restos" class="catalogs">
 
      </div>
    </div>`;
	},

	async afterRender() {
		const restos = await FavoriteRestoIdb.getAllRestos();
		const restosContainer = document.querySelector('.catalogs');
		const notDataFound = `
			<div class="container-img">
				<p>Opp's, Looks like you haven't saved your favorite restaurant data.</p>
				<img src="../images/404.png" alt="notfound image">
			</div>
		`;
		if (restos.length === 0) {
			restosContainer.innerHTML = notDataFound;
		} else {
			restos.forEach((restaurant) => {
				restosContainer.innerHTML += cardResto(restaurant);
			});
		}

		console.log(restos);
	},
};

export default Favorites;
