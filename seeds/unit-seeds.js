/**
 * /seeds/unit-seeds.js
 *
 * @description: seeds data for unit table
 *
 */

const { Unit } = require('../models');
const seedUnitLease = require('./unit-lease-seeds');
const seedUnitRooms = require('./unit-rooms-seeds');
const seedUnitDesc = require('./unit-desc-seeds');

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
  await seedUnitLease();
  await seedUnitRooms();
  await seedUnitDesc();
};

module.exports = seedUnit;
