/**
 * /seeds/index.js
 *
 * @description: calls all functions for seeding to seed data in correct order
 *
 */

// seed functions
const seedManagement = require('./management-seeds');
const seedBuilding = require('./building-seeds');
const seedBuildingAmenities = require('./buildingAmenities-seeds');
const seedUnit = require('./unit-seeds');
const seedUnitLease = require('./unit-lease-seeds');
const seedUnitAmenities = require('./unitAmenities-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedManagement();
  console.log('\n----- MANAGEMENT SEEDED -----\n');

  await seedBuilding();
  console.log('\n----- BUIDING SEEDED -----\n');

  await seedBuildingAmenities();
  console.log('\n----- BUILDING AMENITIES SEEDED -----\n');

  await seedUnit();
  console.log('\n----- UNIT SEEDED -----\n');

  await seedUnitAmenities();
  console.log('\n----- UNIT AMENITIES SEEDED -----\n');

  process.exit(0);
};

seedAll();
