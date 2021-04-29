/**
 * /seeds/unit-amenities-seeds.js
 *
 * @description: seeds data for unit amenities table
 *
 */

const { UnitAmenities } = require('../models');
const seedUnitAmenitiesOutdoor = require('./unit-amenities-outdoor-seeds');
const seedUnitAmenitiesFeatures = require('./unit-amenities-features-seeds');
const seedUnitAmenitiesView = require('./unit-amenities-view-seeds');

const unitAmenitiesData = [
  {
    unit_id: 1,
  },
];

const seedUnitAmenities = async () => {
  await UnitAmenities.bulkCreate(unitAmenitiesData);
  await seedUnitAmenitiesOutdoor();
  await seedUnitAmenitiesFeatures();
  await seedUnitAmenitiesView();
};

module.exports = seedUnitAmenities;
