import 'regenerator-runtime';
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import CONFIG from './globals/config';

precacheAndRoute([
	{ url: './bundle.js', revision: null },
	{ url: './0.bundle.js', revision: null },
	// { url: './1.bundle.js', revision: null },
	{ url: './index.html', revision: '2' },
	{ url: './main.css', revision: '2' },
	{ url: './manifest.json', revision: null },
]);

registerRoute(
	/\.(?:png|gif|jpg|jpeg|svg)$/,
	new CacheFirst({
		cacheName: 'assets',
		plugins: [
			new ExpirationPlugin({
				maxEntries: 60,
				maxAgeSeconds: 30 * 24 * 60 * 2, // dua hari ajalah
			}),
		],
	}),
);

registerRoute(
	/\.js$/,
	new CacheFirst({
		cacheName: 'scripts',
		plugins: [
			new ExpirationPlugin({
				maxEntries: 60,
				maxAgeSeconds: 30 * 24 * 60 * 1,
			}),
		],
	}),
);

registerRoute(
	/\.css$/,
	new CacheFirst({
		cacheName: 'styles',
		plugins: [
			new ExpirationPlugin({
				maxEntries: 60,
				maxAgeSeconds: 30 * 24 * 60 * 1,
			}),
		],
	}),
);

registerRoute(
	new RegExp(CONFIG.BASE_URL),
	new StaleWhileRevalidate({
		cacheName: 'restaurant-api',
	}),
);

registerRoute(
	/^https:\/\/fonts\.googleapis\.com/,
	new StaleWhileRevalidate({
		cacheName: 'google-fonts-stylesheets',
	}),
);

registerRoute(
	/^https:\/\/cdn\.jsdelivr\.net/,
	new StaleWhileRevalidate({
		cacheName: 'cdn-jsdelivr',
	}),
);

registerRoute(
	/^https:\/\/fonts\.gstatic\.com/,
	new CacheFirst({
		cacheName: 'google-fonts-webfonts',
		plugins: [
			new CacheableResponsePlugin({
				statuses: [0, 200],
			}),
			new ExpirationPlugin({
				maxEntries: 30,
				maxAgeSeconds: 60 * 60 * 24 * 365,
			}),
		],

	}),
);
