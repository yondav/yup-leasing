/**
 * /seeds/management-seeds.js
 *
 * @description: seeds data for management table
 *
 */

const { Management } = require('../models');

const managementData = [
  {
    management_name: 'Gold',
  },
  {
    management_name: 'Mr. Lox',
  },
];

const seedManagement = () => Management.bulkCreate(managementData);

module.exports = seedManagement;
