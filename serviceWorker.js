const site_name = "test-pwa";
const assets = ["/index.html", "/style.css", "/app.js"];

self.addEventListener("install", (installEvent) => {
    installEvent.waitUntil(
        caches.open(site_name).then((cache) => {
            cache.addAll(assets);
        })
    );
});

self.addEventListener("fetch", (fetchEvent) => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then((res) => {
            return res || fetch(fetchEvent.request);
        })
    );
});

// let i = 10;

// if (i < 12 && i > 0) return true; et logique dans la condition
// if (i == 10 || i == 20) return true; ou logique dans la condition
