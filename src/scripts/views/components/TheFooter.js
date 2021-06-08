class TheFooter extends HTMLElement{
	connectedCallback(){
		this.year = this.getAttribute("year") || new Date().getFullYear() ;
		this.render();
	}


	render(){
		this.innerHTML = `
		<footer tabindex="0">
			<p>Food Live © ${this.year}</p>
		</footer>
		`
	}
}

customElements.define("the-footer", TheFooter);
export default TheFooter;