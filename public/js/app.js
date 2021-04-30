// script tag for google places
const gKey = 'AIzaSyBX63r-WVeIUwaLArYbnhDTKwDwWt8np-s';
const gScript = document.createElement('script');
gScript.async = 'true';
gScript.src = `https://maps.googleapis.com/maps/api/js?key=${gKey}&libraries=places&callback=activatePlacesSearch`;
document.body.append(gScript);

const addressInput = document.getElementById('address');
const submitBtn = document.querySelector('.submit-btn');

// autocomplete from google places
function activatePlacesSearch() {
  const autocomplete = new google.maps.places.Autocomplete(addressInput);
}

const getTrain = async (address) => {
  const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${gKey}`);
  const data = await response.json();

  if (response) {
    lat = data.results[0].geometry.location.lat;
    lon = data.results[0].geometry.location.lng;
    console.log(lat, lon);
  }

  const placeRes = await fetch(
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=train_station
    &keyword=cruise&key=${gKey}`
  );
  const placeData = await placeRes.json();

  if (placeRes) {
    console.log(placeData);
  }
};

submitBtn.addEventListener('click', () => {
  const inputVal = addressInput.value;
  getTrain(inputVal);
});
