import 'regenerator-runtime';
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';

/*
	import CacheHelper from './utils/cache-helper';

	const { assets } = global.serviceWorkerOption;

	self.addEventListener('install', (event) => {
		event.waitUntil(CacheHelper.cachingAppShell([...assets, './']));
	});

	self.addEventListener('activate', (event) => {
		event.waitUntil(CacheHelper.deleteOldCache());
	});

	self.addEventListener('fetch', (event) => {
		event.respondWith(CacheHelper.revalidateCache(event.request));
	});
*/

precacheAndRoute([
	{ url: './bundle.js', revision: null },
	{ url: './0.bundle.js', revision: null },
	{ url: './1.bundle.js', revision: null },
	{ url: './index.html', revision: '2' },
]);

registerRoute(
	/\.(?:png|gif|jpg|jpeg|svg)$/,
	new CacheFirst({
		cacheName: 'assets',
		plugins: [
			new ExpirationPlugin({
				maxEntries: 60,
				maxAgeSeconds: 30 * 24 * 60 * 60,
			}),
		],
	}),
);
