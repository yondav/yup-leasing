/**
 * /models/index.js
 *
 * @description: Model Associations
 *
 */

// Models
const Management = require('./Management');
const Building = require('./Building');
const BuildingAmenities = require('./BuildingAmenities');
const Unit = require('./Unit');
const UnitAmenities = require('./UnitAmenities');

// Management.hasMany(Building, {
//   foreignKey: 'management_id',
// });

// Building.belongsTo(Management, {
//   foreignKey: 'management_id',
// });

// BuildingAmenities.belongsTo(Building, {
//   foreignKey: 'building_id',
// });

// Building.hasOne(BuildingAmenities, {
//   foreignKey: 'building_id',
//   as: 'building_amenities',
// });

// Building.hasMany(Unit, {
//   foreignKey: 'building_id',
// });

// Unit.belongsTo(Building, {
//   foreignKey: 'building_id',
// });

// UnitAmenities.belongsTo(Unit, {
//   foreignKey: 'unit_id',
// });

// Unit.hasOne(UnitAmenities, {
//   foreignKey: 'unit_id',
//   as: 'unit_amenities',
// });

UnitAmenities.belongsTo(Unit, {
  foreignKey: 'unit_id',
  as: 'unit_amenities',
});

Unit.hasOne(UnitAmenities, {
  foreignKey: 'unit_id',
  as: 'unit_amenities',
});

Unit.belongsTo(Building, {
  foreignKey: 'building_id',
});

Building.hasMany(Unit, {
  foreignKey: 'building_id',
});

Building.hasOne(BuildingAmenities, {
  foreignKey: 'building_id',
  as: 'building_amenities',
});

BuildingAmenities.belongsTo(Building, {
  foreignKey: 'building_id',
  as: 'building_amenities',
});

Management.hasMany(Building, {
  foreignKey: 'management_id',
});

Building.belongsTo(Management, {
  foreignKey: 'management_id',
});

module.exports = { Management, Building, BuildingAmenities, Unit, UnitAmenities };
