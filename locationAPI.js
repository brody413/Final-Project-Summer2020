// gets button then adds event listenr to it
let button = document.getElementById('myLocation');
button.addEventListener('click', findMyLocation);

// function for getting coorodinates as well outputting text with a hyperlink
function findMyLocation() {

  // gets elements from html doc
  const status = document.getElementById('status');
  const map = document.getElementById('map');

  // gives the map element a href and text and sets the text and href to blank
  map.href = '';
  map.textContent = '';

  // gets the coordinates
  function locationWasAquired(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;

    status.textContent = '';

    // adds the hyper link as well as the coordinates as text
    map.href = 'https://www.openstreetmap.org/#map=18/${lat}/${long}';
    map.textContent = `Latitude: ${lat} °, Longitude: ${long} °`;
  }

  // sends an error message if it cannot get the coordinates 
  function errorOccured() {
    status.textContent = 'I am Sorry But I Could Not Get Your Location';
  }

  
  if (!navigator.geolocation) {
    status.textContent = 'Your Browser Cannot Handle GeoLoacting';
  } else {
    status.textContent = 'Finding Your Location...';
    navigator.geolocation.getCurrentPosition(locationWasAquired, errorOccured);
  }
}
