/**
 * /seeds/unit-seeds.js
 *
 * @description: seeds data for unit table
 *
 */

const { Unit } = require('../models');
const seedUnitLease = require('./unit-lease-seed');

const unitData = [
  {
    unit_num: '1F',
    status: 'active',
    market_as: 'apartment',
    access: 'Call Tenant: Raymond (929) 293-3100',
    op: 100,
    building_id: 1,
  },
];

const seedUnit = async () => {
  await Unit.bulkCreate(unitData);
  seedUnitLease();
};

module.exports = seedUnit;
