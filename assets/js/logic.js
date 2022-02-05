const showLatlng = document.getElementById('latlng')
const myMap = L.map('jobMap').setView([23.754925, 90.376495], 15);
const accessToken = 'pk.eyJ1IjoicmFzaGVkMzYwIiwiYSI6ImNrdGx1ZWQ3ODAycnQycG41NHZ1Mm83ODUifQ.CeYLxxvKsjSnrlYpLiXb_Q'

// Setup Map
L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${accessToken}`, {
    attribution: 'Map Data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: accessToken
}).addTo(myMap);

// Marker
// var marker = L.marker([23.754925, 90.376495]).addTo(myMap);
var userIcon = L.icon({
    iconUrl: 'assets/map/icon/user.png',
    iconSize: [15, 19],
    iconAnchor: [7, 9],
    popupAnchor: [7, -5],
    shadowUrl: 'assets/map/icon/back.png',
    shadowSize: [38, 37],
    shadowAnchor: [18, 14]
});
var user = L.marker([23.754925, 90.376495], {icon: userIcon}).addTo(myMap);
user.bindPopup("<b>Your Location</b><br>Daffodil International University");

var jobIcon = L.icon({
    iconUrl: 'assets/map/icon/cart.png',
    iconSize: [15, 19],
    iconAnchor: [7, 9],
    popupAnchor: [7, -5],
    shadowUrl: 'assets/map/icon/back.png',
    shadowSize: [38, 37],
    shadowAnchor: [18, 14]
});
var job1 = L.marker([23.755395, 90.382118], {icon: jobIcon}).addTo(myMap);
job1.bindPopup("<b>Project based</b><br>Web Developer");

var job2 = L.marker([23.756652, 90.372205], {icon: jobIcon}).addTo(myMap);
job2.bindPopup("<b>Hourly Job</b><br>Restruant Waiter");


// Circle
var circle = L.circle([23.754925, 90.376495], {
    color: '#000000',
    fillColor: '#74CFE4',
    fillOpacity: 0.3,
    radius: 800,
    weight: 2,
    dashArray: 8
}).addTo(myMap);

// Bind popup
// marker.bindPopup("<b>Your Location</b><br>Daffodil International University");
// marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
// circle.bindPopup("800m Radius");

// Map click function
function onMapClick(e) {
    showLatlng.textContent = e.latlng.toString();
}

myMap.on('click', onMapClick);