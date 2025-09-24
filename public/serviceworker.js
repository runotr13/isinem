const CACHE_NAME = "isinam-cache-v1";
const urlsToPrecache = [
  "/", // ana sayfa
  "/favicon.ico", // favicon
  "/manifest.json", // manifest
  "/offline.html", // offline fallback
  "/logo.svg",
  "/favicon-96x96.png",
  "/web-app-manifest-192x192.png",
  "/web-app-manifest-512x512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToPrecache))
  );
});

self.addEventListener("fetch", (event) => {
  // Sadece GET isteklerini yakala
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;

      return fetch(event.request)
        .then((networkResponse) => {
          return caches.open(CACHE_NAME).then((cache) => {
            // Aynı-origin ise cache’e ekle
            if (event.request.url.startsWith(self.origin)) {
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          });
        })
        .catch(() => caches.match("/offline.html")); // offline fallback
    })
  );
});

self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (!cacheWhitelist.includes(key)) return caches.delete(key);
        })
      )
    )
  );
});
