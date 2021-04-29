/**
 * /seeds/unit-desc-seeds.js
 *
 * @description: seeds data for unit_desc table
 *
 */

const { UnitDesc } = require('../models');

const unitDescData = [
  {
    desc: 'This is a description of the apartment.',
    unit_id: 1,
  },
];

const seedUnitDesc = () => UnitDesc.bulkCreate(unitDescData);

module.exports = seedUnitDesc;
