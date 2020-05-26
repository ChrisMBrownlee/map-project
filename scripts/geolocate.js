//CREATE GEOLOCATE VARIABLE - USER LOCATION BUTTON
var geolocate = new mapboxgl.GeolocateControl({
  positionOptions: {
    enableHighAccuracy: true
  },
  trackUserLocation: true
});

//ADD GEOLOCATE CONTROL
map.addControl(geolocate);