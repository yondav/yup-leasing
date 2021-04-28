const { Unit } = require('../../models');

const unit = new Unit({
  status: 'active',
  unit_num: '1',
  access: 'LB #1122',
  op: 100,
  move_in: 'May 1, 2021',
  market_as: 'apartment',
  lease_term: 12,
  gross_rent: 2700,
  concession: true,
  months_free: 1,
  furnished: false,
  legal_beds: 3,
  full_bath: 1,
  half_bath: 0,
  total_rooms: 5,
  size: 900,
  desc: 'this is a description of the apartment',
  building_id: 3,
});

console.log(unit.net_rent);
