/**
 * /seeds/unit-amenities-view-seeds.js
 *
 * @description: seeds data for unit amenities view table
 *
 */

const { UnitAmenitiesView } = require('../models');

const unitAmenitiesViewData = [
  {
    city_view: true,
    garden_view: false,
    park_view: false,
    skyline_view: true,
    water_view: false,
    unit_amenities_id: 1,
  },
];

const seedUnitAmenitiesView = () => UnitAmenitiesView.bulkCreate(unitAmenitiesViewData);

module.exports = seedUnitAmenitiesView;
