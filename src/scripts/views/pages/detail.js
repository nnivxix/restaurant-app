import UrlParser from '../../routes/url-parser';
import restaurantSource from '../../data/restaurant-source';
import { detailRestaurant, toasts } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
	async render() {
		return `
      <h2 class="detail__title">Detail Restaurant</h2>
      <div class="detail__restaurant">

      </div>
      <div id="likeButtonContainer"></div>
      ${toasts('err','error', 'Harus diisi semuanya gaes.')}
      ${toasts('ch','check', 'Ripiumu akan segera ditambahkan.')}

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

		const textReview = document.querySelector('.input__review')
		const nameReview = document.querySelector('.name__reviewer')
		const btnReview = document.querySelector('.submit__review');

		const err = document.querySelector('.err');
		const ch = document.querySelector('.ch');
		btnReview.addEventListener('click', (e) => {
			e.stopPropagation();
			if(nameReview.value == '' || textReview.value == ''){
				err.classList.add('toast__display')
				err.classList.add('fade-in')

				setTimeout(function(){
					err.classList.add('fade-out')
					err.classList.remove('toast__display');

				}, 5000)
			} else{
				restaurantSource.postReview({
					id: restaurant.id,
					name: nameReview.value,
					review: textReview.value
				})

				ch.classList.add('toast__display')
				ch.classList.add('fade-in')

				setTimeout(function(){
					ch.classList.add('fade-out')
					ch.classList.remove('toast__display');
					location.reload();
				}, 5000)
				nameReview.value = '';
				textReview.value = '';

			}
		})
	},
};

export default Detail;
