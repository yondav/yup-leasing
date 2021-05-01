// script tag for google places
const gKey = 'AIzaSyBX63r-WVeIUwaLArYbnhDTKwDwWt8np-s';
const gScript = document.createElement('script');
gScript.async = 'true';
gScript.src = `https://maps.googleapis.com/maps/api/js?key=${gKey}&libraries=places&callback=activatePlacesSearch`;
document.body.append(gScript);

const addressInput = document.getElementById('address');
const unitInput = document.getElementById('unit');
const createBtn = document.querySelector('.create-btn');
let addressVal;
let unitVal;

// autocomplete from google places
function activatePlacesSearch() {
  const autocomplete = new google.maps.places.Autocomplete(addressInput);
}

createBtn.addEventListener('click', () => {
  addressVal = addressInput.value;
  unitVal = unitInput.value;
  buildingAddress(addressVal);
});

const buildingAddress = async (address) => {
  const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${gKey}`);
  const data = await response.json();

  const street =
    (await data.results[0].address_components[0].long_name) + ' ' + data.results[0].address_components[1].long_name;
  const neighborhood = await data.results[0].address_components[2].long_name;
  const city = await data.results[0].address_components[3].long_name;
  const zip = await data.results[0].address_components[4].long_name;

  console.log(street, neighborhood, city, zip);
  console.log(unitVal);
};
