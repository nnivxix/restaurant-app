import "../components/HeroHeader.js"
import restaurantSource from "../../data/restaurant-source";

const Home = {
  async render() {
    return `
    <hero-header> </hero-header>
     
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurant = await restaurantSource.getRestaurant();
    console.log(restaurant)
  },
};

export default Home;
