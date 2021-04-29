/**
 * /seeds/unit-rooms-seeds.js
 *
 * @description: seeds data for unit_lease table
 *
 */

const { UnitRooms } = require('../models');

const unitRoomsData = [
  {
    total_rooms: 4,
    legal_beds: 1,
    full_bath: 1,
    half_bath: 0,
    size: 800,
    furnished: false,
    unit_id: 1,
  },
];

const seedUnitRooms = () => UnitRooms.bulkCreate(unitRoomsData);

module.exports = seedUnitRooms;
