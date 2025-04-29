const cacheName = 'pet-app-cache-v1';
const assets = [
  '/',
  '/index.html',
  '/pet.html',
  '/script.js',
  '/pet.js',
  '/style.css',
  '/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
