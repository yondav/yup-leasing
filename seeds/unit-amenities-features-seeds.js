/**
 * /seeds/unit-amenities-features-seeds.js
 *
 * @description: seeds data for unit amenities features table
 *
 */

const { UnitAmenitiesFeatures } = require('../models');

const unitAmenitiesFeaturesData = [
  {
    central_air: true,
    dishwasher: true,
    fireplace: false,
    hardwood_floors: true,
    washer_dryer: false,
    unit_amenities_id: 1,
  },
];

const seedUnitAmenitiesFeatures = () => UnitAmenitiesFeatures.bulkCreate(unitAmenitiesFeaturesData);

module.exports = seedUnitAmenitiesFeatures;
