//ACCESS KEY
mapboxgl.accessToken = 'pk.eyJ1IjoiaHViYmFyZGIiLCJhIjoiY2thN25jazJqMDVzcjJ4cG1oazRkcm0zNCJ9.ouHoCgXUTHpqo7y2N8zV0A';

//CODING ACADEMY LOCATION
var end = [-88.79073,33.47180];

//CREATE MAP CENTERED ON CODING ACADEMY  
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: end,
    zoom: 15
}); 