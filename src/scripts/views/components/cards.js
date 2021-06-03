import data from '../../DATA.json';

const { restaurants } = data;

function cards() {
  return restaurants.map((restaurant) => `
		<figure tabIndex="0" class="card">
			<img class="img_card" src="${restaurant.pictureId}" alt="${restaurant.name}">
			<figcaption class="caption">
				<h1>${restaurant.name}</h1>
				<ul></ul>
				<p class="rate">Rating <span class="star">&#9733;</span> ${restaurant.rating}</p>
				<p class="city">Lokasi ${restaurant.city}</p>
				<p class="desc">${restaurant.description.substring(0, 100)} ...</p> 
			</figcaption>
		</figure>
		`).join(''); // removing comma in array https://stackoverflow.com/questions/63808858/removing-the-comma-from-the-end-of-a-template-string
}
export default cards;
// elipsis the text using css https://css-tricks.com/snippets/css/truncate-string-with-ellipsis/