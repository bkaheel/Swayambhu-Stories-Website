const cacheName = "DefaultCompany-Swayambhu Stories-0.1.0";
const contentToCache = [
<<<<<<< HEAD
    "Build/Unity.loader.js",
    "Build/Unity.framework.js",
    "Build/Unity.data",
    "Build/Unity.wasm",
=======
    "Build/swayambhu_test.loader.js",
    "Build/swayambhu_test.framework.js",
    "Build/swayambhu_test.data",
    "Build/swayambhu_test.wasm",
>>>>>>> 24c4d5d30e4ff52dfab3766ecae8bf8c90ebaf7c
    "TemplateData/style.css"

];

self.addEventListener('install', function (e) {
    console.log('[Service Worker] Install');
    
    e.waitUntil((async function () {
      const cache = await caches.open(cacheName);
      console.log('[Service Worker] Caching all: app shell and content');
      await cache.addAll(contentToCache);
    })());
});

self.addEventListener('fetch', function (e) {
    e.respondWith((async function () {
      let response = await caches.match(e.request);
      console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
      if (response) { return response; }

      response = await fetch(e.request);
      const cache = await caches.open(cacheName);
      console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
      cache.put(e.request, response.clone());
      return response;
    })());
});
