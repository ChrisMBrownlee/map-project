//CREATE MAPBOXDIRECTIONS 
var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
    reverseGeocode: true
});

//ADD CONTROL FOR MAPBOXDIRECTIONS
map.addControl(directions, 'top-left');