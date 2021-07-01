import FavoriteRestoIdb from '../../data/database-resto';
import { cardResto, notFoundStatus } from '../templates/template-creator';

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
		if (restos.length === 0) {
			restosContainer.innerHTML = notFoundStatus();
		} else {
			restos.forEach((restaurant) => {
				restosContainer.innerHTML += cardResto(restaurant);
			});
		}
	},
};

export default Favorites;
