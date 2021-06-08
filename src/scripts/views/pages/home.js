import '../components/HeroHeader';
import restaurantSource from '../../data/restaurant-source';
import { cardResto } from '../templates/template-creator';

const Home = {
	async render() {
		return `
    <hero-header> </hero-header>
    <section class="catalogs">
    <h1 tabindex="0" id="trending" class="cap__trend">Explore Nearby Restaurants <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-graph-up" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5z"/>
    </svg></h1>
    </section>
    `;
	},

	async afterRender() {
		// Fungsi ini akan dipanggil setelah render()
		const restaurants = await restaurantSource.getRestaurant();
		const catalogs = document.querySelector('.catalogs');
		restaurants.forEach((restaurant) => {
			catalogs.innerHTML += cardResto(restaurant);
			console.log(restaurant);
		});
	},
};

export default Home;
