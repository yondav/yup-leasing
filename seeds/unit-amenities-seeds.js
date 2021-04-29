/**
 * /seeds/unit-amenities-seeds.js
 *
 * @description: seeds data for unit amenities table
 *
 */

const { UnitAmenities } = require('../models');
const seedUnitAmenitiesOutdoor = require('./unit-amenities-outdoor-seeds');

const unitAmenitiesData = [
  {
    unit_id: 1,
    unit_amenities_outdoor_id: 1,
    // central_air: true,
    // dishwasher: true,
    // fireplace: false,
    // hardwood_floors: true,
    // washer_dryer: false,
    // city_view: true,
    // garden_view: false,
    // park_view: false,
    // skyline_view: true,
    // water_view: false,
  },
];

const seedUnitAmenities = async () => {
  await seedUnitAmenitiesOutdoor();
  UnitAmenities.bulkCreate(unitAmenitiesData);
};

module.exports = seedUnitAmenities;
