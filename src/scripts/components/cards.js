import data from '../../DATA.json';

const restaurants = data.restaurants
//console.log(restaurants)
function cards() {
	return restaurants.map( restaurant => {
		 return`
		<figure class="card">
			<img src="${restaurant.pictureId}" alt="${restaurant.name}">
			<figcaption class="caption">
				<h1>${restaurant.name}</h1>
				<p>Rating <span class="star">&#9733;</span> ${restaurant.rating}</p>
				<p>Lokasi ${restaurant.city}</p>
			</figcaption>
		</figure>
		`
	}).join("")
}
export default cards