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
		<img tabindex="0" class="lazyload" src="${CONFIG.BASE_IMAGE_URL_MD + restaurant.pictureId}" alt="${restaurant.name}" class="img__restaurant">
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
		<section class="add__review">
			<h1>Tambah review dulu boleh? </h1>
			<input type="text" placeholder="Hanasa" class="name__reviewer">
			<textarea type="text" placeholder="Makanannya Enak!" class="input__review"></textarea>
			<input type="button" value="add review" class="submit__review">
		</section>
		<article tabindex="0" class="reviews">
			<h3 tabindex="0">Review Pelanggan</h3>
			<ul tabindex="0" class="list ">
					${reviewPelanggan(restaurant)}
			</ul>
		</article>
`;
const cardResto = (restaurant) => `
	<figure tabIndex="0" class="card">
		<picture>
			<source class="lazyload" media="(max-width: 600px)" srcset="${CONFIG.BASE_IMAGE_URL_MD + restaurant.pictureId}">
			<img class="img_card lazyload" src="${CONFIG.BASE_IMAGE_URL_LG + restaurant.pictureId}" alt="${restaurant.name}">
		</picture>

		<figcaption class="caption">
		<h1> <a class="cta__restaurant" href="/#/detail/${restaurant.id}">${restaurant.name}</a></h1>
		<ul class="detail__card">
		<li class="rate"><i class="star bi bi-star-fill"></i> ${restaurant.rating}  </li>
		<li class="city"><i class="geo bi bi-geo-alt-fill"></i> ${restaurant.city}</li>
		</ul>
		<p class="desc">${restaurant.description.substring(0, 96)}...</p>
		</figcaption>
	</figure>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="bi bi-bookmark-heart-fill"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="bi bi-trash-fill"></i>
  </button>
`;
const emptyData = () => `
	<div tabIndex="0" class="container-img not__found">
		<p tabIndex="0" >Opp's, Looks like you haven't saved your favorite restaurant data.</p>
			<img src="./images/empty-large.jpg" alt="empty image">
		<p tabIndex="0" style="text-align:center;">please, back to <a href="/#" >home</a>.</p>
	</div>
`;

const notFoundData = () => `
	<div tabIndex="0" class="container-img not__found">
		<p tabIndex="0" >Opp's, The Datas can't load, please <a href="https://twitter.com/nnivxix" target="_blank" rel="noreferrer">contact us </a>.</p>
    <picture>
      <source media="(max-width: 600px)" srcset="./images/notfound-small.jpg" type="image/jpeg">
			<img src="./images/notfound-large.jpg" alt="notfound image">
    </picture>


	</div>
`;

const createToast = (ctn, icon, msg) => `<div class="toast__container  ${ctn}">
			<i class="${icon} bi "></i>
			<p class="message">${msg}</p>
		</div>
	`;

const loader = {
	show() {
		return `
			<div class="box">
				<div class="loader"></div>
			</div>
		`;
	},
	hide() {
		document.querySelector('.box').remove();
	},
};
export {
	detailRestaurant, cardResto, createLikeButtonTemplate,
	createLikedButtonTemplate, emptyData, notFoundData, createToast, loader,
};
