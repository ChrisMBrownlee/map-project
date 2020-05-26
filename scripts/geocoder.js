//CREATE GEOCODER VARIABLE - SEARCH AND PLACE NEW PIN (DOESN'T REMOVE C.A. PIN)
var geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
});

//ADD GEOCODER CONTROL
map.addControl(geocoder);