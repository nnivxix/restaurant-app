import CONFIG from '../../globals/config';

function lengthReview(rev) {
  if (rev.review.length > 20) {
    return `${rev.review.substring(0, 50)}...`;
  }
  return rev.review;
}
function reviewPelanggan(restaurant) {
  return restaurant.customerReviews.map((rev) => `
		<li class="review">
			<p class="name__review">${rev.name}</p>
			<p class="description__review">${lengthReview(rev)}</p>
			<p class="date__review">${rev.date}</p>
		</li>
		  `).join('');
}

function categoryRestaurant(restaurant) {
  return restaurant.categories.map((category) => `
			<li>${category.name}</li>
		`).join('');
}

function foodRestaurant(restaurant) {
  return restaurant.menus.foods.map((food) => `
		<li>${food.name}</li>
	`).join('');
}

function drinkRestaurant(restaurant) {
  return restaurant.menus.drinks.map((drink) => `
		<li>${drink.name}</li>
	`).join('');
}

const detailRestaurant = (restaurant) => `
		<img tabindex="0" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" class="img__restaurant">
		<h1 tabindex="0" class="name__restaurant">${restaurant.name}</h1>
		<h2 tabindex="0" class="location__restaurant"><i class="geo bi bi-geo-alt-fill"></i> ${restaurant.city}, ${restaurant.address}</h2>
		<h2 tabindex="0" class="rate__restaurant"><i class="star bi bi-star-fill"></i> ${restaurant.rating}</h2>
		<p class="description__restaurant">${restaurant.description} </p>
		<article tabindex="0" class="categories__restaurant">
			<h3 tabindex="0">Categories</h3>
			<ul tabindex="0" class="list categories">
			${categoryRestaurant(restaurant)}
			</ul>
		</article>
		<article tabindex="0" class="menu__items">
			<h3 tabindex="0">Menu Makanan</h3>
			<ul tabindex="0" class="list food">
				${foodRestaurant(restaurant)}
			</ul>
		</article>
		<article tabindex="0" class="menu__items">
			<h3 tabindex="0">Menu Minuman</h3>
			<ul tabindex="0" class="list drink">
				${drinkRestaurant(restaurant)}
			</ul>
		</article>
		<article tabindex="0" class="reviews">
			<h3 tabindex="0">Review Pelanggan</h3>
			<ul tabindex="0" class="list ">

					${reviewPelanggan(restaurant)}

			</ul>
		</article>
`;
const cardResto = (restaurant) => `
	<figure tabIndex="0" class="card">
	<img class="img_card" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
	<figcaption class="caption">
	<h1> <a class="cta__restaurant" href="/#/detail/${restaurant.id}">${restaurant.name}</a></h1>
	<h1></h1>
	<ul class="detail__card">
	<li class="rate"><i class="star bi bi-star-fill"></i> ${restaurant.rating}  |  </li>
	<li class="city"><i class="geo bi bi-geo-alt-fill"></i> ${restaurant.city}</li>
	</ul>
	<p class="desc">${restaurant.description.substring(0, 100)}...</p>
	</figcaption>
	</figure>
`;

export { detailRestaurant, cardResto };
