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

const searchGeo = async (address) => {
  const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${gKey}`);

  if (response) {
    console.log(response);
  }
};

submitBtn.addEventListener('click', () => {
  const inputVal = addressInput.value;
  searchGeo(inputVal);
});
