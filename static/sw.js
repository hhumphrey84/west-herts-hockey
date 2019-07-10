importScripts("/_nuxt/workbox.4c4f5ca6.js");

workbox.precaching.precacheAndRoute(
    [
        {
            url: "/_nuxt/0d3770bae32970ad6934.js",
            revision: "83bac57f046fc33ae546b19c710d5cc8"
        },
        {
            url: "/_nuxt/18807efb12aada0ab34f.js",
            revision: "4027d9d69a0305914a15dd6391d1a59c"
        },
        {
            url: "/_nuxt/3e66a98f0421c0167477.js",
            revision: "da710719f74ff5f4d7b73ec1fc82043c"
        },
        {
            url: "/_nuxt/464d25bf588bfbac2841.css",
            revision: "49a73f71935b878ccb7f81c876cee4fb"
        },
        {
            url: "/_nuxt/6fa1026982a3d5d35dab.css",
            revision: "4d61ce0f807eb249d9600559a368085b"
        },
        {
            url: "/_nuxt/82bca42ae6ee8c428782.js",
            revision: "c7fb5ace94805441ba4e07361582e40d"
        },
        {
            url: "/_nuxt/8fca9af8096d1a9031df.js",
            revision: "ca7e15efeac469e4acd5e97a4d45fbea"
        },
        {
            url: "/_nuxt/9c1d434a2678603a4f6f.js",
            revision: "9e1655120481b75f93c5e137ce375098"
        },
        {
            url: "/_nuxt/aab61bd5a81363c77283.js",
            revision: "8291e599bc7df3cf37704e637b1a9760"
        },
        {
            url: "/_nuxt/ba6d249f2547e84fc5d1.js",
            revision: "f503570c2d23e27032b432444d1e0508"
        },
        {
            url: "/_nuxt/e0dca7bd9a503e0f43b4.css",
            revision: "191959581356062d4ec655049c4b82a3"
        },
        {
            url: "/_nuxt/f8e5a9ea397a826b43da.js",
            revision: "4088225a46e32aba10ff84aa2be1764c"
        },
        {
            url: "/_nuxt/fc6cde20c5726c9b67dc.css",
            revision: "570a46bcac73e9592d39654829f3ca8a"
        }
    ],
    {
        cacheId: "bael-cms-template",
        directoryIndex: "/",
        cleanUrls: false
    }
);

workbox.clientsClaim();
workbox.skipWaiting();

workbox.routing.registerRoute(
    new RegExp("/_nuxt/.*"),
    workbox.strategies.cacheFirst({}),
    "GET"
);

workbox.routing.registerRoute(
    new RegExp("/.*"),
    workbox.strategies.networkFirst({}),
    "GET"
);

workbox.routing.registerRoute(
    new RegExp("/images/uploads/.*"),
    workbox.strategies.cacheFirst({
        cacheName: "image-cache",
        cacheExpiration: { maxEntries: 100, maxAgeSeconds: 86400 }
    }),
    "GET"
);
