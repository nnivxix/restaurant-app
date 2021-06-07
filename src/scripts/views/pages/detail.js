import UrlParser from '../../routes/url-parser';
import restaurantSource from '../../data/restaurant-source';
import { detailRestaurant } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
	async render() {
		return `
      <h2 class="detail__title">Detail Restaurant</h2>
      <div class="detail__restaurant">

      </div>
      <div id="likeButtonContainer"></div>
    `;
	},

	async afterRender() {
		// Fungsi ini akan dipanggil setelah render()
		const url = UrlParser.parseActiveUrlWithoutCombiner();
		const restaurant = await restaurantSource.detailRestaurant(url.id);
		const detail = document.querySelector('.detail__restaurant');
		detail.innerHTML = detailRestaurant(restaurant);
		LikeButtonInitiator.init({
			likeButtonContainer: document.querySelector('#likeButtonContainer'),
			resto: {
				id: restaurant.id,
				name: restaurant.name,
				description: restaurant.description,
				pictureId: restaurant.pictureId,
				rating: restaurant.rating,
				address: restaurant.address,
				city: restaurant.city,
				menus: restaurant.menus,
				categories: restaurant.categories,
				customerReviews: restaurant.customerReviews,
			},
		});
	},
};

export default Detail;
