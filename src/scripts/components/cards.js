import data from '../../DATA.json';

const restaurants = data.restaurants
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
	}).join("") // removing comma in array https://stackoverflow.com/questions/63808858/removing-the-comma-from-the-end-of-a-template-string
}
export default cards