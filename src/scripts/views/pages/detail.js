import UrlParser from '../../routes/url-parser';
import restaurantSource from '../../data/restaurant-source';
import { detailRestaurant } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <h2 class="detail__title">Detail Restaurant</h2>
      <div class="detail__restaurant">

      </div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await restaurantSource.detailRestaurant(url.id);
    const detail = document.querySelector('.detail__restaurant');
    detail.innerHTML = detailRestaurant(restaurant);
    console.log(restaurant);
  },
};

export default Detail;
