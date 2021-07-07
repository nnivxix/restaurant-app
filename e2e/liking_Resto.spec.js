Feature('Liking Resto');

Scenario('liking a resto', async ({ I }) => {
 
	I.amOnPage('/');
	I.seeElement('#hero a');
	I.click(locate('#hero a'));

	I.seeElement('.cta__restaurant');
	I.click(locate('.cta__restaurant').first());

	I.seeElement('#likeButton');
	I.click('#likeButton');

	I.amOnPage('/#/fav');
	I.seeElement('.catalogs');
	const likedRestoTitle = await I.grabTextFrom('.cta__restaurant');
	I.click(likedRestoTitle);

	I.seeElement('#likeButton');
	I.click('#likeButton');

	I.amOnPage('/#/fav');

});
