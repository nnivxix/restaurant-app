Feature('Liking Resto');

Scenario('liking a resto', async ({ I }) => {
 
	I.amOnPage('/');
	I.seeElement('.cta__restaurant');
 
	const firstResto = locate('.cta__restaurant').first();
	const firstRestoTitle = await I.grabTextFrom(firstResto);
	I.click(firstResto);
 
	I.seeElement('#likeButton');
	I.click('#likeButton');

	I.amOnPage('/#/fav');
	pause();

	I.seeElement('.catalogs');
	const likedRestoTitle = await I.grabTextFrom('.cta__restaurant');
	I.click(likedRestoTitle);
	I.seeElement('#likeButton');
	I.click('#likeButton');

	I.amOnPage('/#/fav');
	pause();
});
