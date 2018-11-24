let lokasi = [-6.315111, 106.900760];
let detail = "<p align='center'><img src='../images/kowok-coffe.jpg' width='80%'><br><br><b>Tempat favorit : Kowok Coffee</b><br>Lat:-6.315111 Long:106.900760 <br><br> Jl. Bambu Apus Raya No.4, RT.1/RW.3, Bambu Apus, Cipayung, Jakarta, 13890</p>";
let marker = L.marker(lokasi).addTo(mymap).bindPopup(detail);


let places = [
    {
      "lokasi": [-6.315111, 106.900760],
      "detail": "<p align='center'><img src='../images/kowok-coffee.jpg' width='80%'><br><br><b>Tempat favorit : Kowok Coffee</b><br>Lat:-6.315111 Long:106.900760 <br><br> Jl. Bambu Apus Raya No.4, RT.1/RW.3, Bambu Apus, Cipayung, Jakarta, 13890</p>"
    },
    {
      "lokasi": [-6.334252, 106.896930],
      "detail": "<p align='center'><img src='../images/relatives-coffee.jpg' width='80%'><br><br><b>Tempat favorit : Relatives Coffee</b><br>Lat:-6.334252 Long: 106.896930 <br><br> Jl. Melati, RT.4/RW.1, Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13840</p>"
    },
    {
      "lokasi": [-6.331118, 106.900038],
      "detail": "<p align='center'><img src='../images/mie-ayam-bakso-jangkung.jpg' width='80%'><br><br><b>Tempat favorit : Mie Ayam Bakso Jangkung</b><br>Lat:-6.331118 Long:106.900038 <br><br> Jl. Raya Mabes TNI No.3, RT.6/RW.4, Cilangkap, Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13840</p>"
    },
    {
      "lokasi": [-6.327435, 106.902027],
    "detail": "<p align='center'><img src='../images/bakso-linuwih.jpg' width='80%'><br><br><b>Tempat favorit : Bakso Linuwih</b><br>Lat:-6.327435 Long:106.902027 <br><br> Jl. Setu Cipayung No.1, RT.2/RW.4, Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13840</p>"
    },
    {
      "lokasi": [-6.337775, 106.898331],
      "detail": "<p align='center'><img src='../images/masakan-padang-bagindo.JPG' width='80%'><br><br><b>Tempat favorit : Masakan Padang Bagindo</b><br>Lat:-6.337775 Long:106.898331 <br><br> Jl. Raya Cilangkap, RT.1/RW.5, Cilangkap, Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13870</p>"
    }
  ];

  for (var p of places) {
    var markerlist = L.marker(p.lokasi).addTo(mymap).bindPopup(p.sponsor);
}


// ============ TUGAS 3 =============
function findLocation(x, y) {
    console.log(x, y);
    for (var i = 0; i < places.length; i++) {
        if (places[i].lokasi[0] == x && places[i].lokasi[1] == y) {
            return i;
        }
    }
    return -1;
}

function showLocation(e) {
    // console.log("you clicked " + e.latlng.lat + " dan "+ e.latlng.lng);
    let ix = findLocation(e.latlng.lat, e.latlng.lng);
    console.log(ix);
    if (ix >= 0) {
        img.src = placesreview[ix].gambar;
        par.textContent = placesreview[ix].review;
    }
}

let r0 = "Kowok Coffee - Kecamatan Cipayung Jakarta Timur Indonesia";
let r1 = "Relatives Coffee - Kecamatan Cipayung Jakarta Timur Indonesia";
let r2 = "Mie Ayam Bakso Jangkung - Kecamatan Cipayung Jakarta Timur Indonesia";
let r3 = "Bakso Linuwih - Kecamatan Cipayung Jakarta Timur Indonesia";
let r4 = "Masakan Padang Bagindo - Kecamatan Cipayung Jakarta Timur Indonesia";

let placesreview = [
    { "lokasi": [-6.315111, 106.900760],"sponsor": "<p align='center'><b>Kowok Coffee</b><br>Lat:-6.315111 Long:106.900760 <br><br> Kecamatan Cipayung Jakarta Timur Indonesia</p>", "gambar": "../images/kowok-coffee.jpg", "review": r0 },
    { "lokasi": [-6.334252, 106.896930], "sponsor": "<p align='center'><b>Relatives Coffee</b><br>Lat:-6.334252 Long:106.896930 <br><br> Kecamatan Cipayung Jakarta Timur Indonesia</p>", "gambar": "../images/relatives-coffee.jpg", "review": r1 },
    { "lokasi": [-6.331118, 106.900038], "sponsor": "<p align='center'><b>Mie Ayam Bakso Jangkung</b><br>Lat:--6.331118 Long:106.900038 <br><br> Kecamatan Cipayung Jakarta Timur Indonesia</p>", "gambar": "../images/mie-ayam-bakso-jangkung.jpg", "review": r2 },
    { "lokasi": [-6.327435, 106.902027], "sponsor": "<p align='center'><b>Bakso Linuwih</b><br>Lat:-6.327435 Long:106.902027 <br><br> Kecamatan Cipayung Jakarta Timur Indonesia</p>", "gambar": "../images/bakso-linuwih.jpg", "review": r3 },
    { "lokasi": [-6.337775, 106.898331], "sponsor": "<p align='center'><b>Masakan Padang Bagindo</b><br>Lat:-6.337775Long:106.898331 <br><br> Kecamatan Cipayung Jakarta Timur Indonesia</p>", "gambar": "../images/masakan-padang-bagindo.JPG", "review": r4 }
];

for (var p of placesreview) {
    var markerreview = L.marker(p.lokasi).addTo(mymap).bindPopup(p.sponsor);
    markerreview.on('click', showLocation);
}
// Persiapkan tempat untuk gambar dan review
let gmb = document.getElementById("gmb");
let rev = document.getElementById("review");
let img = document.createElement('img');
let par = document.createElement('p');
gmb.appendChild(img);
rev.appendChild(par);






/*var mymap = L.map('mapid').setView([-6.315111, 106.900760], 13);

// Lokasi
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoidG9ieS1td3M0MDQiLCJhIjoiY2pvYmpxZW1rMHZrMTNwbGNxaDhkMmx1OCJ9.x2fXjO9E23bQw1G9Ueh7CA'
}).addTo(mymap);
var marker1 = L.marker([-6.315111, 106.900760]).addTo(mymap);
var circle1 = L.circle([-6.315111, 106.900760], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 30
}).addTo(mymap);
marker1.bindPopup("<p align='center'><img src='../images/kowok-coffe.jpg' width='80%'><br><br><b>Tempat favorit : Kowok Coffe</b><br>Lat:-6.315111 Long:106.900760 <br><br> Jl. Bambu Apus Raya No.4, RT.1/RW.3, Bambu Apus, Cipayung, Jakarta, 13890</p>").openPopup();

function onMapClick(e) {
    console.log("Peta diklik pada posisi " + e.latlng);
}
mymap.on('click', onMapClick);

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Lokasi yang dipilih: " + e.latlng.toString())
        .openOn(mymap);
}
mymap.on('click', onMapClick);*/