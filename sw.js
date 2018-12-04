const NAMACACHE = 'mws-toby';
const filesToCache = [
    '.',
    'assets/css/main.css',
    'assets/css/style.css',
    'assets/css/style0.css',
    'assets/css/leaflet.css',
    'assets/images/gdk.png',
    'assets/images/profile.jpg',
    'assets/images/icons/icon-72x72.png',
    'assets/images/nav/calc.png',
    'assets/images/nav/grid.png',
    'assets/images/nav/home.png',
    'assets/images/nav/peta.png',
    'assets/images/nav/peta-wisata.png',
    'assets/images/social-round/facebook-brands.svg',
    'assets/images/social-round/instagram-brands.svg',
    'assets/images/social-round/linkedin-brands.svg',
    'assets/images/peta-review/Gelora-Bung-Karno.jpg',
    'assets/images/peta-review/Kebun-Binatang-Ragunan.jpg',
    'assets/images/peta-review/Monas.jpg',
    'assets/images/peta-review/Museum-Nasional.jpg',
    'assets/images/peta-review/TMII.jpg',
    'assets/images/peta-review/kowok-coffee.jpg',
    'assets/images/peta-review/relatives-coffee.jpg',
    'assets/js/calculator.js',
    'assets/js/menu.js',
    'assets/js/peta-fetch.js',
    'assets/js/peta.js',
    'assets/js/leaflet.js',
    'components/menu.html',
    'data/main.json',
    'data/peta-fetch.json',
    'project1/css-grid.html',
    'project2/calculator.html',
    'project3/mapbox.html',
    'project4/maps-fetch.html',
    'index.html',
    'manifest.json'
];


self.addEventListener('install', event => {
    console.log('Persiapan Cache');
    event.waitUntil(
      caches.open(NAMACACHE)
      .then(cache => {
        return cache.addAll(filesToCache);
      })
    );
  });
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request)
      .then(ada_response => {
        if (ada_response) {
          return ada_response;
        }
        else {
          return fetch(event.request)
        }
      })
      .catch(error => {
        return new Response("Waduh Gagal " + error);
      })
    );
  });