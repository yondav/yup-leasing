// add/edit listing - mgmt dropdown card
const mgmtDrop = document.querySelector('.mgmt-dropdown');
const options = document.querySelectorAll('option');
console.log(mgmtDrop);

const selectRow = document.querySelector('.select-mgmt-row');
const addRow = document.querySelector('.add-mgmt-row hide');

mgmtDrop.addEventListener('click', () => {
  options.forEach((option) => {
    option.addEventListener('click', (e) => {
      if (e.target.hasAttribute('selected') && e.target.value === 'Add New Management Company') {
        selectRow.classList.toggle('hide');
        addRow.classList.toggle('hide');
      } else if (e.target.hasAttribute('selected') && e.target.hasAttribute('value')) {
        const value = e.target.getAttribute('value');
        console.log(value);
      }
    });
  });
});

// // script tag for google places
// const gKey = 'AIzaSyBX63r-WVeIUwaLArYbnhDTKwDwWt8np-s';
// dbURL = 'http://localhost:5000/api/';
// const gScript = document.createElement('script');
// gScript.async = 'true';
// gScript.src = `https://maps.googleapis.com/maps/api/js?key=${gKey}&libraries=places&callback=activatePlacesSearch`;
// document.body.append(gScript);

// const addressInput = document.getElementById('address');
// const unitInput = document.getElementById('unit');
// const createBtn = document.querySelector('.create-btn');
// let addressVal;
// let unitVal;

// // autocomplete from google places
// function activatePlacesSearch() {
//   const autocomplete = new google.maps.places.Autocomplete(addressInput);
// }

// createBtn.addEventListener('click', () => {
//   addressVal = addressInput.value;
//   unitVal = unitInput.value;
//   buildingAddress(addressVal);
// });

// const buildingAddress = async (address) => {
//   const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${gKey}`);
//   const data = await response.json();

//   const lat = data.results[0].geometry.location.lat;
//   const lon = data.results[0].geometry.location.lng;

//   const street =
//     (await data.results[0].address_components[0].long_name) + ' ' + data.results[0].address_components[1].long_name;
//   const neighborhood = await data.results[0].address_components[2].long_name;
//   const city = await data.results[0].address_components[3].long_name;
//   const zip = await data.results[0].address_components[4].long_name;

//   const createBuilding = await fetch(`${dbURL}building`, {
//     method: 'POST',
//   });

//   if (createBuilding) {
//     console.log('you know it');
//   } else {
//     console.log('nope');
//   }
// };

// const getTrains = async () => {
//   const response = await fetch(`https://data.cityofnewyork.us/resource/kk4q-3rt2.json`);
//   const data = await response.json();
//   console.log(data);
// };

// getTrains();

// const placeResponse = await fetch(
//   `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lon}&radius=1500&type=train_station&key=${gKey}`
// );
// const placeData = await placeResponse.json();
// console.log(placeData);
