const gKey = 'AIzaSyBX63r-WVeIUwaLArYbnhDTKwDwWt8np-s';
const buildingInput = document.getElementById('building');
const addRow = document.querySelector('.add-row');
const selectRow = document.querySelector('.select-row');
const drop = document.querySelector('.dropdown');
const options = drop.options;
const cardFooter = document.querySelector('.card-footer');

// dropdown menu event listener
drop.addEventListener('change', () => {
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

// add/edit listing - mgmt dropdown card '/new-listing/management'
const mgmtFormHandler = () => {
  const mgmt = document.getElementById('mgmt');
  const mgmtForm = document.querySelector('.mgmt-form');

  mgmtForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const mgmtVal = mgmt.value.trim();
    if (options.selectedIndex === options.length - 1) {
      if (mgmtVal === '') {
        alert('Please enter a valid management company before submitting');
      } else {
        confirm(`Select OK to add management company: ${mgmtVal}`);
        const createMgmt = await fetch('/api/management', {
          method: 'POST',
          body: JSON.stringify({ management_name: mgmtVal }),
          headers: { 'Content-Type': 'application/json' },
        });
        console.log('management val: ', mgmtVal);
        createMgmt.ok ? document.location.replace(`/new-listing/management/buildings/${mgmtVal}`) : alert('No good');
      }
    } else {
      const mgmtID = await drop.value;
      document.location.replace(`/new-listing/management/buildings/${mgmtID}`);
    }
  });
};

// add/edit listing - building dropdown card '/new-listing/building/:id' && '/new-listing/building/:name
const buildingFormHandler = () => {
  const buildingForm = document.querySelector('.building-form');

  buildingForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const buildingVal = buildingInput.value.trim();
    const mgmtID = document.getElementById('mgmt-id');
    if (options.selectedIndex === options.length - 1) {
      if (buildingVal === '') {
        alert('Please enter valid address before submitting');
      } else {
        confirm(`Select OK to confirm address: ${buildingVal}`);
        const addressFetch = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${buildingVal}&key=${gKey}`
        );
        const data = await addressFetch.json();
        const lat = data.results[0].geometry.location.lat;
        const lon = data.results[0].geometry.location.lng;

        const street =
          (await data.results[0].address_components[0].long_name) +
          ' ' +
          data.results[0].address_components[1].long_name;
        const neighborhood = await data.results[0].address_components[2].long_name;
        const city = await data.results[0].address_components[3].long_name;
        const zip = await data.results[0].address_components[4].long_name;

        const trains = await fetch(`https://data.cityofnewyork.us/resource/kk4q-3rt2.json`);
        const trainData = await trains.json();
        let stations = [];

        await trainData.forEach((station) => {
          const stationName = station.name;
          const stationLines = station.line;
          const stationLat = station.the_geom.coordinates[1];
          const stationLon = station.the_geom.coordinates[0];

          const distance = (lat1, lon1, lat2, lon2, unit) => {
            let radlat1 = (Math.PI * lat1) / 180;
            let radlat2 = (Math.PI * lat2) / 180;
            let radlon1 = (Math.PI * lon1) / 180;
            let radlon2 = (Math.PI * lon2) / 180;
            let theta = lon1 - lon2;
            let radtheta = (Math.PI * theta) / 180;
            let dist =
              Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            dist = Math.acos(dist);
            dist = (dist * 180) / Math.PI;
            dist = dist * 60 * 1.1515;
            if (unit == 'M') {
              dist = dist * 1.609344 * 0.62137;
            }
            if (unit == 'N') {
              dist = dist * 0.8684;
            }
            stations.push({
              station_name: stationName,
              station_lines: stationLines.split('-'),
              distance: dist,
            });
            stations.sort((a, b) => (a.distance > b.distance ? 1 : -1));
          };
          distance(lat, lon, stationLat, stationLon, 'M');
        });
        // console.log(stations.slice(0, 5));
        const createBuilding = await fetch('/api/building', {
          method: 'POST',
          body: JSON.stringify({
            street_address: street,
            neighborhood: neighborhood,
            city: city,
            zip_code: zip,
            trains: stations.slice(0, 5),
            management_id: mgmtID.value.trim(),
          }),
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }
  });
};

if (
  document.location.pathname === '/new-listing/management/' ||
  document.location.pathname === '/new-listing/management'
) {
  mgmtFormHandler();
}
if (document.location.pathname.includes('/new-listing/management/buildings')) {
  // script tag for google places
  const gScript = document.createElement('script');
  gScript.async = 'true';
  gScript.src = `https://maps.googleapis.com/maps/api/js?key=${gKey}&libraries=places&callback=initAutoFill`;
  document.body.append(gScript);

  // autocomplete from google places
  function initAutoFill() {
    const autocomplete = new google.maps.places.Autocomplete(buildingInput);
  }
  buildingFormHandler();
}
