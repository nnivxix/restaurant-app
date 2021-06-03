import "CardItem.js";

class CardList extends HTMLElement{
	set card(cards){
		this._cards = cards;
		this.render()
	}

	render(){
		this._cards.forEach(card => {
			const cardItemElement = document.createElement("card-item");
			cardItemElement.card = card;
			this.appendChild(cardItemElement);
		})
	}
}

customElements.define("card-list", CardList);