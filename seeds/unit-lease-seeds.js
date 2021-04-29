/**
 * /seeds/unit-lease-seeds.js
 *
 * @description: seeds data for unit_lease table
 *
 */

const { UnitLease } = require('../models');

const unitLeaseData = [
  {
    gross_rent: 1795,
    concession: false,
    months_free: 0,
    lease_term: 12,
    move_in: 'May 1, 2021',
    unit_id: 1,
  },
];

const seedUnitLease = () => UnitLease.bulkCreate(unitLeaseData);

module.exports = seedUnitLease;
