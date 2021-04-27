/**
 * /models/index.js
 *
 * @description: Model Associations
 *
 */

// Models
const Management = require('./Management');
const Building = require('./Building');
const BuildingAmen = require('./BuildingAmen');
const Unit = require('./Unit');
const UnitAmen = require('./UnitAmen');

Management.hasMany(Building, {
  foreignKey: 'management_id',
  onDelete: 'SET NULL',
});

Building.belongsTo(Management, {
  foreignKey: 'management_id',
});

BuildingAmen.belongsTo(Building, {
  foreignKey: 'building_id',
});

Building.hasMany(Unit, {
  foreignKey: 'building_id',
});

Unit.belongsTo(Building, {
  foreignKey: 'building_id',
});

UnitAmen.belongsTo(Unit, {
  foreignKey: 'unit_id',
});

module.exports = { Management, Building, BuildingAmen, Unit, UnitAmen };
