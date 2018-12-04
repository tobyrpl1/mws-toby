function findLocation(x, y) {
    for (var i = 0; i < places.length; i++) {
        if (places[i].lokasi[0] == x &&
            places[i].lokasi[1] == y) {
            return i;
        }
    }
    return -1;
}


function showLocation(e) {
    let ix = findLocation(e.latlng.lat, e.latlng.lng);
    console.log(ix);
    if (ix >= 0) {
        img.src = places[ix].gambar;
        par.textContent = places[ix].review;
    }
}
let gmb = document.getElementById("gmb");
let rev = document.getElementById("review");
let img = document.createElement('img');
let par = document.createElement('p');
gmb.appendChild(img);
rev.appendChild(par);

const URL ="../../data/peta-fetch.json";
(async ()=>{
    try {
        const resp = await (fetch(URL));
        const resp2 = await resp.json();
        localStorage.setItem('places', JSON.stringify(resp2.places));
        
        places =resp2.places;
        for (var p of resp2.places) {
            var marker = L.marker(p.lokasi).addTo(mymap).bindPopup(p.sponsor);
            marker.on('click', showLocation);
        }
    } catch (err) {
        console.log(err);
    }
})();