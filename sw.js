self.addEventListener('install', function (event){
    console.log('SW instalado');
    event.waitUntil(
    caches.open('static')
        .then(function (cache) {
            cache.addAll([
                '/',
                '/index.html',
                '/src/js/app.js',
                '/scr/css/app.css',
                '/src/css/images/BACKGROUND.png',
                '/src/css/images/LOGO.png',
                '/src//css/images/BACKGROUNDpeq.png',
                '/src/css/images/icons/icons96x96.png',
                '/src/css/images/icons/icons144x144.png',
                '/src/css/images/icons/icons256x256.png',
                '/src//css/images/icons/icons512x512.png',

            ]);
        })
    );
});
self.addEventListener('activate', function () {
    console.log('SW Activated');
});

self.addEventListener('fetch', function (event) {
    event.respondWith(caches.match(event.request)
        .then(function (res) {
            if (res) {
                return res;
            } else {
                fetch()
            }
        }));



});