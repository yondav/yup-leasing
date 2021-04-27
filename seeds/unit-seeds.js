/**
 * /seeds/unit-seeds.js
 *
 * @description: seeds data for unit table
 *
 */

const { Unit } = require('../models');

const unitData = [
  {
    status: 'active',
    unit_num: '1F',
    access: 'Call Tenant: Raymond (929) 293-3100',
    op: 100,
    move_in: 'May 1, 2021',
    market_as: 'apartment',
    lease_term: '12 months',
    gross_rent: 1795,
    concession: false,
    months_free: 0,
    furnished: false,
    legal_beds: 1,
    full_bath: 1,
    half_bath: 0,
    total_rooms: 4,
    size: 800,
    desc: 'this is a description of the apartment',
    building_id: 1,
  },
  {
    status: 'active',
    unit_num: '1',
    access: 'Call Tenants / Ana: 347-829-1434 Juan: 347-876-5498',
    op: 100,
    move_in: 'May 1, 2021',
    market_as: 'apartment',
    lease_term: '12 months',
    gross_rent: 2250,
    concession: false,
    months_free: 0,
    furnished: false,
    legal_beds: 2,
    full_bath: 1,
    half_bath: 0,
    total_rooms: 4,
    size: 800,
    desc: 'this is a description of the apartment',
    building_id: 2,
  },
  {
    status: 'active',
    unit_num: '2',
    access: 'LB #1122',
    op: 100,
    move_in: 'May 1, 2021',
    market_as: 'apartment',
    lease_term: '12 months',
    gross_rent: 3300,
    concession: true,
    months_free: 1,
    furnished: false,
    legal_beds: 4,
    full_bath: 1,
    half_bath: 0,
    total_rooms: 6,
    size: 1000,
    desc: 'this is a description of the apartment',
    building_id: 3,
  },
  {
    status: 'active',
    unit_num: '1',
    access: 'LB #1122',
    op: 100,
    move_in: 'May 1, 2021',
    market_as: 'apartment',
    lease_term: '12 months',
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
  },
  {
    status: 'active',
    unit_num: '3',
    access: '(210) 877-4343',
    op: 100,
    move_in: 'May 1, 2021',
    market_as: 'apartment',
    lease_term: '12 months',
    gross_rent: 2800,
    concession: false,
    months_free: 0,
    furnished: false,
    legal_beds: 4,
    full_bath: 2,
    half_bath: 1,
    total_rooms: 8,
    size: 1100,
    desc: 'this is a description of the apartment',
    building_id: 4,
  },
];

const seedUnit = () => Unit.bulkCreate(unitData);

module.exports = seedUnit;
