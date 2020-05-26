//SET UP LAT AND LON FOR LATER
var lat, lon;

function success(pos) {
  var crd = pos.coords;

  lat = crd.latitude;
  lon = crd.longitude;
} 

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

navigator.geolcation.getCurrentPosition(success, error, options);

map.on('load', function() {
  directions.setOrigin([lon, lat]);
  directions.setDestination(end);
});