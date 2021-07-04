import FavoriteRestoIdb from '../data/database-resto';
import { createLikeButtonTemplate, createLikedButtonTemplate, /*toasts*/ } from '../views/templates/template-creator';

const LikeButtonInitiator = {
	async init({ likeButtonContainer, resto }) {
		this._likeButtonContainer = likeButtonContainer;
		this._resto = resto;

		await this._renderButton();
	},
	async _renderButton() {
		const { id } = this._resto;

		if (await this._isRestoExist(id)) {
			this._renderLiked();
		} else {
			this._renderLike();
		}
	},
	async _isRestoExist(id) {
		const resto = await FavoriteRestoIdb.getResto(id);
		return !!resto;
	},

	_renderLike() {
		this._likeButtonContainer.innerHTML = createLikeButtonTemplate();
		const likeButton = document.querySelector('#likeButton');
		likeButton.addEventListener('click', async () => {
			await FavoriteRestoIdb.putResto(this._resto);
			this._renderButton();

			// document.querySelector('#content').innerHTML += toasts("ch toast__display","check bi-check-circle-fill", "Sip, restoran sudah ditambahkan")
			// setTimeout(function(){
			// 	document.querySelector('.toast__display').classList.remove('toast__display')
			// }, 2000)
		});
	},

	_renderLiked() {
		this._likeButtonContainer.innerHTML = createLikedButtonTemplate();
		const likeButton = document.querySelector('#likeButton');
		likeButton.addEventListener('click', async () => {
			await FavoriteRestoIdb.deleteResto(this._resto.id);
			this._renderButton();

			// document.querySelector('#content').innerHTML += toasts("err toast__display","error bi-x-circle-fill", "Sip, restoran sudah dihapus")
			// setTimeout(function(){
			// 	document.querySelector('.toast__display').classList.remove('toast__display')
			// }, 2000)
		});
	},

};

export default LikeButtonInitiator;
