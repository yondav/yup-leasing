/**
 * /seeds/unit-amenities-outdoor-seeds.js
 *
 * @description: seeds data for unit amenities outdoor table
 *
 */

const { UnitAmenitiesOutdoor } = require('../models');

const unitAmenitiesOutdoorData = [
  {
    balcony: true,
    garden: false,
    private_roof: false,
    roof_rights: false,
    terrace: true,
  },
];

const seedUnitAmenitiesOutdoor = () => UnitAmenitiesOutdoor.bulkCreate(unitAmenitiesOutdoorData);

module.exports = seedUnitAmenitiesOutdoor;
