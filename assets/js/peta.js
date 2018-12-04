var lokasi = [-6.315111, 106.900760];
var detail = "<p align='center'><img src='../assets/images/peta-review/kowok-coffe.jpg' width='80%'><br><br><b>Tempat favorit : Kowok Coffee</b><br>Lat:-6.315111 Long:106.900760 <br><br> Jl. Bambu Apus Raya No.4, RT.1/RW.3, Bambu Apus, Cipayung, Jakarta, 13890</p>";
var marker = L.marker(lokasi).addTo(mymap).bindPopup(detail);


var places = [
    {
      "lokasi": [-6.315111, 106.900760],
      "detail": "<p align='center'><img src='../assets/images/peta-review/kowok-coffee.jpg' width='80%'><br><br><b>Tempat favorit : Kowok Coffee</b><br>Lat:-6.315111 Long:106.900760 <br><br> Jl. Bambu Apus Raya No.4, RT.1/RW.3, Bambu Apus, Cipayung, Jakarta, 13890</p>"
    },
    {
      "lokasi": [-6.334252, 106.896930],
      "detail": "<p align='center'><img src='../assets/images/peta-review/relatives-coffee.jpg' width='80%'><br><br><b>Tempat favorit : Relatives Coffee</b><br>Lat:-6.334252 Long: 106.896930 <br><br> Jl. Melati, RT.4/RW.1, Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13840</p>"
    }
  ];

  for (var p of places) {
    var markerlist = L.marker(p.lokasi).addTo(mymap).bindPopup(p.sponsor);
}

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

let r0 = "Kowok Coffee - Tempat yang kopinya enak dan nyaman untuk meeting dan kerja ditambah banyaknya tanaman membuat tambah relax";
let r1 = "Relatives Coffee -  Tempat yang bertema kayu dan menjadi tempat yang asik buat berkumpul remaja";

let placesreview = [
    { "lokasi": [-6.315111, 106.900760],"sponsor": "<p align='center'><b>Kowok Coffee</b><br>Lat:-6.315111 Long:106.900760 <br><br> Kecamatan Cipayung Jakarta Timur Indonesia</p>", "gambar": "../assets/images/peta-review/kowok-coffee.jpg", "review": r0 },
    { "lokasi": [-6.334252, 106.896930], "sponsor": "<p align='center'><b>Relatives Coffee</b><br>Lat:-6.334252 Long:106.896930 <br><br> Kecamatan Cipayung Jakarta Timur Indonesia</p>", "gambar": "../assets/images/peta-review/relatives-coffee.jpg", "review": r1 }
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