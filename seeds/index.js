/**
 * /seeds/index.js
 *
 * @description: calls all functions for seeding to seed data in correct order
 *
 */

// seed functions
const seedManagement = require('./management-seeds');
const seedBuilding = require('./building-seeds');
const seedBuildingAmen = require('./buildingAmen-seeds');
const seedUnit = require('./unit-seeds');
const seedUnitAmen = require('./unitAmen-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedManagement();
  console.log('\n----- MANAGEMENT SEEDED -----\n');

  await seedBuilding();
  console.log('\n----- BUIDING SEEDED -----\n');

  await seedBuildingAmen();
  console.log('\n----- BUILDING AMENITIES SEEDED -----\n');

  await seedUnit();
  console.log('\n----- UNIT SEEDED -----\n');

  await seedUnitAmen();
  console.log('\n----- UNIT AMENITIES SEEDED -----\n');

  process.exit(0);
};

seedAll();
