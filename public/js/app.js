// add/edit listing - mgmt dropdown card
const MgmtFormHandler = () => {
  const cardFooter = document.querySelector('.card-footer');
  const mgmt = document.getElementById('mgmt');
  const mgmtForm = document.querySelector('.mgmt-form');
  const mgmtDrop = document.querySelector('.mgmt-dropdown');
  const options = mgmtDrop.options;

  const selectRow = document.querySelector('.select-mgmt-row');
  const addRow = document.querySelector('.add-mgmt-row');
  mgmtDrop.addEventListener('change', () => {
    if (
      options.selectedIndex > 0 &&
      options.selectedIndex < options.length - 1 &&
      cardFooter.classList.contains('hide')
    ) {
      cardFooter.classList.toggle('hide');
    } else if (options.selectedIndex === 0) {
      if (!cardFooter.classList.contains('hide')) cardFooter.classList.toggle('hide');
    } else if (options.selectedIndex === options.length - 1) {
      if (cardFooter.classList.contains('hide')) cardFooter.classList.toggle('hide');
      addRow.classList.remove('hide');
      selectRow.classList.add('hide');
    }
  });

  mgmtForm.addEventListener('submit', async (e) => {
    const mgmtVal = mgmt.value.trim();
    e.preventDefault();
    if (options.selectedIndex === options.length - 1) {
      if (mgmtVal === '') {
        alert('Please enter a valid management company before submitting');
      } else {
        confirm(`Select OK to add management company: ${mgmt.value}`);
        const createMgmt = await fetch('/api/management', {
          method: 'POST',
          body: JSON.stringify({ management_name: mgmtVal }),
          headers: { 'Content-Type': 'application/json' },
        });
        createMgmt.ok ? alert('Management Company Added') : alert('No good');
      }
    } else {
      const mgmtID = mgmtDrop.value;
      console.log(mgmtID);
      const getMgmt = await fetch(`/api/management/${mgmtID}`, {
        method: 'GET',
      });
      const mgmtData = await getMgmt.json();
      console.log(mgmtData);
    }
  });
};

MgmtFormHandler();
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
