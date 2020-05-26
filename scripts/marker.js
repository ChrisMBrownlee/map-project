//ON LOAD FUNCTION GATHERS INFO
map.on('load', function() {
    directions.setDestination(end),
    map.loadImage(
      'https://pluralsight.imgix.net/paths/path-icons/csharp-e7b8fcd4ce.png',
      function(error, image) {
        if (error) throw error;
        map.addImage('CA', image);
        map.addSource('places', {
          'type': 'geojson',
          'data': {
            'type': 'FeatureCollection',
            'features': [
              {
                'type': 'Feature',
                'properties': {
                  'description':
                  '<strong>Mississippi Coding Academy</strong><p> The ' +
                  '<a href="https://mscoding.org/gtr2018/" target="_blank" ' +
                  'title="Opens in a new window">MS Coding Academy</a> ' +
                  'is where you can start becoming the best coder you can be!</p>',
                  'icon': 'CA'
                },
                  'geometry': {
                  'type': 'Point',
                  'coordinates': end
                }
              }
            ]
          }
        })
        //ADD A LAYER SHOWING THE CA
        map.addLayer({
          'id': 'places',
          'type': 'symbol',
          'source': 'places',
            'layout': {
            'icon-image': '{icon}',
            'icon-size': 0.15,
            'icon-allow-overlap': true    
          }
        });
      });
  
  //WHEN CLICK EVENT HAPPENS ON A FEATURE, OPEN A POPUP AT SAID LOCATION
  map.on('click', 'places', function(e) {
    var coordinates = e.features[0].geometry.coordinates.slice();
    var description = e.features[0].properties.description;
    
    //ENSURE THAT IF THE MAP IS ZOOMED OUT SHOW MULTIPLE COPIES OF THE FEATURE
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }
    
    new mapboxgl.Popup()
      .setLngLat(coordinates)
      .setHTML(description)
      .addTo(map);
  });
    
  //CHANGE THE CURSOR TO A POINTER WHEN THE MOUSE HOVERS A PLACE
  map.on('mouseenter', 'places', function() {
    map.getCanvas().style.cursor = 'pointer';
  });
    
  //CHANGE IT BACK TO A POINTER WHEN IT LEAVES
  map.on('mouseleave', 'places', function() {
    map.getCanvas().style.cursor = '';
  });
});