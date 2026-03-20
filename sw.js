/* ================================================
   MORE HAIR BY MAKIAH — Service Worker
   sw.js  |  Handles offline caching (PWA)
   ================================================ */

var CACHE_NAME = 'makiah-hair-v1';

/* Files to pre-cache so the site works offline */
var PRECACHE_URLS = [
  '/index.html',
  '/services.html',
  '/gallery.html',
  '/booking.html',
  '/contact.html',
  '/styles.css',
  '/manifest.json',
  '/hero-picture.png',
  '/icons/icon-192.png',
  '/icons/icon-512.png'
];

/* ── Install: pre-cache core assets ── */
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(PRECACHE_URLS);
    })
  );
  self.skipWaiting();
});

/* ── Activate: remove old caches ── */
self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.filter(function (key) { return key !== CACHE_NAME; })
            .map(function (key)  { return caches.delete(key); })
      );
    })
  );
  self.clients.claim();
});

/* ── Fetch: network-first, fall back to cache ── */
self.addEventListener('fetch', function (event) {
  /* Only handle GET requests for same-origin or cached resources */
  if (event.request.method !== 'GET') { return; }

  event.respondWith(
    fetch(event.request)
      .then(function (networkResponse) {
        /* Clone the response and store it in cache */
        var responseClone = networkResponse.clone();
        caches.open(CACHE_NAME).then(function (cache) {
          cache.put(event.request, responseClone);
        });
        return networkResponse;
      })
      .catch(function () {
        /* Network failed — try the cache */
        return caches.match(event.request).then(function (cached) {
          return cached || caches.match('/index.html');
        });
      })
  );
});
