class HeroHeader extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
		<main class="hero" id="hero">
			<h1 tabindex="0">Welcome to Food Live</h1>
			<h2 tabindex="0">Ready to Explore the Food Restaurant?</h2>
			<a href="#trending">Explore</a>
		</main>
		`;
	}
}

customElements.define('hero-header', HeroHeader);
