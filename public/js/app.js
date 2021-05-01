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
  console.log(data);

  const street =
    data.results[0].address_components[0].long_name + ' ' + data.results[0].address_components[1].long_name;
  const neighborhood = data.results[0].address_components[2].long_name;
  const city = data.results[0].address_components[3].long_name;
  const zip = data.results[0].address_components[4].long_name;

  console.log(street, neighborhood, city, zip);
};

submitBtn.addEventListener('click', () => {
  const inputVal = addressInput.value;
  getTrain(inputVal);
});
