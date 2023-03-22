var myCacheName = "myPWACache";

const addResourcesToCache = async (resources) => {
    console.log("Add to cache...");
    const cache = await caches.open("myCacheName");
    await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
    console.log("Installing...");
    event.waitUntil(
        addResourcesToCache([
            "/",
            "/index.html",
            "/CSS/style.css",
            "/JS/app.js",
            "/MEDIA/ICONS/icon-32.png",
            "/MEDIA/ICONS/icon-512.png",
        ])
    );
});