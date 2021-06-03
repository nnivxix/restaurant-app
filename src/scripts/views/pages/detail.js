import UrlParser from '../../routes/url-parser';
import restaurantSource from "../../data/restaurant-source";

const Detail = {
  async render() {
    return `
      <h2>Detail Restaurant</h2>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await restaurantSource.detailRestaurant(url.id);
    console.log(restaurant)
  },
};

export default Detail;
