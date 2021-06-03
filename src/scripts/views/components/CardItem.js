class CardItem extends HTMLElement{
	set card(card){
		this._card = card;
		this.render();
	}

	render(){
		this.innerHTML = `
			<figure tabIndex="0" class="card">
				<img class="img_card" src="${this._card.pictureId}" alt="${this._card.name}">
				<figcaption class="caption">
					<h1>${this._card.name}</h1>
					<ul class="detail__card">
					<li class="rate"><i class="bi bi-star-fill"></i> ${this._card.rating}  |  </li>
					<li class="city"><i class="bi bi-geo-alt-fill"></i> ${this._card.city}</li>
					</ul>
					<p class="desc">${this._card.description}</p>
					<a class="cta__restaurant" href="/#/detail/${this._card.id}">View Restorant</a>
				</figcaption>
			</figure>
		`
	}
}

customElements.define("card-item", CardItem);